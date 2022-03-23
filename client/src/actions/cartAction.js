import { ADD_TO_CART,REMOVE_FROM_CART, CART_OPEN, DECREASE_ITEM, CLEAR_CART} from "../constants/cartConstants";

export function addToCart(item){

    return{
        type: ADD_TO_CART,
        payload: item
    }
}

export function removeFromCart(item){
    return{
        type: REMOVE_FROM_CART,
        payload: item
    }
}

export function cartOpen(){
    return{
        type: CART_OPEN
    }
}

export function decreaseItem(item){
    return{
        type: DECREASE_ITEM,
        payload: item
    }
}

export function clearCart(){
    return{
        type: CLEAR_CART
    }
}
