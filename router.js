import {createStackNavigator,createDrawerNavigator,createBottomTabNavigator} from 'react-navigation';
import React, {Component} from 'react';
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

const logo = require('./image/logo.png');
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import Dimensions from 'Dimensions';
//import { FBLogin, FBLoginManager } from 'react-native-facebook-login';
const icon_key = require('./image/password.png');
// import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
const icon_phone = require('./image/icon_phone.png');

import createqrcode from './components/createqrcode'
import scanqrcode from './components/scanqrcode'
import Login from './components/Login'
import Loading from './components/Loading'
import Ionicons from 'react-native-vector-icons/Ionicons';

export const MenuGuest = createStackNavigator({
  
  Login         : Login
},{
  headerMode: 'none',
});


export const StackHome = createBottomTabNavigator(
    {
     
      'Tạo QR Code':  { screen: createqrcode, navigationOptions: { header: null } },
      'Quét QR Code':  { screen: scanqrcode, navigationOptions: { header: null } }, 
    }
  );

  class MyApp extends Component {
    constructor(props) {
      super(props);
      this.state = {       

        islogin : false,
        trang_thai : 1,

        };
       
      this.dang_nhap = this.dang_nhap.bind(this);
    }
    dang_nhap(){
      this.setState({islogin:true,trang_thai :100});
    }
    async componentWillMount()
   {
//  AsyncStorage.removeItem('token');
       let token = await AsyncStorage.getItem('token');
       if(token){
        setTimeout(() => {this.setState({islogin:true,trang_thai :100})},1000);
        
       }
       else {
        setTimeout(() => {this.setState({islogin:true,trang_thai :0})},1000);
       }
   }
     
        render(){
          if(this.state.trang_thai==1)
            return (<Loading/>)
          else 
          if(this.state.islogin==true&&this.state.trang_thai==100) 
             return (<StackHome/>)
          else
            return (

        <ImageBackground source={require('./image/hinhnen.jpg')} style={{width: '100%', height: '100%'}}>
 
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={dismissKeyboard}>
  
          <View style={[styles.container, styles.background]}   >
  
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
              
                  onSubmitEditing={()=>this.dang_nhap()}
                  returnKeyType='done'
                  underlineColorAndroid="transparent"
                  onChangeText={(value) => this.setState({ mat_khau: value })}
                />
              </View>
             
  
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
          
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        </ImageBackground>
            )

        }
            
        
 
  }



export default MyApp;
const DEVICE_WIDTH = Dimensions.get('window').width;
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