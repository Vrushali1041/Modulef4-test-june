import { API_TO_CART } from "./actionTypes";



export const addToCart = (product) =>({
    type: API_TO_CART,
    payload: product
})
