/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// import {
//     Button
//   } from "native-base";
  import React, { Component } from 'react';
  import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image,
    Alert,
    TouchableWithoutFeedback,
    Keyboard,
    Button,
    ImageBackground,
    AsyncStorage
  } from 'react-native';
  // import propTypes from 'prop-types'
  // import { connect } from 'react-redux';
  // import { dang_nhap_Action, login_fb, login_google } from '../actions/NguoiDung_action';
  const logo = require('../image/logo.png');
  import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
  import Dimensions from 'Dimensions';
  //import { FBLogin, FBLoginManager } from 'react-native-facebook-login';
  const icon_key = require('../image/password.png');
 // import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
  const icon_phone = require('../image/icon_phone.png');
  //import Display from 'react-native-display';
  //import { Bars } from 'react-native-loader';
  import Icon from 'react-native-vector-icons/FontAwesome';
  var width = Dimensions.get('window').width; //full width
  // GoogleSignin.configure({
  //   scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  //   webClientId: '578563999370-dvl82necf7sqoiah00g31kvpq14bkpgm.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  //   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //   hostedDomain: '', // specifies a hosted domain restriction
  //   loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
  //   forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
  //   accountName: '', // [Android] specifies an account name on the device that should be used
  //   iosClientId: '578563999370-nhcn7tnotmo9dd3lm73php115gcpfc0h.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  // });
  class Login extends Component {
    
  
    constructor(props) {
      super(props);
      this.state = {
        sdt: '',
        mat_khau: '',
        userInfo: null,
        load: false,
        opacity: 1
  
      };
      this.dang_nhap = this.dang_nhap.bind(this);
    }
  
   async dang_nhap() {
    Keyboard.dismiss()
    await AsyncStorage.setItem('token', 'this is token');
    }
    
    render() {
      let gobal = this;
      console.log(this.props);
      return (





        <ImageBackground source={require('../image/hinhnen.jpg')} style={{width: '100%', height: '100%'}}>
 
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={dismissKeyboard}>
  
          <View style={[styles.container, styles.background, { opacity: this.state.opacity}]}   >
  
            <View style={[styles.container, { alignItems: "center", justifyContent: "center" }]}>
              <Image source={logo} style={{ width: 150, height: 150 }} resizeMode="contain" />
            </View>
            <View style={{ flex: 2, paddingHorizontal: 15, justifyContent: "flex-start" }} >
              <View style={{ alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 25 }}>Đăng nhập</Text>
              </View>
  
  
  
              <View style={styles.inputWrapper}>
                <Image source={icon_phone} style={styles.inlineImg} />
                <TextInput
                  style={styles.input}
                  onChangeText={(value) => this.setState({ sdt: value })}
                  placeholder="Số điện thoại"
                  placeholderTextColor="white"
                  underlineColorAndroid="transparent"
                  keyboardType="numeric"
                />
              </View>
  
  
              <View style={[styles.inputWrapper, { marginTop: 10 }]}>
                <Image source={icon_key} style={styles.inlineImg} />
                <TextInput
                  style={styles.input}
                  placeholderTextColor="white"
                  underlineColorAndroid="transparent"
                  placeholder="Mật khẩu"
                  secureTextEntry={true}
                //  value={this.state.mat_khau}
                  onSubmitEditing={()=>this.dang_nhap()}
                  returnKeyType='done'
                  underlineColorAndroid="transparent"
                  onChangeText={(value) => this.setState({ mat_khau: value })}
                />
              </View>
              {/* <Display style={{ alignItems: 'center', zIndex: 1000, opacity: 1 }} enable={this.state.load} >
                <Bars size={10} color="#FFF" />
              </Display> */}
  
              <View style={[{ 
                      width: DEVICE_WIDTH - 70,
                      height: 60,
                      marginHorizontal: 20,
                      borderRadius: 20,
                      alignContent:'center',
                      justifyContent:'center'
              }]}>
                <TouchableOpacity activeOpacity={.5}
                  onPress={this.dang_nhap}
                >
                  <View style={[styles.button, { borderRadius: 20 }]}>
                    <Text style={styles.buttonText}>Đăng nhập</Text>
                  </View>
                </TouchableOpacity>
              </View>
  
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity
                  activeOpacity={.5}
                  onPress={() => { this.props.navigation.navigate('SignUp', { type: this.props.navigation.state.params.type }) }}
                >
                  <View >
                    <Text style={styles.forgotPasswordText}>Đăng ký</Text>
                  </View>
  
                </TouchableOpacity>
  
                <TouchableOpacity style={{ marginTop: 10, marginBottom: 10 }} activeOpacity={.5}
                  onPress={() => { this.props.navigation.navigate('ForgotPassword', { type: this.props.navigation.state.params.type }) }}
                >
                  <View >
                    <Text style={[styles.forgotPasswordText]}>Quên mật khẩu</Text>
                  </View>
                </TouchableOpacity>
  
  
                <View>
                  {/* <Button iconLeft light style={{ width: '60%', height: 40, backgroundColor: '#3b5998', paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15 }} onPress={this.dang_nhap_fb}>
                    <Icon name='facebook-f' style={{ color: '#FFF' }} />
                    <Text style={{ color: '#FFF', textAlign: 'center' }}>Đăng nhập với Facebook</Text>
                  </Button>
                  <Button iconLeft light style={{ marginTop: 10, width: '59%', height: 40, backgroundColor: 'white', paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15 }} onPress={this.dang_nhap_gg}>
                    <Icon name='google' style={{ color: 'red', backgroundColor: 'white' }} />
                    <Text style={{ color: 'black', textAlign: 'center' }}>Đăng nhập với Google </Text>
                  </Button> */}
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        </ImageBackground>
      )
    }
  
  }

  export default Login;
  
  const DEVICE_WIDTH = Dimensions.get('window').width;
  const DEVICE_HEIGHT = Dimensions.get('window').height;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      width: null,
      height: null,
    },
    wrapper: {
      paddingHorizontal: 15,
    },
    icon: {
      width: 20,
      height: 20,
    },
    iconWrap: {
      paddingHorizontal: 7,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#d73352"
    },
  
    button: {
      backgroundColor: "#FF3635",
      paddingVertical: 12,
      alignItems: "center",
      justifyContent: "center",
    },
  
  
    buttonText: {
      fontSize: 16,
      color: '#FFFFFF',
      textAlign: 'center',
  
    },
    forgotPasswordText: {
      color: '#FFFFFF',
      textDecorationLine: "underline",
      textDecorationStyle: "solid",
      textDecorationColor: "#FFFFFF"
    },
  
    input: {
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      width: DEVICE_WIDTH - 70,
      height: 40,
      marginHorizontal: 20,
      paddingLeft: 45,
      borderRadius: 20,
      color: '#ffffff',
    },
  
    inlineImg: {
      position: 'absolute',
      zIndex: 99,
      width: 22,
      height: 22,
      left: 35,
      top: 9,
    },
  
  });