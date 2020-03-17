import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

const SpinnerScreen = ({size})=> {
    return(
        <View style= {styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    spinnerStyle:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    }
});

export default SpinnerScreen;