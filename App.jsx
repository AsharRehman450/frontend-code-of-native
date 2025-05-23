import {View, Text} from 'react-native';
import {styles} from "./style.jsx" 
import React from 'react';
import NavigationReact from './config/StackNavigation.jsx';
import TabNaviagtion from './config/TabNavigation.jsx';
import Image_Picker from './Components/Image_Picker.jsx';
import {Async_Storage_Component} from './Components/Async_Storage_Component.jsx';
import {PaperProvider} from 'react-native-paper';
import {DefaultTheme} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
//screens
import SignUp from './Components/SignUp.jsx';
import LoginUi from './Components/LoginUi.jsx';
import WelcomePg from './Components/WelcomePg.jsx';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BurgerKing from './screens/BurgerKing.jsx';
import PopEyes from './screens/PopEyes.jsx';
import JumboJuice from './screens/JumboJuice.jsx';
import MacDonalds from './screens/MacDonalds.jsx';
import TacoBell from './screens/TacoBell.jsx';
import ItemDetailScreen from './screens/ItemDetailScreen.jsx';
import Carts from './screens/Carts.jsx';
import PlaceOrder from './screens/PlaceOrder.jsx';
import Home from './screens/Home.jsx';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: 'black',
    placeholder: 'gray',
  },
};

const Stack= createNativeStackNavigator();

const App = () => {
  return (

    // <View style={styles.container}>
    //  <Text style={styles.text_style}> App </Text>
    //  </View>
    <NavigationContainer >
    <PaperProvider theme={theme}>
      <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name= "Welcome" component={WelcomePg} options={{ headerShown: false }}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginUi} options={{ headerShown: false }} />
      <Stack.Screen name="TabNavigator" component={TabNaviagtion} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="BurgerKing" component={BurgerKing} options={{ headerShown: false }} />
      <Stack.Screen name="ItemDetailScreen" component={ItemDetailScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Carts" component={Carts} options={{ headerShown: false }}/>
      <Stack.Screen name="PlaceOrder" component={PlaceOrder} options={{ headerShown: false }}/>
      <Stack.Screen name="PopEyes" component={PopEyes} options={{ headerShown: false }} />
      <Stack.Screen name="JumboJuice" component={JumboJuice} options={{ headerShown: false }} />
      <Stack.Screen name="MacDonalds" component={MacDonalds} options={{ headerShown: false }} />
      <Stack.Screen name="TacoBell" component={TacoBell} options={{ headerShown: false }} />

       </Stack.Navigator>
    </PaperProvider>
    </NavigationContainer>
  );

  // <SignUp/>
  // return(
  //   <View style={styles.container}>
  //   <Text style={styles.text_style}> App </Text>
  //    </View>
  // )
};

export default App;

// srf vector icon install kiya ha ocde bhi paste jrdia ha lcal staorgae wala kaam ha bs

// <TabNaviagtion/>

// <Image_Picker/>
// <Async_Storage_Component/>
//  <Image_Picker/>

{
  /* <Async_Storage_Component/> */
}

// <Image_Picker/>
// <NavigationReact />
// <View style={styles.container}>
//   <Text style={styles.text_style}> App </Text>
// </View>
// <NavigationContainer>
{
  /* <TabNaviagtion/> */
}
// <NavigationReact />
{
  /* </NavigationContainer> */
}
