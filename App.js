import React, { Component } from "react";
import BottomTabNavigator from "./components/BottomTabNavigator";
import LoginScreen from "./screens/Login";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const appNavigator = createSwitchNavigator({
  Login: {
    screen: LoginScreen,
  },
  BottomTabNavigator: {
    screen: BottomTabNavigator,
  },
});

const AppContainer = createAppContainer(appNavigator);
