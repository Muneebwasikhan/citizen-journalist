import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  WebView
} from "react-native";
import MyText from "./MyText";
import ExpandableDiscription from "./ExpandableDiscription";

export default class LandingPage extends React.Component {
  render() {
      const {name, date, videoSrc, videoName, trending, hashTags, views, discription, category } = this.props;
    return (
      <View>
        {/* header */}
        <View style={styles.nameDateHead}>
          <MyText style={styles.name} fontFamily="myFont-SemiBold">
            {name}
          </MyText>
          <MyText style={styles.date} fontFamily="myFont-SemiBold">
            {date}
          </MyText>
        </View>
        <View style={styles.webViewCont}>
          <WebView
            style={{ flex: 1 }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
            source={{
              uri: videoSrc
            }}
          />
        </View>

        {/* trending part */}
        <View style={styles.videoNameCont}>
          <MyText style={styles.videoName} fontFamily="myFont-SemiBold">
            {videoName}
          </MyText>
          <MyText style={styles.videoTrending} fontFamily="myFont-SemiBold">
            {trending}
          </MyText>
        </View>

        {/* hastaq part */}
        <View style={styles.hashtagCont}>
          <MyText style={styles.hashtag} fontFamily="myFont-SemiBold">
            {hashTags}
          </MyText>
          <MyText style={{ flex: 1 }} />
        </View>

        {/* likedislike btns */}
        <View style={styles.likeDislikeCont}>
          <View style={styles.likeDislikeSection}>
            <TouchableOpacity>
              <MyText style={styles.reaction} fontFamily="myFont-SemiBold">
                Like
              </MyText>
            </TouchableOpacity>
            <TouchableOpacity>
              <MyText style={styles.reaction} fontFamily="myFont-SemiBold">
                Dislike
              </MyText>
            </TouchableOpacity>
            <TouchableOpacity>
              <MyText style={styles.reaction} fontFamily="myFont-SemiBold">
                Share now
              </MyText>
            </TouchableOpacity>
            <TouchableOpacity>
              <MyText style={styles.reaction} fontFamily="myFont-SemiBold">
                Comments
              </MyText>
            </TouchableOpacity>
          </View>
          <MyText style={{ flex: 1 }}>
            <MyText style={styles.views} fontFamily="myFont-SemiBold">
              {views} views
            </MyText>
          </MyText>
        </View>

        <ExpandableDiscription discription={discription} category={category} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nameDateHead: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  name: { flex: 3, color: "white", fontSize: 18 },
  date: { flex: 1, color: "white", fontSize: 12, textAlign: "right" },
  webViewCont: { display: "flex", height: 200, width: "100%" },
  videoNameCont: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  videoName: { flex: 3, color: "white", fontSize: 15 },
  videoTrending: { flex: 1, color: "white", fontSize: 12, textAlign: "right" },
  hashtagCont: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 0,
    paddingBottom: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  hashtag: { flex: 3, color: "white", fontSize: 13, opacity: 0.6 },
  likeDislikeCont: {
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
  likeDislikeSection: {
    flex: 2,
    color: "white",
    fontSize: 13,
    opacity: 0.6,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  reaction: { color: "white", fontSize: 12 },
  views: { flex: 1, color: "white", fontSize: 12, textAlign: "right" }
});
