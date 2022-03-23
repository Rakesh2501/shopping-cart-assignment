import { createSelector } from 'reselect';

const getAllProducts = (state) => {
    return state.products 
};

const getCategory = (state) => {
    return state.category
}

export const getFilteredproducts= createSelector(
    [getAllProducts,getCategory],
    (products, category)=>{
        if(!category){
            return products
        }else{
            let filteredProducts = products.filter((item)=>item.category == category)
            return filteredProducts
        }

    }
)
