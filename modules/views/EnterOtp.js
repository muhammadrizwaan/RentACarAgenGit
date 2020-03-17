import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert
} from 'react-native';
import axios from 'axios';
import SpinnerScreen from '../views/Spinner';
import OTPInputView from '@twotalltotems/react-native-otp-input'

export default class EnterOtp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OPTCode: '',
      loading: false,
      PhoneNo: props.navigation.getParam('Phone'),
    };
  }

  async onSignup(OPTCode, PhoneNo) {
    console.log(this.state.PhoneNo)
    console.log(this.state.OPTCode)
    if (this.state.OPTCode.length < 6) {
      alert("Please Enter OTP");
      return;
    }
    else {
      this.setState({ loading: true })
      await axios.post('http://51.77.6.84:9110/UM/VerifyOTP',
        {
          "CellNo": PhoneNo,
          "OTP": OPTCode,
          // "CellNo": "923444310470",
          // "OTP": "123456",
        }
      )
        .then((response) => {
          console.log(response);
          // console.log(response.data.data);
          // console.log(response.data.data[0].Response);
          // console.log(response.data.data[0].Response);
          if (response.data[0].Response === "OK") {
            this.setState({ loading: false })
            this.props.navigation.navigate('homeScreen');
          }
          else {
            this.setState({ loading: false });
            Alert.alert("Something Went wrong");
          }
        })
        .catch(error => {
          this.setState({ loading: false });
          Alert.alert("OTP does not match or expired");
        })
    }
  }

  renderButton() {
    if (this.state.loading) {
      return <SpinnerScreen />
    }
    return (
      <View style={styles.containBtn}>
        <TouchableOpacity
          style={[styles.btnContinue]}
          onPress={() => this.onSignup(this.state.OPTCode, this.state.PhoneNo)}>
          <Text style={styles.btnContinueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    )
  };

  render() {

    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.containContent}>
            <Text style={[styles.Heading]}>Enter OTP</Text>

            <Text style={[styles.txtCreateAccount]}>Enter OTP we have sent on your Phone No.</Text>

            <OTPInputView
              style={styles.inputOtp}
              pinCount={6}
              code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              // onCodeChanged={code => { this.setState({ code }) }}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={(code => {this.setState({ OPTCode:code })
                console.log(`Code is ${code}, you are good to go!`)
              })}
            />

          </View>
          {this.renderButton()}


        </View>
      </SafeAreaView>
    );
  }
}

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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  Heading: {
    fontSize: 25,
    textAlign: 'center',
  },

  txtCreateAccount: {
    marginTop: 15,
    fontSize: 19,
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
    // color: '#ffffff',
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  inputOtp: {
    width: '85%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#ff7500",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: 'black'
  },

  underlineStyleHighLighted: {
    borderColor: "#ff7500",

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
});
