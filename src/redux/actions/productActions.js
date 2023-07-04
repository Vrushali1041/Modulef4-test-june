import * as types from "./actionTypes"
import axios from "axios"


export const fetchProductRequest = () => ({
    type:  types.FETCH_PRODUCTS_REQUEST
})

export const fetchProductSuccess = (product) =>({
    type: types.FETCH_PRODUCTS_REQUEST,
    payload: product
})

export const fetchProductFailure = (error) =>({
    type: types.FETCH_PRODUCTS_FAILURE,
    payload: error
})

export const fetchProducts = ()=>{
    return(dispatch) => {
        dispatch(fetchProductRequest())
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => dispatch(fetchProductSuccess(response.data)))
        .catch(error => dispatch(fetchProductFailure(error)))
    }
}