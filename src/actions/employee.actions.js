import { SUCCESS, REQUEST, ERROR } from "../utils/constants";
export const GET_EMPLOYEELIST_SUCCESS = "GET_EMPLOYEELIST_SUCCESS";
import { employeeList } from "../utils/EmployeeData";
export function getEmployeeListSuccess() {
  return {
    type: GET_EMPLOYEELIST_SUCCESS,
    status: SUCCESS,
    employeeList
  };
}
