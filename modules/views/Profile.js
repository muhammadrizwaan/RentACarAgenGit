import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  Picker
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Prof from 'react-native-vector-icons/AntDesign'
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import SpinnerScreen from '../views/Spinner';
import IDIcon from 'react-native-vector-icons/AntDesign';
import PassIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CellIcon from 'react-native-vector-icons/Entypo';
import EmailIcon from 'react-native-vector-icons/AntDesign';
import CityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: '',
      Password: '',
      PhoneNo: '',
      Email: '',
      CityID: '',
      Picture: '',
      loading: false,
      showMe: false,
    };
  }

  onSignup(ID, Password, PhoneNo, Email, CityID, Picture) {
    try {
      if (this.state.ID === '') {
        alert("Please enter ID");
        return;
      }
      else if (this.state.Password === '') {
        alert("Please enter Password");
        return;
      }
      else if (this.state.PhoneNo === '') {
        alert("Please enter Phone No");
        return;
      }
      else if (this.state.Email === '') {
        alert("Please enter Email");
        return;
      }
      else if (this.state.CityID === '') {
        alert("Please enter CityID");
        return;
      }
      else if (this.state.Picture === '') {
        alert("Please enter Picture");
        return;
      }
      else {
        this.setState({ loading: true })
        axios.post(`http://51.77.6.84:9110/UM/UserProfile`,
          {
            "LoginID": ID,
            "Password": Password,
            "PhoneNo": PhoneNo,
            "Email": Email,
            "CityId": CityID,
            "Picture": Picture.data,
          }
        )
          .then((response) => {
            console.log(response);
            if (response.data === "OK") {
              this.setState({ loading: false, showMe:false })
              // this.props.navigation.navigate('');
            }
            else {
              this.setState({ loading: false });
              Alert.alert("Something Went wrong");
            }
          })
          .catch(error => {
            this.setState({ loading: false });
            Alert.alert("Something Went wrong");
          })
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  renderButton() {
    if (this.state.loading) {
      return <SpinnerScreen />
    }
    return (
      <TouchableOpacity
        style={styles.btnContinue}
        onPress={() => this.onSignup(this.state.ID, this.state.Password,this.state.PhoneNo, this.state.Email, this.state.CityID, this.state.Picture.data)}>
        <Text style={styles.btnContinueText}>Update</Text>
      </TouchableOpacity>
    )
  };

  ImageMethod(Picture) {
    if (this.state.Picture) {
      return (
        <TouchableOpacity onPress={this.SelectImage}>
          {Picture.uri && <Image source={{ uri: this.state.Picture.uri }} style={{ width: 150, height: 150, borderRadius: 75 }} />}
        </TouchableOpacity>
      )
    }
    else {
      return (
        <TouchableOpacity onPress={this.SelectImage}>
          <Image source={require('../assets/img/Profile.png')} style={{ width: 150, height: 150, borderRadius: 75 }} />
        </TouchableOpacity>
      )
    }
  }
  ImageProfile(Picture) {
    if (this.state.Picture) {
      return (
        <View>
          {Picture.uri && <Image source={{ uri: this.state.Picture.uri }} style={{ width: 150, height: 150, borderRadius: 75 }} />}
        </View>
      )
    }
    else {
      return (
        <View>
          <Image source={require('../assets/img/Profile.png')} style={{ width: 150, height: 150, borderRadius: 75 }} />
        </View>
      )
    }
  }
  SelectImage = async () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo', }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState({ Picture: response })
        console.log(this.state.Picture);
      }
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={{ height: 50, backgroundColor: '#ff611b' }}>
          <Icon style={{ color: 'white', margin: 15, }} name="menu" size={30} onPress={() => this.props.navigation.openDrawer('AppDrawerNavigator')} />
        </View>
        <View style={{ height: '30%', width: '100%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 2 }}>
          {this.ImageProfile(this.state.Picture)}
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.DetailTextView}>
            <IDIcon style={styles.IconStyle} name='idcard' size={30} />
            <Text style={styles.TextStyle}>923219646084</Text>
          </View>
          <View style={styles.DetailTextView}>
            <PassIcon style={styles.IconStyle} name='onepassword' size={30} />
            <Text style={styles.TextStyle}>Password</Text>
          </View>
          <View style={styles.DetailTextView}>
            <CellIcon style={styles.IconStyle} name='phone' size={30} />
            <Text style={styles.TextStyle}>Phone No</Text>
          </View>
          <View style={styles.DetailTextView}>
            <EmailIcon style={styles.IconStyle} name='mail' size={30} />
            <Text style={styles.TextStyle}>Email</Text>
          </View>
          <View style={styles.DetailTextView}>
            <CityIcon style={styles.IconStyle} name='city' size={30} />
            <Text style={styles.TextStyle}>City ID</Text>
          </View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.showMe}
            onRequestClose={() => this.setState({ showMe: false })}>
            <View style={{ height: '30%', width: '100%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 2 }}>
              {this.ImageMethod(this.state.Picture)}
            </View>
            <ScrollView style={{ flex: 1 }}>
              <TextInput
                style={[styles.InputField]}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'default'}
                underlineColorAndroid="transparent"
                placeholder="Enter ID"
                returnKeyType={'next'}
                maxLength={16}
                placeholderTextColor="#517e8d"
                onChangeText={text => this.setState({ ID: text })}
                value={this.state.ID}
              />
              <TextInput
                style={[styles.InputField]}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'default'}
                underlineColorAndroid="transparent"
                placeholder="Enter Password"
                returnKeyType={'next'}
                maxLength={26}
                placeholderTextColor="#517e8d"
                onChangeText={text => this.setState({ Password: text })}
                value={this.state.Password}
              />
              <TextInput
                style={[styles.InputField]}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'email-address'}
                underlineColorAndroid="transparent"
                placeholder="Enter Phone No"
                returnKeyType={'next'}
                maxLength={16}
                placeholderTextColor="#517e8d"
                onChangeText={text => this.setState({ PhoneNo: text })}
                value={this.state.PhoneNo}
              />
              <TextInput
                style={[styles.InputField]}
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                placeholder="Enter Email"
                returnKeyType={'next'}
                placeholderTextColor="#517e8d"
                onChangeText={text => this.setState({ Email: text })}
                value={this.state.Email}
              />
              <TextInput
                style={[styles.InputField]}
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                placeholder="Enter City ID"
                returnKeyType={'next'}
                placeholderTextColor="#517e8d"
                onChangeText={text => this.setState({ CityID: text })}
                value={this.state.CityID}
              />
            </ScrollView>
            {this.renderButton()}
          </Modal>
        </ScrollView>
        <TouchableOpacity
          style={styles.btnContinue}
          onPress={() => this.setState({ showMe: true })}>
          <Text style={styles.btnContinueText}>Update</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

Profile.navigationOptions = ({ navigation }) => {
  return {
    drawerLabel: 'Profile',
    drawerIcon: ({ tintColor }) => (
      <Prof style={{ color: tintColor, }} name="profile" size={25} />
    )
  };
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  InputField: {
    width: '90%',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#ff7500',
    padding: 5,
    borderRadius: 5,
    fontSize: 14,
    color: '#343434',
    textAlign: 'left',
  },
  btnContinue: {
    marginHorizontal: 15,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#ff7500',
  },
  btnContinueText: {
    textAlign: 'center',
    width: '80%',
    fontSize: 16,
    color: '#ffffff',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  DetailTextView: {
    flexDirection: 'row', marginHorizontal: 15, borderBottomWidth: 2, borderBottomColor: '#ff7500',
    marginVertical: 10, alignItems: 'center'
  },
  IconStyle: {
    color: '#ff7500', marginBottom: 5
  },
  TextStyle: {
    fontSize: 16, marginLeft: 15, marginBottom: 5
  }

});
