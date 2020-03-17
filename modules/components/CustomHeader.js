import React from 'react';
import { 
  Text
} from 'react-native';

export default class CustomHeader extends React.Component {
    render() {
      return (

        <View 
        style={{paddingTop: 20, paddingBottom: 20, backgroundColor:'yellow'}}>
            <View style={{flexDirection: 'row', alignItems:'center', borderColor:'red', borderWidth:1}}>
                <Text style={{ flex: 1, borderColor:'red', borderWidth:1}}>Left with long sd asdf text</Text>
                <Text style={{ flex: 1, borderColor:'red', borderWidth:1, textAlign: 'center'}}>Title</Text>
                <Text style={{ flex: 1, borderColor:'red', borderWidth:1, textAlign: 'right'}}>Right</Text>
            </View>
        </View>
      );
  }
}