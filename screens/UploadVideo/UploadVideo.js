import React from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import { LinearGradient, Font } from "expo";
import MyText from "../../components/MyText";
import { Input, Button } from "react-native-elements";
import { Actions } from 'react-native-router-flux';

export default class UploadVideo extends React.Component {
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
        style={styles.UploadVideoSection}
        >
        <Input
          placeholder="Video title"
          inputContainerStyle={{ borderBottomWidth: 0 }}
          containerStyle={{
            width: "90%",
            backgroundColor: "white",
            borderRadius: 3,
            marginTop: 10,
          }}
          inputStyle={{
            fontSize: 15,
            color: "#4a148c",
            paddingTop: 15,
            paddingBottom: 15
          }}
        />
        <Input
          placeholder="Video description"
          inputContainerStyle={{ borderBottomWidth: 0 }}
          containerStyle={{
            width: "90%",
            height: 200,
            backgroundColor: "white",
            borderRadius: 3,
            marginTop: 10,
          }}
          inputStyle={{
            fontSize: 15,
            color: "#4a148c",
            paddingTop: 15,
            paddingBottom: 15
          }}
        />
        <Input
          placeholder="Hash tags"
          inputContainerStyle={{ borderBottomWidth: 0 }}
          containerStyle={{
            width: "90%",
            backgroundColor: "white",
            borderRadius: 3,
            marginTop: 10,
          }}
          inputStyle={{
            fontSize: 15,
            color: "#4a148c",
            paddingTop: 15,
            paddingBottom: 15
          }}
        />
        <TouchableOpacity
        onPress={() => {Actions.landingPage()}}
          style={styles.loginBtnContainer}
        >
          <MyText
            style={styles.loginBtnText}
            fontFamily={"myFont-Bold"}
          >
            Upload video
          </MyText>
        </TouchableOpacity>
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
  UploadVideoSection: {
    // flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 15,
    textAlign: 'center'
  },
  loginBtnContainer: {
    width: "90%",
    borderRadius: 20,
    backgroundColor: "white",
    paddingTop: 12,
    paddingBottom: 12,
    marginTop: 10,
  },
  signupNowText: {
    color: "white",
    fontSize: 17
  },
});
