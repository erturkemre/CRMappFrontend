import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import userReducer from "./userReducer";
import customerReducer from "./customerReducer";

const rootReducer = combineReducers({
  globalReducer,
  userReducer,
  customerReducer,
});

export default rootReducer;