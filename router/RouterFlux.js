import React, { Component } from "react";
import { View } from "react-native";
import { Router, Stack, Scene, Tabs, Actions } from "react-native-router-flux";
import LoginPage from "../screens/loginPage/LoginPage";
import LandingPage from "../screens/landingPage/LandingPage";
import HeaderLandingPage from '../components/HeaderLandingPage';
import UploadVideo from "../screens/UploadVideo/UploadVideo";

class RouterFlux extends Component {
  render() {
    return (
      <Router navBar={HeaderLandingPage}>
        <Stack key="root">
          <Scene
            key="loginpage"
            component={LoginPage}
            // title="Login"
            hideNavBar={true}
          />
          <Scene
            key="landingPage"
            // initial={true}
            component={LandingPage}
            // title="Landing Page"
            // hideNavBar={true}
          />
          <Scene
            key="uploadVideo"
            // initial={true}
            component={UploadVideo}
            // title="Landing Page"
            // hideNavBar={true}
          />
        </Stack>
      </Router>
    );
  }
}

export default RouterFlux;
