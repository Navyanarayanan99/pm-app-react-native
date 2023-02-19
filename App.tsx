import { StyleSheet, Text, View } from 'react-native'
import React ,{useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './src/Login';
import HomeScreen from './src/HomeScreen';
import AboutScreen from './src/AboutScreen';
import ManageMember from './src/ManageMember';
import ManageProfile from './src/ManageProfile';
import PasswordReset from './src/PasswordReset';
import ContactUs from './src/ContactUs';
import SplashScreen from 'react-native-splash-screen';
import  Icon  from 'react-native-vector-icons/Entypo';
//import DrawerNav from './src/Navigation/DrawerNav';


import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  
  useEffect(() => {
   SplashScreen.hide();
  }, [])
  const DrawerNav = () => {
    console.log("press");
    return (
      <Drawer.Navigator initialRouteName="HomeScreen">
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="AboutScreen" component={AboutScreen} />
      <Drawer.Screen name="ManageProfile" component={ManageProfile} />
      <Drawer.Screen name="PasswordReset" component={PasswordReset} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
    </Drawer.Navigator>
    )
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{ title: 'PM',headerBackVisible: false , headerRight: () => <Icon name='menu' size={30}  /> }}/>
        <Stack.Screen name="AboutScreen" component={AboutScreen}  options={{ title: 'PM'}}/>
        <Stack.Screen name="ManageMember" component={ManageMember}  options={{ title: 'PM'}}/>
        <Stack.Screen name="ManageProfile" component={ManageProfile} options={{ title: 'PM'}}/>
        <Stack.Screen name="PasswordReset" component={PasswordReset} options={{ title: 'PM'}}/>
        <Stack.Screen name="ContactUs" component={ContactUs} options={{ title: 'PM'}} />

        <Stack.Screen name="Drawer" component={DrawerNav}  />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({})