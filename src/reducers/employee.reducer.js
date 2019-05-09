import * as employeeListAction from "../actions/employee.actions";

const categories = (
  state = {
    loading: false,
    employeeList: null,
    status: "",
    error: ""
  },
  action
) => {
  switch (action.type) {
    case employeeListAction.GET_EMPLOYEELIST_REQUEST: {
      return Object.assign({}, state, {
        loading: true,
        status: action.status
      });
    }
    case employeeListAction.GET_EMPLOYEELIST_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        status: action.status,
        employeeList: action.employeeList
      });
    }
    case employeeListAction.GET_EMPLOYEELIST_FAILURE: {
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
export default employees;
