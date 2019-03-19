import React from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import { LinearGradient, Font } from "expo";
import MyText from "../../components/MyText";
import { Input, Button } from "react-native-elements";

export default class LandingPage extends React.Component {
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
        <MyText
        style={styles.newsfeedText}
        fontFamily='myFont-SemiBold'
        >
          Newsfeed
        </MyText>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    // alignItems: "center",
    // justifyContent: "center"
  },
  newsfeedText: {
    color: "white",
    fontSize: 30
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
    textAlign: "right",
    width: "90%"
  },
  loginBtnText: {
    color: "#4a148c",
    fontSize: 20,
    textAlign: "center"
  },
  loginBtnContainer: {
    width: "90%",
    borderRadius: 20,
    backgroundColor: "white",
    paddingTop: 8,
    paddingBottom: 8
  },
  signupNowText: {
    color: "white",
    fontSize: 17
  }
});
