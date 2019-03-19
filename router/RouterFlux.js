import React, { Component } from "react";
import { View } from "react-native";
import { Router, Stack, Scene, Tabs, Actions } from "react-native-router-flux";
import LoginPage from "../screens/LoginPage";

class RouterFlux extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            key="loginpage"
            component={LoginPage}
            title="Login"
            hideNavBar={true}
          />
        </Stack>
      </Router>
    );
  }
}

export default RouterFlux;
