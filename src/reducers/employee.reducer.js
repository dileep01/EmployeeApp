import * as employeeListAction from "../actions/employee.actions";

const employees = (
  state = {
    employeeList: null,
    status: ""
  },
  action
) => {
  switch (action.type) {
    case employeeListAction.GET_EMPLOYEELIST_SUCCESS: {
      return Object.assign({}, state, {
        status: action.status,
        employeeList: action.employeeList
      });
    }
    default:
      return state;
  }
};
export default employees;
