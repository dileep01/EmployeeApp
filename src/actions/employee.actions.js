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

export function getEmployeeList() {
  return async (dispatch, getState, api) => {
    dispatch(getEmployeeListRequest());
    try {
      //const result = await api.get(`sports/top.json?limit=${limit}`);
      //const resultJson = await result.json();
      dispatch(getEmployeeListSuccess(resultJson.data));
    } catch (e) {
      dispatch(getEmployeeListFailure(e.message));
    }
  };
}
