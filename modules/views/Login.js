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
import SpinnerScreen from '../views/Spinner';
import axios from 'axios';

export default class RegisterDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorText: '',
      loading: false,
      LoginID: '',
      password: ''
    };
  }

  async onSignin(LoginID, password) {
    this.setState({ errorText: '', loading: true });
    if (this.state.LoginID === '' || this.state.password === '') {
      this.onLoginFail();
    }
    else {
      await axios.post(`http://51.77.6.84:9110/UM/Login`,
        {
          "LoginID": LoginID,
          "Password": password
        }
      )
        .then(async (response) => {
          console.log(response);
          if (response.status === 200) {
            this.setState({ loading: false })
            this.onLoginSuccess();
          }

          else {
            this.setState({ loading: false })
            this.onLoginFail();
          }
        })
        .catch((error) => {
          this.setState({ loading: false })
          Alert.alert("Something went wrong");
        });
    }
  }
  renderButton() {
    if (this.state.loading) {
      return <SpinnerScreen />
    }
    return (
      <TouchableOpacity
        style={[styles.btnContinue]}
        onPress={() => this.onSignin(this.state.LoginID, this.state.password)}>
        {/* this.props.navigation.navigate('homeScreen') */}
        <Text style={styles.btnContinueText}>Login</Text>
      </TouchableOpacity>
    )
  };
  onLoginFail() {
    this.setState({ errorText: 'Incorrect email or password', loading: false })
  }
  onLoginSuccess() {
    this.setState({
      userId: this.state.email,
      email: '',
      password: '',
      loading: false,
      errorText: '',
    })
    this.props.navigation.navigate('homeScreen')
  }


  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text style={[styles.Heading]}>Login </Text>
        <TextInput
          style={[styles.InputField]}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={'default'}
          underlineColorAndroid="transparent"
          placeholder="Login ID"
          returnKeyType={'next'}
          maxLength={16}
          placeholderTextColor="#517e8d"
          onChangeText={text => this.setState({ LoginID: text })}
          value={this.state.LoginID}
        />
        <TextInput
          style={[styles.InputField]}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={'email-address'}
          underlineColorAndroid="transparent"
          placeholder="Password"
          returnKeyType={'next'}
          maxLength={16}
          placeholderTextColor="#517e8d"
          onChangeText={text => this.setState({ password: text })}
          value={this.state.password}
        />
        <Text style={{ color: 'red', fontSize: 20, alignSelf: 'center', marginTop: 15 }}>{this.state.errorText}</Text>
        {this.renderButton()}

        <TouchableOpacity
          style={[styles.btnForget]}
          onPress={() =>
            this.props.navigation.navigate('forgetPasswordScreen')
          }>
          <Text style={styles.btnForgetText}>Forget Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btnSignUp]}
          onPress={() => this.props.navigation.navigate('registerScreen')}>
          <Text style={styles.btnSignUpText}>
            Don't have an account? Sign up!
              </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  Heading: {
    marginTop: 50,
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 80
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
  containBtn: {
    flex: 0.3,
  },

  btnContinue: {
    margin: 15,
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
  btnForget: {
    marginTop: 30,
    paddingVertical: 5,
  },
  btnForgetText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
  },
  btnSignUp: {
    marginTop: 30,
    paddingVertical: 5,
  },
  btnSignUpText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
  },
});
