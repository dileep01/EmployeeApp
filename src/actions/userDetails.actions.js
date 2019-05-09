import { SUCCESS, REQUEST, ERROR } from "../utils/constants";
export const GET_USER_DETAILS_SUCCESS = "GET_USER_DETAILS_SUCCESS";
const userDetails = {
  username: "prashant@gmail.com",
  password: "prashant123"
};

export function getUserDetails() {
  return {
    type: GET_USER_DETAILS_SUCCESS,
    status: SUCCESS,
    userDetails
  };
}
