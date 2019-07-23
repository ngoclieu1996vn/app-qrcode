/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class scanqrcode extends Component {
  constructor(props) {
    super(props);
    this.state = {
       check : false,
       so:10000,
    };
this.onSuccess = this.onSuccess.bind(this);
}
async  onSuccess(e) {
  
  
    Alert.alert(
      'Alert Title',
      e.data,
      [
        {text: 'oke'},
      ],
      {cancelable: false},
    );
    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));
  }
  render() {
   // alert(this.state.check);
    return (
      <Container>
        <Header style={{backgroundColor:'#FFF',  borderBottomWidth: 0,}}  />
        <Content >
        <QRCodeScanner
      fadeIn={false}
      reactivate={true}
      reactivateTimeout={3000}
      onRead={this.onSuccess}
      topContent={
        <Text style={styles.centerText}>
          Phần mềm <Text style={styles.textBold}>điểm danh nhân viên</Text> trên smart phone bằng QR code.
        </Text>
      }
    />

        </Content>
        <Footer>
        <FooterTab>
          <Button onPress={()=> this.props.navigation.navigate('Tạo QR Code')} >
            <Icon  type="FontAwesome" name="qrcode" />
          </Button>
          <Button active>
            <Icon active name="camera" />
          </Button>
        </FooterTab>
      </Footer>
      </Container>
      
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
