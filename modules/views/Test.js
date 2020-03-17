import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Button,
  Image,
  ImageBackground,
} from 'react-native';
import ScrollableTabView, {
  DefaultTabBar,
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view-forked';
import Assets from '../assets/Assets';

export default class Test extends React.Component {
  render() {
    return (
      <ScrollableTabView
        renderTabBar={() => (
          <ScrollableTabBar
            style={styles.scrollStyle}
            tabStyle={styles.tabStyle}
          />
        )}
        tabBarTextStyle={styles.tabBarTextStyle}
        tabBarInactiveTextColor={'black'}
        tabBarActiveTextColor={'red'}
        tabBarUnderlineStyle={styles.underlineStyle}
        initialPage={3}>
        <View
          key={'1'}
          tabLabel={'first tab '}
          style={{flex: 1, backgroundColor: 'red'}}
        />
        <View
          key={'2'}
          tabLabel={'second tab'}
          style={{flex: 1, backgroundColor: 'blue'}}
        />
        <View
          key={'3'}
          tabLabel={'third tab'}
          style={{flex: 1, backgroundColor: 'yellow'}}
        />
        <View
          key={'4'}
          tabLabel={'four tab'}
          style={{flex: 1, backgroundColor: 'green'}}>
          <Text>This is the home screen</Text>
          <Image source={Assets.logoLogin} />
        </View>
        <View
          key={'5'}
          tabLabel={'fifth tab'}
          style={{flex: 1, backgroundColor: '#00ffff'}}
        />
      </ScrollableTabView>
      /* jshint ignore:start */
      /* jshint ignore:end */
    );
  }
}

const styles = StyleSheet.create({
  tabStyle: {},
  scrollStyle: {
    marginTop: 50,
    backgroundColor: 'white',
    // paddingLeft: 65,
    // paddingRight: 65,
    // // justifyContent: 'center',
  },
  tabBarTextStyle: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  underlineStyle: {
    height: 3,
    backgroundColor: 'red',
    borderRadius: 3,
    width: 15,
  },
});

// import * as React from 'react';
// import {
//   Platform, StyleSheet, Text, View, Dimensions, StatusBar, FlatList, ImageBackground, TextInput
// } from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';

// const FirstRoute = () => (
//   <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
// );

// const SecondRoute = () => (
//   <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
// );

// export default class App extends React.Component {
//   state = {
//     index: 0,
//     routes: [
//       { key: 'first', title: 'First' },
//       { key: 'second', title: 'Second' },
//     ],
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <TabView
//           navigationState={this.state}
//           renderScene={SceneMap({
//             first: FirstRoute,
//             second: SecondRoute,
//           })}
//           onIndexChange={index => this.setState({ index: index })}
//           initialLayout={{ width: Dimensions.get('window').width }}
//           style={styles.container}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//     marginTop: StatusBar.currentHeight
//   },

//   scene: {
//     flex: 1,
//   },
// });
// // import React, {Component} from 'react';
// // import {View, StyleSheet, SafeAreaView, Text, Button} from 'react-native';
// // import {
// //   TabViewAnimated,
// //   TabView,
// //   TabViewPage,
// //   TabBarTop,
// //   SceneMap,
// // } from 'react-native-tab-view';

// // export default class Test extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       index: 0,
// //       routes: [
// //         {key: '1', title: 'First'},
// //         {key: '2', title: 'Second'},
// //       ],
// //     };
// //   }

// //   _renderScene = ({route}) => {
// //     switch (route.key) {
// //       case '1':
// //         return <View style={{flex: 1, backgroundColor: '#ff4081'}} />;
// //       case '2':
// //         return <View style={{flex: 1, backgroundColor: '#673ab7'}} />;
// //       default:
// //         return null;
// //     }
// //   };

// //   _renderPage = props => (
// //     <TabViewPage {...props} renderScene={this._renderScene} />
// //   );

// //   render() {
// //     return (
// //       <View>
// //         <TabView
// //           navigationState={this.state}
// //           // // renderScene={this._renderPage.bind(this)}
// //           // renderScene={SceneMap({
// //           //   first: FirstRoute,
// //           //   second: SecondRoute,
// //           // })}
// //           renderScene={SceneMap(this._renderPage.bind(this))}

// //           renderHeader={this._renderHeader}
// //           onIndexChange={index => this.setState({index})}
// //           style={styles.container}
// //         />
// //       </View>
// //     );
// //   }
// // }
// // // import React, {Component} from 'react';
// // // import {View, StyleSheet, SafeAreaView, Text, Button} from 'react-native';
// // // import {
// // //   TabViewAnimated,
// // //   TabView,
// // //   TabViewPage,
// // //   TabBarTop,
// // // } from 'react-native-tab-view';

// // // export default class Test extends Component {
// // //   constructor(props) {
// // //     super(props);
// // //     this.state = {
// // //       index: 0,
// // //       routes: [
// // //         {key: '1', title: 'First'},
// // //         {key: '2', title: 'Second'},
// // //       ],
// // //     };
// // //   }
// // //   // state = {
// // //   //   index: 0,
// // //   //   routes: [
// // //   //     {key: '1', title: 'First'},
// // //   //     {key: '2', title: 'Second'},
// // //   //   ],
// // //   // };

// // //   _renderScene = ({route}) => {
// // //     switch (route.key) {
// // //       case '1':
// // //         return <View style={{flex: 1, backgroundColor: '#ff4081'}} />;
// // //       case '2':
// // //         return <View style={{flex: 1, backgroundColor: '#673ab7'}} />;
// // //       default:
// // //         return null;
// // //     }
// // //   };

// // //   _renderPage = props => (
// // //     <TabViewPage {...props} renderScene={this._renderScene} />
// // //   );

// // //   render() {
// // //     return (
// // //       <View>
// // //         <TabView
// // //           navigationState={this.state}
// // //           // renderScene={this._renderPage}
// // //           renderScene={(data) => this._renderPage(data)}
// // //           renderHeader={this._renderHeader}
// // //           onIndexChange={index => this.setState({index})}
// // //           style={styles.container}
// // //         />
// // //       </View>
// // //     );
// // //   }
// // // }

// // // // <TabViewAnimated
// // // //   style={{ flex: 1 }}
// // // //   navigationState={this.state.navigation}
// // // //   renderScene={this._renderPage}
// // // //   renderHeader={this._renderHeader}
// // // //   onRequestChangeTab={index => this.setState({ index })}
// // // // />

// // // // <TabView
// // // //   navigationState={this.state}
// // // //   renderScene={SceneMap({
// // // //     first: FirstRoute,
// // // //     second: SecondRoute,
// // // //   })}
// // // //   onIndexChange={index => this.setState({ index })}
// // // //   initialLayout={{ width: Dimensions.get('window').width }}
// // // //   style={styles.container}

// // // //  />
