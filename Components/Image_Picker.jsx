import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import { launchCamera } from 'react-native-image-picker';
// import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
// import { Image } from 'react-native';

const Image_Picker = () => {

    const [captured_image,setCaptured_image] = useState('')

  const handlePress = async() => {
     const result = await launchCamera({
        includeBase64: true,
     })
    if (result) {
        const uri = result.assets[0].uri
        console.log(result)
        setCaptured_image(uri)

        // console.log(uri)
        return(
        <Image style={{width:200, height:200, resizeMode:'cover'}} source={{uri:captured_image}}/>
      )
    }
    //  console.log(result)

  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Pick Image</Text>
      </TouchableOpacity>
      {
         captured_image ? (
        <Image style={styles.img} source={{uri:captured_image}}/>) : null
      }

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3, // for Android shadow
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Image_Picker;
