import { combineReducers } from "redux";
import Auth from "./Auth.js";
import NftReducer from "./NftReducer.js";


export default combineReducers(
  {
    Auth: Auth,
    NftReducer: NftReducer,
  });
