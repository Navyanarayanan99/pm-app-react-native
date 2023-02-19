import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './src/Login';
import HomeScreen from './src/HomeScreen';
import DrawerNav from './src/Navigation/DrawerNav';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({})