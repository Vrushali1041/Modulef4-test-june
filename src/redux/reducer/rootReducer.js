import {  combineReducers } from "redux";
import productReducer from "./prouctReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    poducts: productReducer,
    cart: cartReducer
})

export default rootReducer