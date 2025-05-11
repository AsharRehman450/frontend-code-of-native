import { Text } from '@react-navigation/elements'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
 
 const About = () => {
  const navigation = useNavigation()
   return (
  <View>
    <TouchableOpacity onPress={()=>navigation.navigate('Album')}>
      <Text> Album Page</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Contact')}>
            <Text>
                contact page
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Album')}>
            <Text>
                Album page
            </Text>
        </TouchableOpacity>
  </View>
)
 }
 
 export default About