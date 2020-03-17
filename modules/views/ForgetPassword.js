import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';

export default class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingVisible: false,
      ResponseData: undefined,
      UserData: undefined,
      name: '',
      email: '',
      pasword: '',
      confirmPasword: '',
      hash: undefined,
      ShowLoader: false,
      phone: '+92',
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
            <Text style={[styles.Heading]}>Forget Password </Text>
            <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType={'default'}
              underlineColorAndroid="transparent"
              placeholder="Email"
              returnKeyType={'next'}
              maxLength={16}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({name: text})}
              value={this.state.name}
            />
            <TouchableOpacity
              style={[styles.btnContinue]}
              onPress={() => this.props.navigation.navigate('homeScreen')}>
              <Text style={styles.btnContinueText}>Reset Password</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btnSignUp]}
              onPress={() => this.props.navigation.navigate('loginScreen')}>
              <Text style={styles.btnSignUpText}>
                Sign In Instead ?
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
    marginTop:50,
    fontSize: 25,
    textAlign: 'center',
    marginBottom:80
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
    margin:15,
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
  btnForget: { 
    marginTop:30,
    paddingVertical: 5,
  },
  btnForgetText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
  },
  btnSignUp: {
    marginTop:30,
    paddingVertical: 5,
  },
  btnSignUpText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
  },
});
