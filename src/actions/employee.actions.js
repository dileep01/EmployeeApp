import { SUCCESS, REQUEST, ERROR } from "../utils/constants";
export const GET_EMPLOYEELIST_REQUEST = "GET_EMPLOYEELIST_REQUEST";
export const GET_EMPLOYEELIST_SUCCESS = "GET_EMPLOYEELIST_SUCCESS";
export const GET_EMPLOYEELIST_FAILURE = "GET_EMPLOYEELIST_FAILURE";
const employeeList = {
  user: [
    {
      id: 1,
      name: "test1",
      age: "11",
      gender: "male",
      email: "test1@gmail.com",
      phoneNo: "9738452245"
    },
    {
      id: 2,
      name: "test2",
      age: "12",
      gender: "male",
      email: "test2@gmail.com",
      phoneNo: "9738452245"
    },
    {
      id: 3,
      name: "test3",
      age: "13",
      gender: "male",
      email: "test3@gmail.com",
      phoneNo: "9738452245"
    },
    {
      id: 4,
      name: "test4",
      age: "14",
      gender: "male",
      email: "test4@gmail.com",
      phoneNo: "9738452245"
    },
    {
      id: 5,
      name: "test5",
      age: "15",
      gender: "male",
      email: "test5@gmail.com",
      phoneNo: "9738452245"
    },
    {
      id: 6,
      name: "test6",
      age: "16",
      gender: "male",
      email: "test6@gmail.com",
      phoneNo: "9738452245"
    }
  ]
};
export function getEmployeeListRequest() {
  return {
    type: GET_EMPLOYEELIST_REQUEST,
    status: REQUEST
  };
}
export function getEmployeeListSuccess() {
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
