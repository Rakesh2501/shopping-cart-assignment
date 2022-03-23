import { STORE_PRODUCTS, ADD_CATEGORY} from '../constants/productConstants';

const initialState = {
    products:[],
    category:''
}

export function productsReducer(state=initialState, action){

    switch(action.type){
        case STORE_PRODUCTS:
            return {...state,products:[...action.payload]}
        case ADD_CATEGORY:
            return {...state,category:action.payload}
        default:
            return state
    }

}

export default productsReducer;