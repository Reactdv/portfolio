import { combineReducers } from "redux"
import userReducer from "./reducers"
import { auth }  from "./reducers"

export default combineReducers({
  userReducer,
  auth
})