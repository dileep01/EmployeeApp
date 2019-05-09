import { connect } from "react-redux";
import LoginScreen from "../screens/LoginScreen";
import { getUserDetails } from "../actions/userDetails.actions";

const mapStateToProps = state => {
  return {
    loading: state.user.loading,
    error: state.user.error,
    status: state.user.status,
    userDetails: state.user.userDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserDetails: () => {
      dispatch(getUserDetails());
    }
  };
};
const LoginScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
export default LoginScreenContainer;
