import { connect } from "react-redux";
import EmployeeList from "../screens/EmployeeList";
import { getEmployeeList } from "../actions/employee.actions";

const mapStateToProps = state => {
  return {
    loading: state.employees.loading,
    error: state.employees.error,
    status: state.employees.status,
    employeeList: state.employees.employeeList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEmployeeList: () => {
      dispatch(getEmployeeList());
    }
  };
};
const HomeScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeList);
export default HomeScreenContainer;
