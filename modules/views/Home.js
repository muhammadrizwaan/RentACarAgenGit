import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeIcon from 'react-native-vector-icons/Fontisto'

export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={{ height: 50, backgroundColor: '#ff611b' }}>
          
          <Icon style={{ color: 'white', margin: 15, }} name='ios-menu' size={30} 
          onPress={() => this.props.navigation.openDrawer('AppDrawerNavigator')} />
        </View>
        <Text>Home Screen</Text>
      </SafeAreaView>
    );
  }
}
Home.navigationOptions = ({navigation}) => {
  return {
      drawerLabel: 'Home',
      drawerIcon: ({tintColor})=> (
           <HomeIcon style={{color:tintColor, }} name="home" size={25} />
      )
  };
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

});
