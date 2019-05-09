import { SUCCESS, REQUEST, ERROR } from "../utils/constants";
export const GET_EMPLOYEELIST_REQUEST = "GET_EMPLOYEELIST_REQUEST";
export const GET_EMPLOYEELIST_SUCCESS = "GET_EMPLOYEELIST_SUCCESS";
export const GET_EMPLOYEELIST_FAILURE = "GET_EMPLOYEELIST_FAILURE";

export function getEmployeeListRequest() {
  return {
    type: GET_EMPLOYEELIST_REQUEST,
    status: REQUEST
  };
}
export function getEmployeeListSuccess(employeeList) {
  console.log("calledddd");
  return {
    type: GET_EMPLOYEELIST_SUCCESS,
    status: SUCCESS,
    employeeList
  };
}
export function getEmployeeListFailure(error) {
  return {
    type: GET_EMPLOYEELIST_FAILURE,
    status: ERROR,
    error
  };
}
