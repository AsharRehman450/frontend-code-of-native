import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {LoginStyles} from '../Components/Login';
import {Avatar, Button, Card, TextInput} from 'react-native-paper';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import {Alert} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import { storeData } from '../Components/Async_Storage_Login';


const LoginUi = () => {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const navigation = useNavigation();

  const HandleLoginPg = async () => {
    try {
      const response = await axios.post(
        'http://192.168.35.233:8000/ashar/api/login',
        {
          email: email,
          password: password,
        },
      );
      console.log('Login Response:', response.data);
      Alert.alert('Login Successful', 'Welcome back!');

    await storeData('user', response.data);
        navigation.navigate('TabNavigator');     
         SetEmail('');
       SetPassword('');
    } catch (error) {
      console.log('Login Error:', error.message);
      console.log('Login Error Response:', error.response?.data);
      Alert.alert(
        'Login Failed',
        error.response?.data?.message || 'Invalid email or password.',
      );
    }
  };

  return (
    <ScrollView>
      <View style={LoginStyles.container}>
        <Card style={LoginStyles.Card}>
          <View style={{alignItems: 'center', marginVertical: 15}}>
            <Image
              source={require('../img/loginImg.webp')}
              style={{width: 250, height: 200}}
            />
            <Text style={LoginStyles.Text}>Login</Text>
          </View>

          <Card.Content>
            <Text style={LoginStyles.label}>Email</Text>
            <TextInput
              placeholder="Enter your email"
              mode="outlined"
              style={LoginStyles.input}
              value={email}
              onChangeText={SetEmail}
            />

            <Text style={LoginStyles.label}>Password</Text>
            <TextInput
              placeholder="Enter your password"
              mode="outlined"
              style={LoginStyles.input}
              value={password}
              onChangeText={SetPassword}
              secureTextEntry={true}
            />
          </Card.Content>

          <View style={{alignItems: 'center'}}>
            <Text style={{color: 'black'}}>
              Don't have an account?{' '}
              <Text
                style={{color: '#1E90FF', fontWeight: 'bold'}}
                onPress={() => navigation.navigate('SignUp')}>
                Signup
              </Text>
            </Text>
          </View>

          <View style={LoginStyles.btnContainer}>
            <TouchableOpacity>
              <Button
                style={LoginStyles.btn}
                mode="contained"
                onPress={HandleLoginPg}>
                Login
              </Button>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

export default LoginUi;
