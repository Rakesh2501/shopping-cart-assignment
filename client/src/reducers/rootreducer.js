import { combineReducers } from 'redux'

import authReducer from '../reducers/authReducer'
import cartReducer from './cartReducer';
import productsReducer from './productReducer';

const rootReducer = combineReducers({
    authReducer,
    cartReducer,
    productsReducer
})

export default rootReducer;