import { StyleSheet, Text, View,TextInput,TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {useNavigation} from '@react-navigation/native';


const LoginScreen = () => {
    const navigation = useNavigation();
  return (
  <KeyboardAvoidingView style={{flex: 1}}>
    <LinearGradient  colors={[ '#e2fbfa','#a8f3ef', '#d1f9f8',]}
      style={styles.container}>
     <Text style={styles.loginText} >Login</Text>
     <Text style={styles.detailText}>Add your details to login</Text>
     <TextInput
        style={styles.input}
        placeholder= 'Your Email'
      />
      <TextInput
        style={styles.input}
        placeholder= 'Password'
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.buttonText} >Login</Text>
      </TouchableOpacity>
   </LinearGradient>
   </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
         
    },
    loginText: {
         fontSize: 38,
         fontWeight: '500',
         letterSpacing: 1,
         color: '#587a79'
        
    },
    detailText: {
         fontSize: 20,
         fontWeight: '500',
         paddingVertical: 20,
         color: '#899fa0'
        
    },
    input: {
        backgroundColor: '#fff',
        width: '85%',
        height: '10%',
        borderRadius: 40,
       
        fontSize:18,
        fontWeight: '500',
        margin: 20,
        paddingLeft: 40,
        color: '#c0c0c0'
    },
    button: {
        backgroundColor: '#26a8a0',
        width: '85%',
        height: '10%',
        borderRadius: 40,
        margin: 10, 
        justifyContent: 'center',
        alignItems: 'center'   
    },
    buttonText: {
       color: '#fff',
       fontSize: 20,
       fontWeight: '500'
    }
})