import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from 'react-native-vector-icons/AntDesign';
// import AntDesign from 'react-native-vector-icons/Ant-Design'
import Home from "../screens/Home";
import Album from "../screens/Album";
import Contact from "../screens/Contact";
import About from "../screens/About";

const Tab = createBottomTabNavigator();

const TabNaviagtion = () =>{
   return(
       <NavigationContainer>
       <Tab.Navigator>
           <Tab.Screen name = "Home" component={Home} options={{tabBarIcon :({color}) => <AntDesign name="home" size={30} color="red"/> }}/>
           <Tab.Screen name = "About" component={About} options={{tabBarIcon :({color}) => <AntDesign name="book" size={30} color="red"/> }}/>
           <Tab.Screen name = "Contact" component={Contact} options={{tabBarIcon :({color}) => <AntDesign name="contacts" size={30} color="red"/> }}/>
           <Tab.Screen name = "Album" component={Album} options={{tabBarIcon :({color}) => <AntDesign name="picture" size={30} color="red"/> }}/>
       </Tab.Navigator>
       </NavigationContainer>
   )
}

export default TabNaviagtion;

//  rnfe   
// react-native async storage
// react-native vector icon