import { createSelector } from 'reselect';

export const getCartItems = (state)=>{
    return state.cartItems
}

export const getTotalAmount = createSelector(
    [getCartItems],
    (items)=>{
        
        let amount = items.reduce((prev,curr)=>{
            return prev + (curr.quantity*curr.price)
        },0)
        return amount
    } 
)

export const getTotalCartItems = createSelector(
    [getCartItems],
    (items)=> items.length
)

// {quantity:0,price:0}