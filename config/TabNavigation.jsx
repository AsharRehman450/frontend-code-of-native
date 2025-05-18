import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from "../screens/Home";
import Order from "../screens/Order";
import Carts from "../screens/Carts";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";


const Tab = createBottomTabNavigator();

const TabNaviagtion = () =>{
   return(
       <Tab.Navigator>
           <Tab.Screen name = "Home" component={Home} options={{tabBarIcon :({color}) => <AntDesign name="home" size={24} color="black"/> }}/>
           <Tab.Screen name = "Carts" component={Carts} options={{tabBarIcon :({color}) => <AntDesign name="shoppingcart" size={24} color="black"/> }}/>
           <Tab.Screen name = "Order" component={Order} options={{tabBarIcon :({color}) => <AntDesign name="solution1" size={24} color="black"/> }}/>
           <Tab.Screen name = "Profile" component={Profile} options={{tabBarIcon :({color}) => <AntDesign name="user" size={24} color="black"/> }}/>
           <Tab.Screen name = "Notifications" component={Notifications} options={{tabBarIcon :({color}) => <AntDesign name="bells" size={24} color="black"/> }}/>
       </Tab.Navigator>
   )
}

export default TabNaviagtion;

//  rnfe   
// react-native async storage
// react-native vector icon