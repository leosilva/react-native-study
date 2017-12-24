import React, { Component } from 'react';
import {
  Text,
  Button,
  View
} from 'react-native';

// formatações
const styles = {
  estiloTexto: {
    fontSize: 40,
    backgroundColor: '#08509B',
    height: 60,
    width: 60
  },
  estiloView: {
    backgroundColor: 'skyblue',
    height: 300,
    justifyContent: 'center',
    alignItems: 'flex-end'
  }
};

export default class App extends Component {
  render() {
    const { estiloTexto, estiloView } = styles;
    return (
      <View style={estiloView}>
        <Text style={estiloTexto}></Text>
      </View>
    );
  }
}