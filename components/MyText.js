import React from "react";
import { Text } from "react-native";
import { Font } from "expo";

export default class MyText extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "myFont-Bold": require("../assets/fonts/Montserrat/Montserrat-Bold.ttf"),
      "myFont-Regular": require("../assets/fonts/Montserrat/Montserrat-Regular.ttf"),
      "myFont-SemiBold": require("../assets/fonts/Montserrat/Montserrat-SemiBold.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;
    const { fontFamily, style } = this.props;
    if (fontLoaded) {
      return (
        <Text style={{ fontFamily: fontFamily, ...style }}>
          {this.props.children}
        </Text>
      );
    } else {
      return <Text style={ style }>{this.props.children}</Text>;
    }
  }
}
