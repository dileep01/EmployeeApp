import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "../styles/LoginScreenStyles";
import Input from "../components/Input";
import Button from "../components/Button";
import PropTypes from "prop-types";
import { isValidPassword, isValidEmail } from "../utils/Validation";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { emailId: "", password: "" };
  }
  componentDidMount() {
    this.props.getUserDetails();
  }
  goToNext = () => {
    const { emailId, password } = this.state;
    if (!isValidEmail(emailId)) {
      return;
    } else if (!isValidPassword(password)) {
      return;
    } else {
      this.validateUser();
    }
  };
  validateUser = () => {
    const { userDetails } = this.props;
    const { emailId, password } = this.state;
    if (userDetails) {
      if (
        emailId === userDetails.username &&
        password === userDetails.password
      ) {
        this.props.navigation.navigate("EmployeeListContainer", {});
      }
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: "75%", margin: 20 }}>
          <Input
            onChangeText={val => this.setState({ emailId: val })}
            placeholder={"Please enter emailId"}
          />
        </View>

        <View style={{ width: "75%", margin: 20 }}>
          <Input
            onChangeText={val => this.setState({ password: val })}
            placeholder={"Please enter password"}
          />
        </View>
        <Button onPress={this.goToNext} />
      </View>
    );
  }
}
LoginScreen.propTypes = {
  userDetails: PropTypes.object,
  getUserDetails: PropTypes.func
};
LoginScreen.defaultProps = {};
