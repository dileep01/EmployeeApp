import React, { Component } from "react";
import { View } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import EmployeeList from "./src/screens/EmployeeList";
import LoginScreen from "./src/screens/LoginScreen";
//import Form from "./src/screens/Form";
const AppStack = createStackNavigator({
  LoginScreen: { screen: LoginScreen },
  EmployeeList: { screen: EmployeeList }
});
const AppContainer = createAppContainer(AppStack);
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
