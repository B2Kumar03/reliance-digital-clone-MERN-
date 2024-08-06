import { combineReducers, legacy_createStore } from "redux";

import { authReducer } from "./auth/reducer";
import { signInReducer } from "./SignInData/reducer";

const rootReducer = combineReducers({
  signIn: signInReducer,
  auth: authReducer,
});

export const store = legacy_createStore(rootReducer);
