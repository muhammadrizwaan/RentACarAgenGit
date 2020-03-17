import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert
} from 'react-native';
import axios from 'axios';
import SpinnerScreen from '../views/Spinner';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: '',
      MiddleName: '',
      LastName: '',
      CellNo: '',
      AccountType: '',
      loading: false
    };
  }

  onSignup(FirstName, MiddleName, LastName, CellNo, AccountType) {
    try {
      if (this.state.FirstName === '') {
        alert("Please First Name");
        return;
      }
      else if (this.state.CellNo === '') {
        alert("Please enter Cell Phone");
        return;
      }
      else if (this.state.AccountType === '') {
        alert("Please Account Type");
        return;
      }
      else {
        this.setState({ loading: true })
        axios.post(`http://51.77.6.84:9110/UM/Register?RegenerateOTP=123456`,
          {
            "FirstName": FirstName,
            "MiddleName": MiddleName,
            "LastName": LastName,
            "CellNo": CellNo,
            "AccountType": AccountType,
          }
        )
          .then((response) => {
            // console.log(response);
            if (response.data === "OK") {
              this.setState({loading:false})
              this.props.navigation.navigate('enterOtpScreen',{Phone:this.state.CellNo});
            }
            else {
              this.setState({loading:false});
              Alert.alert("Something Went wrong");
            }
          })
          .catch(error => {
            this.setState({loading:false});
            Alert.alert("Login Id/Cell# already registered.");
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
        onPress={() => this.onSignup(this.state.FirstName, this.state.MiddleName,
          this.state.LastName, this.state.CellNo, this.state.AccountType)}>
        <Text style={styles.btnContinueText}>Register</Text>
      </TouchableOpacity>
    )
  };


  render() {

    return (
      <ScrollView style={styles.safeArea}>
            <Text style={[styles.Heading]}>Registration </Text>
            <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType={'default'}
              underlineColorAndroid="transparent"
              placeholder="Enter First Name"
              returnKeyType={'next'}
              maxLength={16}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ FirstName: text })}
              value={this.state.FirstName}
            />
            <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType={'default'}
              underlineColorAndroid="transparent"
              placeholder="Enter Middle Name"
              returnKeyType={'next'}
              maxLength={16}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ MiddleName: text })}
              value={this.state.MiddleName}
            />
            <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType={'email-address'}
              underlineColorAndroid="transparent"
              placeholder="Enter Last Name"
              returnKeyType={'next'}
              maxLength={16}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ LastName: text })}
              value={this.state.LastName}
            />
            <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholder="Enter Cell No"
              returnKeyType={'next'}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ CellNo: text })}
              value={this.state.CellNo}
            />
            <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholder="Enter Account Type"
              returnKeyType={'next'}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ AccountType: text })}
              value={this.state.AccountType}
            />

          {this.renderButton()}

          <TouchableOpacity
            style={[styles.btnLogin]}
            onPress={() => this.props.navigation.navigate('loginScreen')}>
            <Text style={styles.btnLoginText}>Sign In Instead ?</Text>
          </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  Heading: {
    marginTop:30,
    fontSize: 25,
    textAlign: 'center',
    marginBottom:20
  },
  btnContinue: {
    marginHorizontal:15,
    marginTop:30,
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
  btnLogin: {
    paddingVertical: 5,
    marginTop:30
  },
  btnLoginText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
  },
});
