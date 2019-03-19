import React from 'react';
import { StyleSheet, View,Dimensions } from 'react-native';
import { LinearGradient, Font } from 'expo';
import MyText from '../components/MyText';
import { Input } from 'react-native-elements';


export default class LoginPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <LinearGradient 
       colors={['#4a148c', '#7b1fa2']}
       style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            width: Dimensions.get('window').width,
height: Dimensions.get('window').height
          }}
          />
        <MyText
        style={styles.citizenJournalistHeading}
        fontFamily={'Montserrat-Bold'}
        >The Citizen Journalist</MyText>
        <MyText
        style={styles.videoStreamAppText}
        fontFamily={'Montserrat-Regular'}>
          Video streaming app
        </MyText>
          <Input
          placeholder='User Name'
          inputContainerStyle={{ borderBottomWidth: 0 }}
          containerStyle={{width: '90%', backgroundColor: 'white',borderRadius: 3}}
          inputStyle={{fontSize: 15, color: '#4a148c',paddingTop: 15,paddingBottom: 15}}
          />
          <Input
          placeholder='User Name'
          inputContainerStyle={{ borderBottomWidth: 0 }}
          containerStyle={{width: '90%', backgroundColor: 'white',borderRadius: 3}}
          inputStyle={{fontSize: 15, color: '#4a148c',paddingTop: 15,paddingBottom: 15}}
          />
          <MyText
        style={styles.forgotPasswordText}
        fontFamily={'Montserrat-Regular'}>
          Forgot password?
        </MyText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  citizenJournalistHeading: {
    color: 'white',
    fontSize: 22
  },
  videoStreamAppText: {
    color: 'white',
    fontSize: 18
  },
  forgotPasswordText: {
    color: 'white',
    fontSize: 10
  }
});
