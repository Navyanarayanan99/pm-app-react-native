import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutScreen from '../AboutScreen';
import ContactUs from '../ContactUs';
import ManageProfile from '../ManageProfile';
import PasswordReset from '../PasswordReset';
import HomeScreen from '../HomeScreen';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    <Drawer.Screen name="AboutScreen" component={AboutScreen} />
    <Drawer.Screen name="ManageProfile" component={ManageProfile} />
    <Drawer.Screen name="PasswordReset" component={PasswordReset} />
    <Drawer.Screen name="ContactUs" component={ContactUs} />
  </Drawer.Navigator>
  )
}

export default DrawerNav

const styles = StyleSheet.create({})