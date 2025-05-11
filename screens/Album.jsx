import { Text } from '@react-navigation/elements'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
 
 const Album = () => {
   const navigation = useNavigation()
   return (
  <View>
    <TouchableOpacity onPress={()=>navigation.navigate('About')}>
      <Text>
        About Page
      </Text>
    </TouchableOpacity >
    <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
      <Text>
       Home Page
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Contact')}>
      <Text>
       Contact Page
      </Text>
    </TouchableOpacity>
  </View>
)
 }
 
 export default Album