import React, {Component, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import './Register.styles.css';

function Register(props){

    const [fName,setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email,setEmail] = useState("");
    const [emailErr,setEmailErr] = useState("");
    const [password,setPassword] = useState("");
    const [passswordErr,setPasswordErr] = useState("");
    const [cPassword,setCPassword] = useState("");
    const [cPassswordErr,setCPasswordErr] = useState("");
    const [formErr, setFormErr] = useState("")

    let navigate = useNavigate()

    const inputHandler = (e) =>{
        let targetName = e.target.name;
        let targetValue = e.target.value;
    
        switch(targetName){
            case "fName":
                setName(targetValue)
                break
            case "lastName":
                setLastName(targetValue)
                break
            case "email":
                setEmail(targetValue)
                validateInput("email",targetValue)
                break
            case "password":
                setPassword(targetValue)
                validateInput("password",targetValue)
                break
            case "cPassword":
                setCPassword(targetValue)
                validateInput("cPassword",targetValue)
        }
    }

    const validateInput = (input, value) => {
        switch(input){
            case "email":
                let regExp = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
                let validation = regExp.test(value)
                if(validation){
                    setEmailErr("")
                }else{
                    setEmailErr("Invalid Email")
                }
                break
            case "password":
                let pwd = value
                let pwdExp = new RegExp('[a-zA-Z]+[0-9]+')

                let pwdValidation = pwdExp.test(pwd)
                
                if(pwd.length<6){
                    setPasswordErr("Password does not match criteria")
                }
                else if(pwdValidation){
                    setPasswordErr("")
                }else{
                    setPasswordErr("Password does not match criteria")
                }
                break

        }
    }

    const submitHanlder=(e)=>{
        e.preventDefault()
        if(password !== cPassword){
            setCPasswordErr("Both passwords should match")
        }
        else if(email && password && !(emailErr && passswordErr)){
            setFormErr("")
            navigate("/home")
        }
        else{
            setFormErr("Form has errors")
        }
    }

    return(
        <div className='register-container'>
            <div className='signup'>
                <div className='form-context'>
                    <h2>Signup</h2>
                    <p>We do not share personal details with anyone.</p>
                </div>
                <div className='form'>
                    <form onSubmit={submitHanlder}>
                        <div className='floating-label-group'>
                            <input type="text" name='fName' value={fName} onChange={inputHandler} required/>
                            <label className="floating-label">First Name</label>
                        </div>
                        <div className='floating-label-group'>
                            <input type="text" name='lastName' value={lastName} onChange={inputHandler} required/>
                            <label className="floating-label">Last Name</label>
                        </div>
                        <div className='floating-label-group'>
                            <input type="text" name='email' value={email} onChange={inputHandler} required/>
                            <label className="floating-label">Email</label>
                        </div>
                        <div className='floating-label-group'>
                            <input type="password" name='password' value={password} onChange={inputHandler} required />
                            <label className="floating-label">Password</label>
                        </div>
                        <div className='floating-label-group'>
                            <input type="password" name='cPassword' value={cPassword} onChange={inputHandler} required/>
                            <label className="floating-label">Confirm Password</label>
                        </div>
                        {emailErr ? <p className='err-msg'>{emailErr}</p> : ''}
                        {passswordErr ? <p className='err-msg'>{passswordErr}</p> : ''}
                        {cPassswordErr ? <p className='err-msg'>{cPassswordErr}</p> : ''}
                        <button type='submit'>Signup</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Register;