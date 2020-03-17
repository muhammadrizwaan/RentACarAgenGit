// import PropTypes from 'prop-types';
// import React, { Component } from 'react';
// import { NavigationActions } from 'react-navigation';
// import { Text, TouchableOpacity, View, Image } from 'react-native';
// import { width, height, totalSize } from 'react-native-dimension';
// import { TextInput, ScrollView } from 'react-native-gesture-handler';

// import { Icon } from 'react-native-elements'
// import { AntDesign, Entypo } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';

// export default class signUpChildren extends Component {

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <View style={{ flexDirection: 'row' }}>
//           <View style={{ height: 30, justifyContent: 'center', alignItems: 'center', }}>
//             <Image source={require('../assets/img/user1.png')} style={{ width: 80, height: 80, marginLeft: 20 }}></Image>
//           </View>
//           <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
//             <Text style={{ fontSize: 13, alignSelf: 'flex-start', fontWeight: 'bold' }}>Agent</Text>
//           </View>
//         </View>
//         <ScrollView>
//           <View style={{ borderBottomWidth: 2, borderBottomColor: '#EAEAEAEA', marginLeft: 30 }}>
//             <TouchableOpacity onPress={() => { this.props.navigation.navigate('home') }} style={{ marginLeft: 5, flexDirection: 'row', marginVertical: height(2), }}>
//               {/* <AntIcon
//                 name='home'
//                 type='font-awesome'
//                 color='#651fff'
//                 size={24}
//                 containerStyle={{ width: width(10) }}
//               /> */}
//               <View style={{ marginLeft: 15, marginTop: 1, }}>
//                 <Text style={{ color: 'black', fontSize: 13 }}>HOME</Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//           <View style={{ borderBottomWidth: 2, borderBottomColor: '#EAEAEAEA', marginLeft: 30 }}>
//             <TouchableOpacity onPress={() => { this.props.navigation.navigate('withdraAmount') }} style={{ marginLeft: 5, flexDirection: 'row', marginVertical: height(2), }}>
              
//               {/* <AntDesign
//                 name='home'
//                 type='font-awesome'
//                 color='#651fff'
//                 size={24}
//                 containerStyle={{ width: width(10) }}
//               /> */}
//               <View style={{ marginLeft: 15, marginTop: 1, }}>
//                 <Text style={{ color: 'black', fontSize: 13 }}>Withdraw Amount</Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//           <View style={{ borderBottomWidth: 2, borderBottomColor: '#EAEAEAEA', marginLeft: 30 }}>
//             <TouchableOpacity onPress={() => { this.props.navigation.navigate('previousTasks') }} style={{ marginLeft: 5, flexDirection: 'row', marginVertical: height(2), }}>
//               {/* <FontAwesome
//                 name='list'
//                 type='font-awesome'
//                 color='#651fff'
//                 size={24}
//                 containerStyle={{ width: width(10) }}
//               /> */}
//               <View style={{ marginLeft: 15, marginTop: 1, }}>
//                 <Text style={{ color: 'black', fontSize: 13 }}>Previous Tasks</Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//           <View style={{ borderBottomWidth: 2, borderBottomColor: '#EAEAEAEA', marginLeft: 30 }}>
//             <TouchableOpacity onPress={() => { this.props.navigation.navigate('splash') }} style={{ marginLeft: 5, flexDirection: 'row', marginVertical: height(2), }}>
//               {/* <Entypo
//                 name='log-out'
//                 type='font-awesome'
//                 color='#651fff'
//                 size={24}
//                 containerStyle={{ width: width(10) }}
//               /> */}
//               <View style={{ marginLeft: 15, marginTop: 1, }}>
//                 <Text style={{ color: 'black', fontSize: 13 }}>Log Out</Text>
//               </View>
//             </TouchableOpacity>
//           </View>

//         </ScrollView>
//       </View>
//     );
//   }
// }












import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import {NavigationActions, StackActions} from 'react-navigation';

import Assets from '../assets/Assets';
import {UserDataKey} from '../components/GenericConstants';
import Icon from 'react-native-vector-icons/Ionicons';

export default class DrawerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: '',
      Email: '',
    };

    AsyncStorage.getItem(UserDataKey.FirstNameKey, (_err, result) =>
      this.setState({FirstName: result !== null ? result : 'KUMAIL'}),
    );
    AsyncStorage.getItem(UserDataKey.EmailKey, (_err, result) =>
      this.setState({Email: result}),
    );
  }

  logout = () => {
    // This will reset back to loginStack
    // https://github.com/react-community/react-navigation/issues/1127
    const actionToDispatch = StackActions.reset({
      index: 0,
      key: null, // black magic
      actions: [NavigationActions.navigate({routeName: 'loginStack'})],
    });
    this.props.navigation.dispatch(actionToDispatch);
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.menuHeader}>
          <Image style={styles.icnUser} source={Assets.icnUserDrawerMenu} />
          <Text style={styles.txtUserName}>{this.state.FirstName}</Text>
          <Text style={styles.txtUserEmail}>{this.state.Email}</Text>
        </View>

        <View style={styles.menu}>
          <Icon name="md-home" size={30} />
          <Text
            onPress={() => navigation.navigate('homeScreen')}
            onPress={() => navigation.navigate('newHomeScreen')}
            style={styles.txtMenu}>
            Home
          </Text>
        </View>

        <View style={styles.menu}>
          <Icon
            name="md-home"
            size={30}
            // color={'Black'}
          />
          <Text
            onPress={() => navigation.navigate('transactionHistoryScreen')}
            style={styles.txtMenu}>
            Transaction History
          </Text>
        </View>

        {/* <Text
          onPress={() => navigation.navigate('transactionHistoryScreen')}
          style={styles.uglyDrawerItem}>
          Transaction History
        </Text> */}
        <Text
          onPress={this.logout}
          style={[styles.uglyDrawerItem, {marginTop: 20}]}>
          Log Out
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  uglyDrawerItem: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 15,
    margin: 5,
    borderRadius: 2,
    // color: '#E73536',
    // borderColor: '#E73536',
    color: '#36b44d',
    borderColor: '#36b44d',
    borderWidth: 1,
    textAlign: 'center',
  },

  menuHeader: {
    // backgroundColor: 'yellow',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icnUser: {
    width: 70,
    height: 75,
    marginBottom: 3,
  },
  txtUserName: {
    marginBottom: 3,
  },
  txtUserEmail: {
    marginBottom: 20,
  },
  menu: {
    flexDirection: 'row',
    marginTop: 5,
  },
  txtMenu: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 3,
  },
});
