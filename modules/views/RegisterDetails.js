import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Picker,
  CheckBox
} from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/Feather';

export default class RegisterDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pasword: '',
      confirmPasword: '',
      Company: '',
      check1: false,
      Model:''
    };
  }
  CheckBox1() {
    this.setState({ check1: !this.state.check1 })
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={{ height: 50, backgroundColor: '#ff611b' }}>
          <Icon style={{ color: 'white', margin: 15, }} name="menu" size={30} onPress={() => this.props.navigation.openDrawer('AppDrawerNavigator')} />
        </View>
        <View style={styles.container}>


          <ScrollView style={styles.containContent}>



            <Text style={[styles.Heading]}>Vehicle Registration </Text>
            <View style={styles.InputStyle}>
              <Picker
                mode="dropdown"
                selectedValue={this.state.Company}
                placeholder="Company"
                style={{ height: 50, width: '100%', paddingLeft: 0 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ Company: itemValue })
                }>
                <Picker.Item label="MAKE" value="" />
                <Picker.Item label="Honda" value="Honda" />
                <Picker.Item label="Toyota" value="Toyota" />
                <Picker.Item label="Suzuki" value="Suzuki" />
              </Picker>
            </View>
            <View style={styles.InputStyle}>
              <Picker
                mode="dropdown"
                selectedValue={this.state.Model}
                placeholder="Company"
                style={{ height: 50, width: '100%', paddingLeft: 0 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ Model: itemValue })
                }>
                <Picker.Item label="MODEL" value="" />
                <Picker.Item label="Civic" value="Civic" />
                <Picker.Item label="City" value="City" />
                <Picker.Item label="Mehran" value="Mehran" />
              </Picker>
            </View>
            <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholder="Model Year"
              returnKeyType={'next'}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ confirmPasword: text })}
              value={this.state.confirmPasword}
            />
            <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholder="Registration No"
              returnKeyType={'next'}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ confirmPasword: text })}
              value={this.state.confirmPasword}
            />
            <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholder="Car Location"
              returnKeyType={'next'}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ confirmPasword: text })}
              value={this.state.confirmPasword}
            />

            {/* <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType={'email-address'}
              underlineColorAndroid="transparent"
              placeholder="Make"
              returnKeyType={'next'}
              maxLength={16}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ email: text })}
              value={this.state.email}
            /> */}
            <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholder="Millage"
              returnKeyType={'next'}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ confirmPasword: text })}
              value={this.state.confirmPasword}
            />

            {/* <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholder="With Fuel/Without Fuel"
              returnKeyType={'next'}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ confirmPasword: text })}
              value={this.state.confirmPasword}
            /> */}
            {/* <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholder=" Availability slot "
              returnKeyType={'next'}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ confirmPasword: text })}
              value={this.state.confirmPasword}
            /> */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TextInput
                style={[styles.InputRate]}
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                placeholder="Rate"
                returnKeyType={'next'}
                placeholderTextColor="#517e8d"
                onChangeText={text => this.setState({ confirmPasword: text })}
                value={this.state.confirmPasword}
              />
              <View style={{ width: '40%', height: 50, }}>
                <Picker
                  mode="dropdown"
                  selectedValue={this.state.Model}
                  placeholder="Company"
                  style={{ height: 50, width: '100%', paddingLeft: 0 }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ Model: itemValue })
                  }>
                  <Picker.Item label="daily" value="daily" />
                  <Picker.Item label="Weakly" value="Weakly" />
                  <Picker.Item label="Monthly" value="Monthly" />
                </Picker>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 10 }}>
              <CheckBox
                value={this.state.check1}
                onChange={() => this.CheckBox1()}
              />
              <Text style={{ marginTop: 5, color: '#343434', }}>With Driver</Text>
            </View>
          </ScrollView>
          <TouchableOpacity
            style={[styles.btnContinue]}
            // onPress={() => console.log(this.state.Company)}
            onPress={() => this.props.navigation.navigate('ImagesScreen')}
          >
            <Text style={styles.btnContinueText}>Next</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

RegisterDetails.navigationOptions = ({ navigation }) => {
  return {
    drawerLabel: 'Vehicle Registration',
    drawerIcon: ({ tintColor }) => (
      <HomeIcon style={{ color: tintColor, }} name="registered" size={25} />
    )
  };
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  containContent: {
    flex: 2.4,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  Heading: {
    fontSize: 25,
    textAlign: 'center',
  },
  InputStyle: {
    backgroundColor: 'white',
    borderWidth: 1,
    marginRight: 15,
    marginLeft: 15,
    paddingLeft: 20,
    marginTop: 10
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
    fontSize: 18,
    color: '#343434',
    textAlign: 'left',
  },
  InputRate: {
    width: '40%',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#ff7500',
    padding: 5,
    borderRadius: 5,
    fontSize: 18,
    color: '#343434',
    textAlign: 'left',
  },
  containBtn: {
    flex: 0.3,
  },
  btnContinue: {
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
  btnContinue: {
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
});
