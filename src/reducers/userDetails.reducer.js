import * as loginUserAction from "../actions/userDetails.actions";
const user = (
  state = {
    userDetails: null,
    status: ""
  },
  action
) => {
  switch (action.type) {
    case loginUserAction.GET_USER_DETAILS_SUCCESS: {
      return Object.assign({}, state, {
        status: action.status,
        userDetails: action.userDetails
      });
    }
    default:
      return state;
  }
};
export default user;
