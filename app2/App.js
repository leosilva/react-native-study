import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';

// formatações
const styles = {
    principal: {
        //backgroundColor: '#538530',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    botao: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 40,
        backgroundColor: '#538530'
    },
    textoBotao: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
};

const gerarNovaFrase = () => {
    var numeroAleatorio = Math.floor(Math.random()*5);

    var frases = Array();
    frases[0] = 'Primeira frase';
    frases[1] = 'Segunda frase';
    frases[2] = 'Terceira frase';
    frases[3] = 'Quarta frase';
    frases[4] = 'Quinta frase';

    Alert.alert(frases[numeroAleatorio]);
}

// aplicação
export default class App extends Component {
    render() {
        const {principal, botao, textoBotao} = styles;
        return (
            <View style={principal}>
                <Image source={ require('./imgs/logo.png') }/>
                <TouchableOpacity
                    onPress={gerarNovaFrase}
                    style={botao}>
                    <Text style={textoBotao}>Nova frase</Text>
                </TouchableOpacity>
            </View>
        );
    }
}