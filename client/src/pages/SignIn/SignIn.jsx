import React, {Component, useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, Link, useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';

import { logIn } from '../../actions/authAction'

import './SignIn.styles.css';

function SignIn(props){

    const [email,setEmail] = useState("");
    const [emailErr,setEmailErr] = useState("");
    const [password,setPassword] = useState("");
    const [passswordErr,setPasswordErr] = useState("");
    const [formErr, setFormErr] = useState("")

    let navigate = useNavigate()

    const inputHandler = (e) =>{
        let targetName = e.target.name;
        let targetValue = e.target.value;
        switch(targetName){
            case "email":
                setEmail(targetValue)
                validateInput("email",targetValue)
                break
            case "password":
                setPassword(targetValue)
                validateInput("password",targetValue)
                break
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
                let password = value
                let pwdExp = new RegExp('[a-zA-Z]+[0-9]+')

                let pwdValidation = pwdExp.test(password)
                
                if(password.length<6){
                    setPasswordErr("Password does not match criteria")
                }
                else if(pwdValidation){
                    setPasswordErr("")
                }else{
                    setPasswordErr("Password does not match criteria")
                }

        }
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        if(email && password && !(emailErr && passswordErr)){
            setFormErr("")
            props.logIn(email)
            navigate("/home")
        }
        else{
            setFormErr("Form has errors")
        }

    }

    return(
        <div className='signin-container'>
            <div className='signin'>
                <div className='form-context'>
                    <h2>Login</h2>
                    <p>Get access to your Orders, Wishlist and Recommendations</p>
                </div>
                <div className='form'>
                    <form onSubmit={submitHandler}>
                        <div className='floating-label-group'>
                            <input type="text" value={email} name="email" onChange={inputHandler} required/>
                            <label className="floating-label">Email</label>
                            
                        </div>
                        
                        <div className='floating-label-group'>
                            <input type="password" value={password} name="password" onChange={inputHandler} required />
                            <label className="floating-label">Password</label>
                            
                        </div>
                        {emailErr ? <p className='err-msg'>{emailErr}</p> : ''}
                        {passswordErr ? <p className='err-msg'>{passswordErr}</p> : ''}
                        <button type='submit'>Login</button>
                    </form>
                </div>
            </div>

        </div>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (email) => dispatch(logIn(email))
    }
}

export default connect(null,mapDispatchToProps)(SignIn);