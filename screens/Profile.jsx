import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {removeData} from '../Components/Async_Storage_Login';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

const Profile = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await removeData('user');
    navigation.replace('Login');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          width: width,
          height: height,
          backgroundColor: '#f9f9f9',
          padding: 20,
          elevation: 4,
          position: 'relative',
        }}>
        <View style={{marginTop: 60, alignItems: 'center'}}>
          <Image
            source={require('../img/profile.jpg')}
            style={{
              width: 300,
              height: 190,
              borderRadius: 12,
              marginTop: 40,
              marginBottom: 20,
              resizeMode: 'cover',
            }}
          />
          <Text style={{fontSize: 28, fontWeight: 'bold', marginBottom: 16}}>
            My Profile
          </Text>
          <Text style={{fontSize: 18, color: '#333', marginBottom: 8}}>
            Username: abc
          </Text>
          <Text style={{fontSize: 18, color: '#333'}}>
            Email: abc@example.com
          </Text>
          <TouchableOpacity
            onPress={handleLogout}
            style={{
              marginTop: 30,
              backgroundColor: '#eee',
              paddingVertical: 12,
              paddingHorizontal: 16,
              elevation: 2,
              width: '100%',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;
