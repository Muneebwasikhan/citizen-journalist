import React from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient, Font } from "expo";
import MyText from "../../components/MyText";
import { Input, Button } from "react-native-elements";
import NewsFeedCard from '../../components/NewsFeedCard'
import HeaderLandingPage from "../../components/HeaderLandingPage";

export default class LandingPage extends React.Component {

  state = {
    posts: [
      {
        name:'Furious Trailer', 
        date:'Oct 20, 2018', 
        videoSrcId:'9Yam5B_iasY', 
        videoName:'AQUAMAN Trailer 2 (4K ULTRA HD) NEW 2018', 
        trending:'trending # 1', 
        hashTags:'#technology #piaic #artificialIntelligence', 
        views:'124', 
        discription:'President of Pakistan Dr. Arif Alvi launching the PIAIC website and the event was successful.', 
        category:'Technology', 
      },
      {
        name:'Peter McKinnon', 
        date:'Jul 10, 2018', 
        videoSrcId:'yQBGDRAYRJs', 
        videoName:'10 LIGHTROOM tips you SHOULD KNOW!', 
        trending:'trending # 4', 
        hashTags:'#technology #piaic #artificialIntelligence', 
        views:'2,074,061', 
        discription:'Edit your photos with my Lightroom PRESET PACK: https://goo.gl/BeQAcG,- The Music I use: https://goo.gl/IMZC9A - AMAZING for YouTubers,- Colour Graded with my PM LUTS Pack : https://goo.gl/JmUrM7,- ',
        category:'People & Blogs', 
      },
      {
        name:'Quang Nguyen', 
        date:'Jul 22, 2015', 
        videoSrcId:'xcJtL7QggTI', 
        videoName:'Sony 4K Demo: Another World', 
        trending:'trending # 5', 
        hashTags:'#technology #piaic #artificialIntelligence', 
        views:'28,480,601', 
        discription:'Video 4K Demo by Sony.', 
        category:'Entertainment', 
      },
      {
        name:'Adil Altaf', 
        date:'21 Feb, 2019', 
        videoSrcId:'pba_YmWDAIU', 
        videoName:'PIAIC Launching at Global Marquee', 
        trending:'trending # 1', 
        hashTags:'#technology #piaic #artificialIntelligence', 
        views:'124', 
        discription:'President of Pakistan Dr. Arif Alvi launching the PIAIC website and the event was successful.', 
        category:'Technology', 
      },
      {
        name:'Adil Altaf', 
        date:'21 Feb, 2019', 
        videoSrcId:'pba_YmWDAIU', 
        videoName:'PIAIC Launching at Global Marquee', 
        trending:'trending # 3', 
        hashTags:'#technology #piaic #artificialIntelligence', 
        views:'124', 
        discription:'President of Pakistan Dr. Arif Alvi launching the PIAIC website and the event was successful.', 
        category:'Technology', 
      },
    ]
  }
  render() {
    const { posts } = this.state;
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
        <ScrollView>
        <MyText
        style={styles.newsfeedText}
        fontFamily='myFont-SemiBold'
        >
          Newsfeed
        </MyText>

        {
          posts.map((val,index) => 
            <NewsFeedCard 
            key={index}
            name={val.name}
            date={val.date}
            videoSrc={`https://www.youtube.com/embed/${val.videoSrcId}?controls=0`} 
            videoName={val.videoName} 
            trending={val.trending}
            hashTags={val.hashTags} 
            views={val.views}
            discription={val.discription}
            category={val.category}
            />
          )
        }
         {/* <NewsFeedCard 
        name='Adil Altaf' 
        date='21 Feb, 2019' 
        videoSrc='https://www.youtube.com/embed/pba_YmWDAIU?controls=0' 
        videoName='PIAIC Launching at Global Marquee' 
        trending='trending # 1' 
        hashTags='#technology #piaic #artificialIntelligence' 
        views='124' 
        discription='President of Pakistan Dr. Arif Alvi launching the PIAIC website and the event was successful.' 
        category='Technology' 
        />
         <NewsFeedCard 
        name='Adil Altaf' 
        date='21 Feb, 2019' 
        videoSrc='https://www.youtube.com/embed/pba_YmWDAIU?controls=0' 
        videoName='PIAIC Launching at Global Marquee' 
        trending='trending # 1' 
        hashTags='#technology #piaic #artificialIntelligence' 
        views='124' 
        discription='President of Pakistan Dr. Arif Alvi launching the PIAIC website and the event was successful.' 
        category='Technology' 
        /> */}
        </ScrollView>
        
       
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
    fontSize: 22,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 10,
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
