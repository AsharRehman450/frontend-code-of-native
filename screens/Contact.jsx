import { Text } from '@react-navigation/elements'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
 
 const Contact = () => {
    const navigation = useNavigation()
   return (
  <View>
    <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
         <Text>
                    Home page
                </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Album')}>
         <Text>
                    Album  page
                </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('About')}>
         <Text>
                    About page
                </Text>
    </TouchableOpacity>
  </View>
)
 }
 
 export default Contact