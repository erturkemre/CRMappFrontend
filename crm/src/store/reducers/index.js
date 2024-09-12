import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  globalReducer,
  userReducer,
});

export default rootReducer;