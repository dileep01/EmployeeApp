import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "../styles/LoginScreenStyles";
import Input from "../components/Input";
import Button from "../components/Button";
import PropTypes from "prop-types";
import { isValidPassword, isValidEmail } from "../utils/Validation";
import { DOESNT_EXIST, NOT_VALID_EMAIL } from "../utils/constants";
import Toast from "react-native-simple-toast";
import { StackActions, NavigationActions } from "react-navigation";
const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "EmployeeListContainer" })]
});
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { emailId: "", password: "" };
  }
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.props.getUserDetails();
  }
  _navigateToEmployeeList = () => {
    const { emailId, password } = this.state;
    if (!isValidEmail(emailId)) {
      Toast.show(NOT_VALID_EMAIL);
      return;
    } else if (!isValidPassword(password)) {
      Toast.show(NOT_VALID_PASSWORD);
      return;
    } else {
      this._validateUser();
    }
  };
  _validateUser = () => {
    const { userDetails } = this.props;
    const { emailId, password } = this.state;
    if (userDetails) {
      if (
        emailId === userDetails.username &&
        password === userDetails.password
      ) {
        this.props.navigation.dispatch(resetAction);
      } else {
        Toast.show(DOESNT_EXIST);
      }
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.emailHolder}>
          <Input
            onChangeText={val => this.setState({ emailId: val })}
            placeholder={"Please enter emailId"}
          />
        </View>

        <View style={styles.passwordHolder}>
          <Input
            onChangeText={val => this.setState({ password: val })}
            placeholder={"Please enter password"}
          />
        </View>
        <Button onPress={this._navigateToEmployeeList} label={"LOGIN"} />
      </View>
    );
  }
}
LoginScreen.propTypes = {
  userDetails: PropTypes.object,
  getUserDetails: PropTypes.func
};
