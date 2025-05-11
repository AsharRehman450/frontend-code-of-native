import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {SignUpStyles} from '../Components/SignUpStyle';
import {Avatar, Button, Card, TextInput} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const SignUp = () => {
    
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email,SetEmail] = useState('');
  const [password, setPassword] = useState('');
    
    const navigation = useNavigation();

    const HandleSignUp = async()=>{
        try {
          const response = await axios.post("https://backend-m84u.vercel.app/ashar/api/signup",{
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
          });
          console.log(response.data)
          navigation.navigate("Login")
        } catch (error) {
           console.log("Error occured during signup",error)
        }
    }
  
  return (
    <ScrollView>
      <View style={SignUpStyles.container}>
        <Card style={SignUpStyles.Card}>
          <View style={{alignItems: 'center', marginVertical: 15}}>
            <Image
              source={require('../img/SignUp.png')}
              style={{width: 250, height: 200}}
            />
            <Text style={SignUpStyles.Text}>SignUp</Text>
          </View>

          <Card.Content>
            <Text style={SignUpStyles.label}>FirstName</Text>
            <TextInput
              placeholder="Enter your first name"
              mode="outlined"
              style={SignUpStyles.input}
              onChangeText={(text)=>setFirstName(text)}
            />

             <Text style={SignUpStyles.label}>Last Name</Text>
  <TextInput
    placeholder="Enter your last name"
    mode="outlined"
    style={SignUpStyles.input}
      onChangeText={(text)=>setlastName(text)}

  />

            <Text style={SignUpStyles.label}>Email</Text>
            <TextInput
              placeholder="Enter your email"
              mode="outlined"
              style={SignUpStyles.input}
              onChangeText={(text)=>SetEmail(text)}

            />

            <Text style={SignUpStyles.label}>Password</Text>
            <TextInput
              placeholder="Enter your password"
              mode="outlined"
              style={SignUpStyles.input}
              onChangeText={(text)=>setPassword(text)}

            />
          </Card.Content>

          <View style={SignUpStyles.btnContainer}>
          <TouchableOpacity>
            <Button style={SignUpStyles.btn} mode="contained" onPress={HandleSignUp}>
              Signup
            </Button>
            </TouchableOpacity>
          </View>



          
        </Card>
      </View>
     
    </ScrollView>
  );
};

export default SignUp;
