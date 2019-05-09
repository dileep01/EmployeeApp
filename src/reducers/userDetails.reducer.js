import * as loginUserAction from "../actions/userDetails.actions";
const user = (
  state = {
    loading: false,
    userDetails: null,
    status: "",
    error: ""
  },
  action
) => {
  switch (action.type) {
    case loginUserAction.GET_USER_DETAILS_REQUEST: {
      return Object.assign({}, state, {
        loading: true,
        status: action.status
      });
    }
    case loginUserAction.GET_USER_DETAILS_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        status: action.status,
        userDetails: action.userDetails
      });
    }
    case loginUserAction.GET_USER_DETAILS_FAILURE: {
      return Object.assign({}, state, {
        loading: false,
        status: action.status,
        error: action.error
      });
    }
    default:
      return state;
  }
};
export default user;
