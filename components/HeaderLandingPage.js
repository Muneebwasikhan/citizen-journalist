import React from "react";
import { TouchableOpacity, Platform } from "react-native";
import MyText from "./MyText";
import { Icon, Header, Avatar } from "react-native-elements";
import { Actions } from "react-native-router-flux";

export default class HeaderLandingPage extends React.Component {
  render() {
    return (
      <Header
      placement="left"
        containerStyle={{
          paddingTop: `${Platform.OS === 'ios' ? 16 : 0}` * 1,
          height: 70,
          borderBottomWidth: 0,
          shadowOffset: { width: 0, height: 20 },
          shadowColor: "black",
          shadowOpacity: 0.2,
          shadowRadius: 20,
        }}
        backgroundColor="#6a1b9a"
        leftComponent={
          <TouchableOpacity
            onPress={() => {
              console.log("menu");
              Actions.uploadVideo();
            }}
          >
            <Icon name="menu" color="#fff" />
          </TouchableOpacity>
        }
        centerComponent={
          <MyText
            style={{ color: "white", fontSize: 22 }}
            fontFamily="myFont-Bold"
          >
            The Citizen Journalist
          </MyText>
        }
        rightComponent={
          <TouchableOpacity
            onPress={() => {
              console.log("profile");
            }}
          >
            <Avatar
              rounded
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
              }}
            />
          </TouchableOpacity>
        }
      />
    );
  }
}

