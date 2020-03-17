import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {WSnackBar} from 'react-native-smart-tip';

const FinanceComparisionItem = ({navigation, result}) => {

  const show = () => {
    console.log('Apply Pressed');
    // const snackBarOpts = {
    //   data: 'Request submited successfully.',
    //   position: WSnackBar.position.BOTTOM, // 1.TOP 2.CENTER 3.BOTTOM
    //   duration: WSnackBar.duration.LONG, //1.SHORT 2.LONG 3.INDEFINITE
    //   textColor: '#ffffff',
    //   backgroundColor: '#050405',
    //   actionText: 'OK',
    //   actionTextColor: '#ff490b',
    //   actionClick: () => {
    //     // Click Action
    //     navigation.navigate('homeScreen');
    //   },
    // };

    // WSnackBar.show(snackBarOpts);
  };

  return (
    <View style={styles.container}>
      <View style={styles.institution}>
        <Text>{result.item.bankName}</Text>
      </View>
      <View style={styles.details}>
        <Text>Amount: {result.amount}</Text>
        <Text>Tenure: {result.tenure}</Text>
        <Text>Interest: {result.item.rate}</Text>
      </View>
      <View style={styles.action}>
        <TouchableOpacity style={[styles.SignInButton]} onPress={show}>
          <Text style={styles.cText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#3ab550',
    marginVertical: 5,
    paddingVertical: 5,
  },
  institution: {
    justifyContent: 'center',
  },
  details: {
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  action: {
    justifyContent: 'center',
  },
  cText: {
    color: '#3ab550',
  },
});

export default FinanceComparisionItem;
