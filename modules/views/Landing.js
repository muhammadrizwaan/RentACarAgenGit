import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Assets from '../assets/Assets';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.decisionToNavigate = this.decisionToNavigate.bind(this);
}
componentDidMount() { 
  setTimeout(() => {
      this.decisionToNavigate();
  }, 3000);
}

decisionToNavigate() {
  const {navigate} = this.props.navigation;
  AsyncStorage.getItem('Phone').then((value) => {
      if (value) {
              const {navigate} = this.props.navigation;
              navigate("homeScreen");
      }
      else {
        navigate("loginScreen");
    }
  }).catch(function (err) {
      Alert.alert(err.toString())
  }).done();
}
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ImageBackground source={Assets.landingBg} style={styles.backgroundImage}>
          {/* <View style={styles.container}> */}
            
            {/* <View style={styles.containEmpty}> */}
            <ActivityIndicator size={"large"}/>
            {/* </View> */}
            
            {/* <TouchableOpacity
              style={[styles.btnSignUp]}
              onPress={() =>
                this.props.navigation.navigate('loginScreen')
              }>
              <Text style={styles.btnSignUpText}>Sign In</Text>
            </TouchableOpacity> */}
          {/* </View> */}
        </ImageBackground>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fc9e4f',
    backgroundColor: '#ddd',
    backgroundColor: '#ffd336',
    // background: Assets.landingBg,
  },
  backgroundImage: {
    flex:1,
    justifyContent: 'center', 
    alignItems: 'center', 
    // // flex: 1, 
    // // resizeMode: Image.resizeMode.contain, 
    resizeMode: 'cover', // or 'stretch'
    width: '100%',
    height: '100%',
    alignSelf: 'stretch',
  },
  container: {
    flex: 3,
    // backgroundColor: '#3ab550',
    // backgroundColor: 'gray',
    // alignItems: 'center',
    // justifyContent: 'center',
    alignItems: 'stretch',
  },
  containEmpty: {
    flex: 2.5,
  },
  btnSignUp: {
    flex: 0.5,
    // backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSignUpText: {
    // maxWidth: '80%',
    textAlign: 'center',
    width: '80%',
    fontSize: 16,
    color: '#ffffff',
    backgroundColor: '#9c9c9e',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  }
});
