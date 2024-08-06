import { UPDATE_CART } from "./actionItem";
import { UPDATE_SIGN_IN_DATA } from "./actionItem";

export const addData=(data)=>{
    return {type:UPDATE_SIGN_IN_DATA,payload:data}
}
export const updateCart=(data)=>{
    return {type:UPDATE_CART,payload:data}
}