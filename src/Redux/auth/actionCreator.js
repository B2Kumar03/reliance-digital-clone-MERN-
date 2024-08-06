import {UPDATE_AUTH} from "./actionItem.js"

export const updataAuth = (token) => {
  return { type: UPDATE_AUTH, payload: token };
};
