import { initalData } from "./intialState";
import { UPDATE_CART, UPDATE_SIGN_IN_DATA } from "./actionItem";
export const signInReducer = (state = initalData, action) => {
  switch (action.type) {
    case UPDATE_SIGN_IN_DATA:
      return { ...state, data: action.payload };
    case UPDATE_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};
