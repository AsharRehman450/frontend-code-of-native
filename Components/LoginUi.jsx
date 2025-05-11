import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {LoginStyles} from '../Components/Login';
import {Avatar, Button, Card, TextInput} from 'react-native-paper';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LoginUi = () => {
  const [Email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  const navigation = useNavigation();

  const HandleLoginPg = () => {
    console.log('Email', Email);
    console.log('Password', password);

     // Reset input fields after logging
  SetEmail('');
  SetPassword('');
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
              value={Email}
              onChangeText={SetEmail}
            />

            <Text style={LoginStyles.label}>Password</Text>
            <TextInput
              placeholder="Enter your password"
              mode="outlined"
              style={LoginStyles.input}
              value={password}
              onChangeText={SetPassword}
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
