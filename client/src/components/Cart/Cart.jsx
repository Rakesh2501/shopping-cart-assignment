import React ,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Redirect, Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import { cartOpen,addToCart, decreaseItem, clearCart} from  "../../actions/cartAction"
import { getTotalAmount, getTotalCartItems} from "../../selectors/cartSelector"
import './Cart.styles.css'

function Cart(props){

    const checkout = () =>{
        props.clearCart()
    }

    return(
        <div className={`cart `}>
            <div className='cart-header'>
                <h3>My Cart</h3>
                <div className={'cart-close'} onClick={()=>props.cartOpen()}>X</div>
            </div>
            {
                props.cartItems.length >0 ? (
                    <React.Fragment>
                        <div className='cart-content'>
                            {
                                props.cartItems.map((item, i) => {
                                    return (
                                        <div className='cart-items' key={i}>
                                            <div className='cart-img'>
                                                <img src={item.imageURL} />
                                            </div>
                                            <div className='product-details'>
                                                <div><h4>{item.name}</h4></div>
                                                <div className='quantity'>
                                                    <div className={'quantity-btn'} onClick={() => props.decreaseItem(item)}> &#x2212;</div>
                                                    <span>{item.quantity}</span>
                                                    <div className={'quantity-btn'} onClick={() => props.addToCart(item)}> +</div>
                                                    <span>X &nbsp; Rs.{item.price}</span>
                                                </div>

                                            </div>
                                            <div className="total-amount">
                                                Rs.{item.quantity * item.price}
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='cart-promo'>
                            <img src={'/static/images/lowest-price.png'} />
                            <p>You won't find it cheaper anywhere</p>
                        </div>
                        <div className='checkout-cart-footer'>
                            <p>Promo Code can be applied on payment page</p>
                            <div className='checkout-cart-button' onClick={checkout}>
                                <p>Proceed to Checkout</p>
                                <p>Rs. {props.totalAmount} &nbsp; &#62;</p>
                            </div>
                        </div>
                    </React.Fragment>
                ):
                <div className='empty-cart'>
                    <h3>No Items in your cart</h3>
                    <p>Your favourite items are just a click away</p>
                </div>
            }
        </div>
    )

}

const mapStateToProps = (state) => {
    return({
        cartItems: state.cartReducer.cartItems,
        isCartOpen: state.cartReducer.isCartOpen,
        totalAmount: getTotalAmount(state.cartReducer),
        totalCartItems: getTotalCartItems(state.cartReducer)
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        cartOpen: ()=> dispatch(cartOpen()),
        addToCart: (item)=> dispatch(addToCart(item)),
        decreaseItem: (item)=> dispatch(decreaseItem(item)),
        clearCart: ()=>dispatch(clearCart())
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);