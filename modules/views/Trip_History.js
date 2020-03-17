import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  Button,
  Modal
} from 'react-native';
import Assets from '../assets/Assets';
import Icon from 'react-native-vector-icons/Feather';
import HomeIcon from 'react-native-vector-icons/MaterialIcons'
import VanIcon from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Test from './Test';

export default class Trip_History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      showModal: false,

    }
  }
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={{ height: 50, backgroundColor: '#ff611b' }}>
          <Icon style={{ color: 'white', margin: 15, }} name="menu" size={30} onPress={() => this.props.navigation.openDrawer('AppDrawerNavigator')} />
        </View>
        <TouchableOpacity style={styles.TouchableStyle} onPress={() => this.setState({ showModal: true })}>
          <View style={{ flexDirection: 'row' }}>
            <VanIcon style={{ color: 'orange', margin: 15, }} name='shuttle-van' size={30} />
            <Text style={{ alignSelf: 'center', fontSize: 18 }}>Hummer</Text>
          </View>
          <Text style={{ alignSelf: 'center', fontSize: 16 }}>3500 $</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableStyle} onPress={() => this.setState({ showModal: true })}>
          <View style={{ flexDirection: 'row' }}>
            <VanIcon style={{ color: 'orange', margin: 15, }} name='shuttle-van' size={30} />
            <Text style={{ alignSelf: 'center', fontSize: 18 }}>Suzuki berline</Text>
          </View>
          <Text style={{ alignSelf: 'center', fontSize: 16 }}>1000 $</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableStyle} onPress={() => this.setState({ showModal: true })}>
          <View style={{ flexDirection: 'row' }}>
            <VanIcon style={{ color: 'orange', margin: 15, }} name='shuttle-van' size={30} />
            <Text style={{ alignSelf: 'center', fontSize: 18 }}>Range Rover</Text>
          </View>
          <Text style={{ alignSelf: 'center', fontSize: 16 }}>1500 $</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableStyle} onPress={() => this.setState({ showModal: true })}>
          <View style={{ flexDirection: 'row' }}>
            <VanIcon style={{ color: 'orange', margin: 15, }} name='shuttle-van' size={30} />
            <Text style={{ alignSelf: 'center', fontSize: 18 }}>Limousine</Text>
          </View>
          <Text style={{ alignSelf: 'center', fontSize: 16 }}>2000 $</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.showModal}
          onRequestClose={() => this.setState({ showModal: false })}>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}></View>
            <View style={styles.ModalMainView}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 15 }}>Reservation Information</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginVertical: 20 }}>
                <Text style={{ fontSize: 16 }}>Total to pay</Text>
                <Text style={{ fontSize: 16 }}>2000 $</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginVertical: 20 }}>
                <Text style={{ fontSize: 16 }}>Number of days</Text>
                <Text style={{ fontSize: 16 }}>2</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginVertical: 20 }}>
                <Text style={{ fontSize: 16 }}>Start date</Text>
                <Text style={{ fontSize: 16 }}>11 Jan. 2020</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginVertical: 20 }}>
                <Text style={{ fontSize: 16 }}>End date</Text>
                <Text style={{ fontSize: 16 }}>12 Jan. 2020</Text>
              </View>
              {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginVertical: 20, borderBottomWidth: 1 }}>
                <Text style={{ fontSize: 16 }}>Contact</Text>

              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 15, }}>
                <TouchableOpacity style={{ justifyContent: 'center', borderWidth: 1, height: 50, width: 150, borderRadius: 10, marginHorizontal: 15, backgroundColor: 'black' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white', alignSelf: 'center' }}>Send</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: 'center', borderWidth: 1, height: 50, width: 150, borderRadius: 10, marginHorizontal: 15, backgroundColor: 'black' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white', alignSelf: 'center' }}>Cancel</Text>
                </TouchableOpacity>
              </View> */}


            </View>
          </View>
        </Modal>

      </SafeAreaView>
    );
  }
}
Trip_History.navigationOptions = ({ navigation }) => {
  return {
    drawerLabel: 'Bookings',
    drawerIcon: ({ tintColor }) => (
      <HomeIcon style={{ color: tintColor, }} name="details" size={25} />
    )
  };
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  ModalMainView: {
    backgroundColor: 'white', height: 420,
  },
  TouchableStyle: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, borderBottomWidth: 1, borderBottomColor:'orange', alignItems: 'center' }

});
