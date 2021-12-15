import { combineReducers } from "redux";
import auth from "./auth/reducer";
import global from "./global/reducer";
import setting from "./setting/reducer";

const reducers = combineReducers({
  auth,
  global,
  setting,
});

export default reducers;