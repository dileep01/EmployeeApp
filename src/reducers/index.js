import { combineReducers } from "redux";
import employees from "../reducers/employee.reducer";
import user from "../reducers/userDetails.reducer";
export default combineReducers({ employees, user });
