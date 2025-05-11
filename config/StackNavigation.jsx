import React from 'react'
import { createNativeStackNavigator, createStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import { NavigationContainer } from '@react-navigation/native';
import Album from '../screens/Album';
import About from '../screens/About';

const Stack = createNativeStackNavigator()

const NavigationReact = () => {
  return (
   <NavigationContainer>
      <Stack.Navigator >
             <Stack.Screen name = 'Home' component={Home} />
             <Stack.Screen name = 'Contact' component={Contact} />
             <Stack.Screen name = 'Album' component={Album} />
             <Stack.Screen name = 'About' component={About} />
      </Stack.Navigator>
   </NavigationContainer>
  )
}

export default NavigationReact;