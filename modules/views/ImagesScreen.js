import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';

export default class ImagesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource:[],
      showMe: false,
    };
  }
  SelectImage = async () => {
    ImagePicker.showImagePicker({ noData: true, mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState((prevState) => {
          return {
            avatarSource: [...prevState.avatarSource, response.uri]
          }
        })
      }
    });
  }
  renderRow = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.setState({ showMe: true, fbImage: item})}>
          {item && <Image source={{ uri: item}} style={{ width: '92%', height: 200, marginVertical:3, marginHorizontal:15, resizeMode:'stretch' }} />}
        </TouchableOpacity>
    )
  }
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={{ height: 50, backgroundColor: '#ff611b' }}>
          <Icon style={{ color: 'white', margin: 15, }} name="md-arrow-back" size={30} onPress={() => this.props.navigation.navigate('FleetRegistration')} />
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={this.state.avatarSource}
          renderItem={this.renderRow}
          keyExtractor={(item, index) => index.toString()}
        />
        <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.showMe}
            onRequestClose={() => this.setState({ showMe: false })}>
            <View style={styles.ModalMainView}>
              {this.state.fbImage && <Image source={{ uri: this.state.fbImage }} style={{ width: '100%', height: '100%' }} />}
              {/* <View style={styles.AbsoluteView}>
                <Ionicons style={{ color: 'black' }} name="md-arrow-round-back" size={30}
                  onPress={() => this.setState({ showMe: false })}
                />
              </View> */}
            </View>
          </Modal>
        <TouchableOpacity
            style={[styles.btnContinue]}
            onPress={this.SelectImage}>
            <Text style={styles.btnContinueText}>Select Image</Text>
          </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
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
