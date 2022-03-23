import { ADD_TO_CART, CART_OPEN, REMOVE_FROM_CART, DECREASE_ITEM, CLEAR_CART } from "../constants/cartConstants"

const initialState = {
    cartItems:[],
    isCartOpen: false
}

function cartReducer(state=initialState,action){
    switch(action.type){

        case ADD_TO_CART:
            let items = state.cartItems
            let index = items.findIndex((item)=>{
                return item.id == action.payload.id
            })

            if(index!=-1){
                action.payload["quantity"] += 1
                items[index] = action.payload
            }else{
                action.payload["quantity"] = 1
                items = [...items,action.payload]
            }
            
            return {
                        ...state,
                        cartItems: [...items]
                    }

        case REMOVE_FROM_CART:

            let remove_cart_item = state.cartItems
            let filtered_cart = remove_cart_item.filter((item)=>{
                return item.id!=action.payload
            })
            // return {...state,cartItems: filtered_cart}
            return {
                ...state,
                cartItems: [...filtered_cart]
            }

        case DECREASE_ITEM:
            let cartArr = state.cartItems
            let itemIndex = state.cartItems.findIndex((item)=>{
                return item.id == action.payload.id
            })

            if(cartArr[itemIndex].quantity==1){
                cartArr.splice(itemIndex,1)
            }else{
                cartArr[itemIndex].quantity-=1
            }

            return {
                ...state,
                cartItems: [...cartArr]
            }

        case CART_OPEN:

            return{...state,isCartOpen:!state.isCartOpen}

        case CLEAR_CART:
            return{cartItems:[],isCartOpen:false}
            
        default:
            return state
    }
}

export default cartReducer;