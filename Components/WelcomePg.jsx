import { View, Text, Image } from 'react-native';
import React from 'react';
import { WelcomeStyles } from '../Components/WelcomeStyles';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

const WelcomePg = () => {
  const navigation = useNavigation();
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
