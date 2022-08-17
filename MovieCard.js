import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';

export default class MovieCard extends Component {
  state = {
    visibleModal: null,

  };

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPres
    s={onPress}>
      <View style={styles.button}>
        <Text>WATCH NOW</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>

      <Text>
        Video to be played here!!
      </Text>

      {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        {this._renderButton('Default modal', () => this.setState({ visibleModal: 1 }))}

        <Modal isVisible={this.state.visibleModal === 1}>
          {this._renderModalContent()}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#00ffff',
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    height:20,
    width:100,
    marginTop:-6,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});