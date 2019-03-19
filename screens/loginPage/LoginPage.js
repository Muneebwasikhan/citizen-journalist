import React from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import { LinearGradient, Font } from "expo";
import MyText from "../../components/MyText";
import { Input, Button } from "react-native-elements";
import { Actions } from 'react-native-router-flux';

export default class LoginPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#4a148c", "#7b1fa2"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height
          }}
        />

        <View
        style={styles.LoginPageSection}
        >
        <MyText
          style={styles.logoText}
          fontFamily={"myFont-Bold"}
        >
          LOGO
        </MyText>
          
        <MyText
          style={styles.citizenJournalistHeading}
          fontFamily={"myFont-Bold"}
        >
          The Citizen Journalist
        </MyText>
        <MyText
          style={styles.videoStreamAppText}
          fontFamily={"myFont-Regular"}
        >
          Video streaming app
        </MyText>
        <Input
          placeholder="User Name"
          inputContainerStyle={{ borderBottomWidth: 0 }}
          containerStyle={{
            width: "90%",
            backgroundColor: "white",
            borderRadius: 3
          }}
          inputStyle={{
            fontSize: 15,
            color: "#4a148c",
            paddingTop: 15,
            paddingBottom: 15
          }}
        />
        <Input
          placeholder="User Name"
          inputContainerStyle={{ borderBottomWidth: 0 }}
          containerStyle={{
            width: "90%",
            backgroundColor: "white",
            borderRadius: 3
          }}
          inputStyle={{
            fontSize: 15,
            color: "#4a148c",
            paddingTop: 15,
            paddingBottom: 15
          }}
        />
        <MyText
          style={styles.forgotPasswordText}
          fontFamily={"myFont-Regular"}
        >
          Forgot password?
        </MyText>
        <TouchableOpacity
        onPress={() => {Actions.landingPage()}}
          style={styles.loginBtnContainer}
        >
          <MyText
            style={styles.loginBtnText}
            fontFamily={"myFont-Bold"}
          >
            Login
          </MyText>
        </TouchableOpacity>
        <MyText
          style={styles.signupNowText}
          fontFamily={"myFont-Bold"}
        >
          Don’t have an account? Signup now!
        </MyText>
        </View>
      
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  },
  LoginPageSection: {
    // flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "space-between",
    height: 390,
    width: '100%',
    display: 'flex',
    // backgroundColor: 'purple'
  },
  logoText: {
    color: "white",
    fontSize: 40
  },
  citizenJournalistHeading: {
    color: "white",
    fontSize: 22
  },
  videoStreamAppText: {
    color: "white",
    fontSize: 18
  },
  forgotPasswordText: {
    color: "white",
    fontSize: 14,
    textAlign: 'right',
    width: '90%'
  },
  loginBtnText: {
    color: "#4a148c",
    fontSize: 20,
    textAlign: 'center'
  },
  loginBtnContainer: {
    width: "90%",
    borderRadius: 20,
    backgroundColor: "white",
    paddingTop: 8,
    paddingBottom: 8,
  },
  signupNowText: {
    color: "white",
    fontSize: 17
  },
});
