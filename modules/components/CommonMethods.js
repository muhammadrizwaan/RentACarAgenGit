import { GenericConstants } from './GenericConstants';
// import CryptoJS from 'crypto-js';
import CryptoJS from "react-native-crypto-js";
// import { Navigation } from "react-native-navigation";
import { StackActions, NavigationActions } from 'react-navigation';

export class CommonMethods {

    static GetApiURL() {
        return GenericConstants.ApiURL;
    }

    static GetApiHeaders() {
        return GenericConstants.ApiHeaders;
    }

    static NotificationDialog(Message) {
        alert(Message);
    }

    static CallApi(MethodName, Params) {
        return fetch(this.GetApiURL() + MethodName, {
      method: 'POST',
      headers: this.GetApiHeaders(),
      body: JSON.stringify(Params),
    }).then((response) => response.json()).then((responseJson) => {

        // alert(JSON.stringify(responseJson));
        ResponseData = { Data: JSON.parse(responseJson[MethodName + "Result"])  };
        return ResponseData;

    })
      .catch(error => {

        console.log('CM error: ' + JSON.stringify(error));
        ResponseData = {    Error: error    };
        return ResponseData;
        
    });
}

        // .then(response => {
        //     // alert(">>>" + JSON.stringify(response) + "<<<")
        //     // response
        //     //  alert(">>>" + JSON.stringify(response.json()) + "<<<")
        //     // response.json()
        // })
        // .then(jsonData => {
        //     // alert('test >>> ' + JSON.stringify(jsonData));
        //     // alert('test >>> ' + JSON.parse(jsonData));
        //     alert('test >>>>> jsonData: ' + jsonData);
        //     return null;
        //     // // alert(jsonData);
        //     // console.error(jsonData);
        //     // ResponseData = {
        //     //     Data: JSON.parse(jsonData)
        //     // };
        //     // return ResponseData;

        // })
     
    static Encrypt(PlainText) {
        let key = CryptoJS.MD5(GenericConstants.TripleDesKey).toString();
        var k1 = key.substring(0, 16);
        key = key + k1;

        let options = {
            mode: CryptoJS.mode.ECB, 
            padding: CryptoJS.pad.Pkcs7
        };
        
        let keyHex = CryptoJS.enc.Hex.parse(key);

        let encrypted = CryptoJS.TripleDES.encrypt(PlainText, keyHex, options);

        return encrypted;
    }
    
    // static goToScreen = (ScreenName) => {
    //     Navigation.push(this.props.componentId,{
    //         component: {
    //             name: ScreenName
    //         }        
    //     })
    // }

    static goToScreen = (ScreenName) => {
        const pushAction = StackActions.push({
            routeName: ScreenName,
            params: {
            //   myUserId: 9,
            },
          });
          
          this.props.navigation.dispatch(pushAction);
    }

    static NavigateToHomeWithoutTrace() {
        this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Home' })
            ]
        }));
    }

}