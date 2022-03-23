import { STORE_PRODUCTS, ADD_CATEGORY } from '../constants/productConstants';

export function storeProducts(data){
    return{
        type:STORE_PRODUCTS,
        payload: data
    }
}

export function addCategory(category){
    return{
        type:ADD_CATEGORY,
        payload:category
    }
}