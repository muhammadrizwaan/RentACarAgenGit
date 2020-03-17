import React, { Component } from 'react';
import {
  View,
  //   Image,
  Text,
  Animated,
  Dimensions,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

// import Assets from '../assets/Assets';
import { StackActions, NavigationActions } from 'react-navigation';

const h = Dimensions.get('window').height;
const height = h * 2;

class Splash extends Component {
  circle = new Animated.Value(0);
  logo = new Animated.Value(0);
  title = new Animated.Value(0);
  sos = new Animated.Value(0);

  componentDidMount() {
    Animated.sequence([
      Animated.timing(this.circle, {
        toValue: 1,
        duration: 3000,
      }),
      Animated.timing(this.logo, {
        toValue: 1,
        duration: 1000,
      }),
      Animated.timing(this.title, {
        toValue: 1,
        duration: 1000,
      }),
      Animated.timing(this.sos, {
        toValue: 1,
        duration: 1000,
      }),
    ]).start();

    /*
        TODO Hide splash screen
    **/

    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(() => {
      // // Add your logic for the transition
      // this.props.navigation.navigate('loginScreen');
      const actionToDispatch = StackActions.reset({
        index: 0,
        key: null, // black magic
        actions: [NavigationActions.navigate({ routeName: 'loginStack' })],
      });
      this.props.navigation.dispatch(actionToDispatch);
    }, 8000); //, 8000);

    /*
        TODO Hide splash screen END
    **/
  }

  render() {
    const { navigation } = this.props;

    const translateY = this.circle.interpolate({
      inputRange: [0, 1],
      outputRange: [-height, 0],
    });

    const tranY = this.logo.interpolate({
      inputRange: [0, 1],
      outputRange: [h, 0],
    });

    const opacity = this.title.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    const sos = this.sos.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* <Animated.Image source = {Assets.logoLogin} style = {[styles.icons, { transform: [{ translateY:tranY }] } ]} /> */}
          <Animated.Text
            style={[
              { color: 'white', fontSize: 30 },
              { transform: [{ translateY: tranY }] },
            ]}>
            Logo Here
          </Animated.Text>
          <Animated.View style={[styles.circle, { transform: [{ translateY }] }]} />

          {/* <Animated.Text
          style={{marginTop: 10, color: 'white', fontSize: 30, opacity}}>
          Let's Go
        </Animated.Text> */}

          <Animated.Text style={[styles.welcome, { opacity }]}>
            Welcome Agent
          </Animated.Text>

          <Animated.Text style={[styles.sos, { opacity: sos }]}>
            Tag line{'\n'}(Something)
          </Animated.Text>
        </View>
      </SafeAreaView>
    );
  }
}
export default Splash;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ddd',
    backgroundColor: '#fc9e4f',
    backgroundColor: 'gray',
  },
  container: {
    flex: 1,
    // backgroundColor: '#3ab550',
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    position: 'absolute',
    top: 40,
    color: 'white',
    fontSize: 18,
  },
  sos: {
    marginTop: 80,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  icons: {
    width: 205,
    height: 40,
  },
  circle: {
    width: '100%',
    height:h * 2,
    backgroundColor: '#ff7500',
    backgroundColor: '#fc9e4f',
    borderRadius: h,
    position: 'absolute',
    zIndex: -1,
  },
});
