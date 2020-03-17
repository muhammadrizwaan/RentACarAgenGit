import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

import Assets from '../assets/Assets';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const children = this.props.children;

    return (
      <View style={styles.wrapperAppHeader}>
        <TouchableOpacity onPress={() => children.toggleDrawer()}>
          <Icon name="md-menu" size={30} color={'white'} />
        </TouchableOpacity>
        {/* <Image
                    style={styles.imgHeaderLogo}
                    source={Assets.logoHeader}
                /> */}
        <Text style={[styles.imgHeaderLogo, styles.headerLogoText]}>
          Logo Here
        </Text>
      </View>
    );
  }
}

Header.propTypes = {
  children: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  wrapperAppHeader: {
    flex: 1,
    // backgroundColor: 'red',
    paddingHorizontal: 15,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#36b44d',
  },
  imgHeaderLogo: {
    marginLeft: 25,
    width: 102,
    height: 20,
  },
  headerLogoText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
