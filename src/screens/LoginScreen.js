import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "../styles/LoginScreenStyles";
import Input from "../components/Input";
import Button from "../components/Button";
import PropTypes from "prop-types";
import { isValidMobileNumber, isValidEmail } from "../utils/Validation";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { emailId: "", mobileNumber: "" };
  }
  goToNext = () => {
    this.props.navigation.navigate("EmployeeListContainer", {});
    console.log(isValidEmail(this.state.emailId));
    // if (isValidEmail(this.state.emailId)) {
    //   return;
    // } else if (isValidMobileNumber(this.state.mobileNumber)) {
    //   return;
    // } else {
    //   console.log(this.state.mobileNumber);
    // }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: "75%", margin: 20 }}>
          <Input onChangeText={val => this.setState({ emailId: val })} />
        </View>

        <View style={{ width: "75%", margin: 20 }}>
          <Input onChangeText={val => this.setState({ mobileNumber: val })} />
        </View>
        <Button onPress={this.goToNext} />
      </View>
    );
  }
}
LoginScreen.propTypes = {};
LoginScreen.defaultProps = {};
