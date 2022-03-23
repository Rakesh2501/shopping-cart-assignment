import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { connect } from 'react-redux'
import Cart from '../Cart/Cart';
import './NavBar.styles.css'

import { logOut } from '../../actions/authAction'
import { cartOpen } from '../../actions/cartAction'
import { getTotalCartItems } from  '../../selectors/cartSelector'

let CartIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" className="cart-icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
    )
}


function NavBar(props){

    let navigate = useNavigate()

    const hanldeLogOut = () => {
        props.logOut()
        navigate("/signin")
    }

    return(
        <React.Fragment>
            <div className='navbar'>
                <div className='menu-1'>
                    <img src={`/static/images/logo.png`} className='logo'/>
                    <div className='menu-btn'>
                        <Link className='menu-link' to='/home'>Home</Link>
                    </div>
                    <div className='menu-btn'>
                        <Link className='menu-link' to='/products'>Products</Link>
                    </div>
                    
                </div>

                <div className='menu-1 right-menu'>
                    {
                        props.isLoggedIn ? (
                            <div className='menu-btn'>
                                {/* <Link className='menu-link' to='/signin'>LogOut</Link> */}
                                <div onClick={hanldeLogOut}>
                                    <span>LogOut</span>    
                                </div>
                            </div> 
                        )
                        :
                        (
                        <React.Fragment>
                            <div className='menu-btn'>
                                <Link className='menu-link' to='/signin'>SignIn</Link>
                            </div>
                            <div className='menu-btn'>
                                <Link className='menu-link' to='/register'>Register</Link>
                            </div>

                        </React.Fragment>
                        )
                    }
                    <div onClick={()=>props.cartOpen()} className='cart-logo-container'>
                        <span><CartIcon/> {props.totalCartItems} Items</span>
                    </div>
                </div>
        
                
            </div>
            {props.isCartOpen ?<Cart /> : ''}
        </React.Fragment>
    )
}
    


const mapStateToProps = (state) => {
    return{
        isLoggedIn: state.authReducer.isLoggedIn,
        userName: state.authReducer.userName,
        isCartOpen: state.cartReducer.isCartOpen,
        totalCartItems: getTotalCartItems(state.cartReducer) 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: ()=> dispatch(logOut()),
        cartOpen: ()=>{dispatch(cartOpen())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);


{/* <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
</svg> */}