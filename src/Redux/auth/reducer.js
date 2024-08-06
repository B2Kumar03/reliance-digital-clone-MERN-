import {UPDATE_AUTH} from "./actionItem.js"
import { intialState } from "./intialState"

export const authReducer=(state=intialState,action)=>{
    switch(action.type){
        case UPDATE_AUTH:
            return {...state,auth:!state.auth,token:action.payload}
        default:
            return state
    }
        
}