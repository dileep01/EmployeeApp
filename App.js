import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import EmployeeListContainer from "./src/containers/EmployeeListContainer";
import LoginScreen from "./src/screens/LoginScreen";
import LoginScreenContainer from "./src/containers/LoginScreenContainer";
import configureStore from "./configStore";
import { Provider } from "react-redux";
const AppStack = createStackNavigator({
  LoginScreenContainer: { screen: LoginScreenContainer },
  EmployeeListContainer: { screen: EmployeeListContainer }
});
const AppContainer = createAppContainer(AppStack);
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: configureStore(() => this.setState({ isLoading: false }))
    };
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <AppContainer />
      </Provider>
    );
  }
}
