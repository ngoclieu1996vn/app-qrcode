import React, { Component } from 'react'
import QRCode from 'react-native-qrcode';

import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput,
    Text,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';

export default class createqrcode extends Component {
  state = {
    text: '',
    
  };

  render() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <View  style={{marginBottom:100}}>
                            <Text style={{fontSize:20}} >Tạo QR Code</Text>
                </View>
                <View style={{backgroundColor: 'white',alignItems: 'center',justifyContent: 'center'}} >
                    <Text>Nhập nội dung cần tạo QR code</Text>
                    <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({text: text})}
                    value={this.state.text}
                    />
                    <QRCode
                    value={this.state.text}
                    size={200}
                    bgColor='purple'
                    fgColor='white'/>
                </View>
      </View>
      </TouchableWithoutFeedback>
    );
  };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
        height: 40,
        width:100,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
});