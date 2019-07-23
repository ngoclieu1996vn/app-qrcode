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
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
export default class createqrcode extends Component {
  state = {
    text: '',
    
  };

  render() {
    return (

      <Container>
      <Header style={{backgroundColor:'#FFF',  borderBottomWidth: 0,}} />
      <Content >
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
      </Content>
      <Footer>
        <FooterTab>
          <Button active>
            <Icon active type="FontAwesome" name="qrcode" />
          </Button>
          <Button onPress={()=> this.props.navigation.navigate('Quét QR Code')}>
            <Icon  name="camera" />
          </Button>
        </FooterTab>
      </Footer>
    </Container>


        
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