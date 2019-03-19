import React from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import { LinearGradient, Font } from "expo";
import MyText from "./MyText";
import { Input, Button } from "react-native-elements";

export default class LandingPage extends React.Component {
  render() {
    return (
      <View>

        {/* header */}
        <View style={{ display: 'flex', flexDirection: 'row',width: '100%',paddingLeft: 10,paddingRight: 10,paddingTop: 10,paddingBottom: 10, justifyContent: 'center',alignItems: 'center',}}>
       <MyText style={{ flex: 3, color: 'white', fontSize: 18}}
        fontFamily='myFont-SemiBold'>Adil Altaf</MyText>
       <MyText  style={{ flex: 1, color: 'white', fontSize: 12, textAlign: 'right'}}
        fontFamily='myFont-SemiBold'>21 Feb, 2019</MyText>
        </View>
       <MyText>sdfsdfs</MyText>

       {/* trending part */}
       <View style={{ display: 'flex', flexDirection: 'row',width: '100%',paddingLeft: 10,paddingRight: 10,paddingTop: 10,paddingBottom: 5, justifyContent: 'center',alignItems: 'center',}}>
       <MyText style={{flex: 3, color: 'white', fontSize: 15}}
        fontFamily='myFont-SemiBold'>PIAIC Launching at Global Marquee</MyText>
       <MyText  style={{ flex: 1, color: 'white', fontSize: 12, textAlign: 'right'}}
        fontFamily='myFont-SemiBold'>trending # 1</MyText>
        </View>

        {/* hastaq part */}
        <View style={{ display: 'flex', flexDirection: 'row',width: '100%',paddingLeft: 10,paddingRight: 10,paddingTop: 0,paddingBottom: 5, justifyContent: 'center',alignItems: 'center',}}>
       <MyText style={{flex: 3, color: 'white', fontSize: 13, opacity: 0.6}}
        fontFamily='myFont-SemiBold'>#technology #piaic #artificialIntelligence</MyText>
       <MyText  style={{ flex: 1 }}></MyText>
        </View>

        {/* likedislike btns */}
        <View style={{ display: 'flex', flexDirection: 'row',width: '100%',paddingLeft: 10,paddingRight: 10,paddingTop: 10,paddingBottom: 5, justifyContent: 'center',alignItems: 'center',}}>
       <View style={{flex: 2, color: 'white', fontSize: 13, opacity: 0.6,display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
       <TouchableOpacity>
       <MyText  style={{ color: 'white', fontSize: 12 }}
        fontFamily='myFont-SemiBold'>Like</MyText>
       </TouchableOpacity>
       <TouchableOpacity>
       <MyText  style={{ color: 'white', fontSize: 12 }}
        fontFamily='myFont-SemiBold'>Dislike</MyText>
       </TouchableOpacity>
       <TouchableOpacity>
       <MyText  style={{ color: 'white', fontSize: 12 }}
        fontFamily='myFont-SemiBold'>Share now</MyText>
       </TouchableOpacity>
       <TouchableOpacity>
       <MyText  style={{ color: 'white', fontSize: 12 }}
        fontFamily='myFont-SemiBold'>Comments</MyText>
       </TouchableOpacity>
       </View>
       <MyText  style={{ flex: 1 }}></MyText>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  newsfeedText: {
    color: "white",
    fontSize: 30
  },
  citizenJournalistHeading: {
    color: "white",
    fontSize: 22
  }
});
