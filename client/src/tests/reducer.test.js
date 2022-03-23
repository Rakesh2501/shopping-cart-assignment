import { CART_OPEN, DECREASE_ITEM} from '../constants/cartConstants';
import cartReducer from '../reducers/cartReducer';

describe('test-cart-reducer',()=>{

    const initialState = {
        cartItems:[],
        isCartOpen: false
    }

    it('should return the initial state',()=>{
        expect(cartReducer(undefined,{})).toEqual(initialState)
    })

    it('cart should toggle',()=>{
        expect(cartReducer(initialState,{type:CART_OPEN})).toEqual({...initialState,isCartOpen:!initialState['isCartOpen']})
    })

    it('quantity should decrease',()=>{
        const prevState1 = {
            cartItems:[
                {
                    name:'abc',
                    quantity:3,
                    id:1
                }       
            ],
            isCartOpen: false
        }
    
        const samplePayload = {
            name:'abc',
            id:1
        }
        let nextState = cartReducer(prevState1,{type:DECREASE_ITEM,payload:samplePayload})
        let quantity = nextState['cartItems'][0].quantity
        expect(quantity).toEqual(2)
    })

    it('remove item from cart when quantity becomes zero',()=>{
        const prevState1 = {
            cartItems:[
                {
                    name:'abc',
                    quantity:1,
                    id:1
                }       
            ],
            isCartOpen: false
        }
    
        const samplePayload = {
            name:'abc',
            id:1
        }
        let nextState = cartReducer(prevState1,{type:DECREASE_ITEM,payload:samplePayload})
        let itemIndex = nextState['cartItems'].findIndex((item)=>{
            return item.id == samplePayload.id
        })
        expect(itemIndex).toEqual(-1)
    })
})

