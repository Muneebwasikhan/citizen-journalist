import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MyText from "./MyText";
import { Icon } from "react-native-elements";

export default class ExpandableDiscription extends React.Component {
  state = {
    expanded: false
  };

  render() {
    const { expanded } = this.state;
    return (
      <View style={{ backgroundColor: "#4a148c" }}>
        <View style={styles.descriptionPanel}>
          <MyText style={styles.descriptionWord} fontFamily="myFont-SemiBold">
            Description
          </MyText>
          <TouchableOpacity
            onPress={() => {
              this.setState({ expanded: !expanded });
            }}
            style={styles.showMoreLess}
          >
            <MyText
              style={styles.showMoreLessWord}
              fontFamily="myFont-SemiBold"
            >
              {`${expanded ? "Show Less" : "Show More"}`}
            </MyText>
            {!expanded && (
              <Icon name="arrow-drop-down" color="white" size={20} />
            )}
            {expanded && <Icon name="arrow-drop-up" color="white" size={20} />}
          </TouchableOpacity>
        </View>
        {expanded && (
          <View>
            <View style={styles.expendedDiscriptionPanel}>
              <MyText
                style={styles.expendedDiscription}
                fontFamily="myFont-Regular"
              >
                {this.props.discription}
              </MyText>
            </View>
            <View style={styles.categoryCont}>
              <MyText style={styles.category} fontFamily="myFont-SemiBold">
                Category
              </MyText>
              <MyText style={styles.technology} fontFamily="myFont-Regular">
              {this.props.category}
              </MyText>
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  descriptionPanel: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  descriptionWord: { flex: 3, color: "white", fontSize: 15 },
  showMoreLess: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  showMoreLessWord: { color: "white", fontSize: 12 },
  expendedDiscriptionPanel: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  expendedDiscription: { flex: 1, color: "white", fontSize: 12 },
  categoryCont: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  category: { flex: 2, color: "white", fontSize: 12 },
  technology: { flex: 6, color: "white", fontSize: 12 }
});
