import { API_TO_CART } from "../actions/actionTypes";

const initialState ={
    cart: []
}
 
const cartReducer =(state = initialState, action) =>{
    switch(action.type){
        case API_TO_CART: return({
            ...state, cart: [...state.cart,action.payload]
        })
       default:
        return state
    }
}

export default cartReducer