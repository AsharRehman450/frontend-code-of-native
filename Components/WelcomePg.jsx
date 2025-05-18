import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { WelcomeStyles } from '../Components/WelcomeStyles';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { getData } from '../Components/Async_Storage_Login';
const WelcomePg = () => {
  const navigation = useNavigation();
  
     useEffect(() => {
    const checkLogin = async () => {
      const user = await getData('user');
      if (user) {
        navigation.replace('TabNavigator'); 
      } else {
        navigation.replace('Login'); 
      }
    };
    checkLogin();
  }, []);


  return (
    <View style={WelcomeStyles.container}>
      <View style={WelcomeStyles.imageContainer}>
        <Image
          source={require('../img/WelcomPg.png')}
          style={{width: 250, height: 350}}
        />
      </View>

      <Text style={WelcomeStyles.text}>Hello !</Text>
      <Text style={WelcomeStyles.text2}>Welcome to little Drop,where you manage daily tasks</Text>
    

     <View style={WelcomeStyles.btnWrapper}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('SignUp')}
          style={WelcomeStyles.whiteBtn}
          labelStyle={WelcomeStyles.whiteBtnText}
        >
          Signup
        </Button>

        <Button
          mode="contained"
          onPress={() => navigation.navigate('Login')}
          style={WelcomeStyles.whiteBtn}
          labelStyle={WelcomeStyles.whiteBtnText}
        >
          Login
        </Button>
      </View>
     

    </View>
    
  );
};

export default WelcomePg;
