import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Splash from './modules/views/Splash';
import Landing from './modules/views/Landing';
import Register from './modules/views/Register';
import EnterOtp from './modules/views/EnterOtp';
import RegisterDetails from './modules/views/RegisterDetails';
import Login from './modules/views/Login';
import ForgetPassword from './modules/views/ForgetPassword';
import Home from './modules/views/Home';
import Test from './modules/views/Test';
import Trip_History from './modules/views/Trip_History';
import Customer_Reviews from './modules/views/Customer_Reviews';
import FleetRegistration from './modules/views/RegisterDetails';
import LocationMonitoring from './modules/views/LocationMonitoring';
import ImagesScreen from './modules/views/ImagesScreen';
import Profile from './modules/views/Profile';
import LogOut from './modules/views/LogOut';

import DrawerContainer from './modules/components/DrawerContainer';


// const App = () => {
//   return <AppContainer />;
// };

const SplashStack = createStackNavigator(
  {
    splashScreen: {screen: Splash},
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const LoginStack = createStackNavigator(
  {
    landingScreen: {screen: Landing},
    registerScreen: {screen: Register},
    enterOtpScreen: {screen: EnterOtp},
    registerDetailsScreen: {screen: RegisterDetails},
    loginScreen: {screen: Login},
    forgetPasswordScreen: ForgetPassword,
    ImagesScreen: {screen: ImagesScreen},
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    homeScreen: {screen: Home},
    Customer_Reviews:{screen:Customer_Reviews},
    Trip_History:{screen:Trip_History},
    FleetRegistration:{screen:FleetRegistration},
    LocationMonitoring:{screen:LocationMonitoring},
    Profile:{screen:Profile},
    LogOut:{screen:LogOut}
  },
  {
    unmountInactiveRoutes: true,
    gesturesEnabled: false,
    // contentComponent: DrawerContainer,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'orange',
      },
    },
    drawerBackgroundColor: 'white',
    contentOptions:{
      activeTintColor:'green',
    }
  },
);

const PrimaryNav = createStackNavigator(
  {
    splashStack: {screen: SplashStack},
    loginStack: {screen: LoginStack},
    drawerStack: {screen: AppDrawerNavigator},
  },
  {
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'splashStack',
    
  },
);

export default createAppContainer(PrimaryNav);
// const AppContainer = createAppContainer(PrimaryNav);

// export default App;
