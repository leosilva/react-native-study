import React, { Component } from 'react';
import {
  Text,
  Button,
  View
} from 'react-native';

const gerarNumeroAleatorio = () => {
  let numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 10);
  alert(numeroAleatorio);
};

export default class App extends Component {

  render() {
    return (
      <View>
        <Text>Gerador de números randômicos!</Text>
        <Button
          title='Gerar um número randômico'
          onPress={gerarNumeroAleatorio}
        />
      </View>
    );
  };
}