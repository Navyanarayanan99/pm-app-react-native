import { Image, StyleSheet, Text, View ,TextInput, TouchableOpacity} from 'react-native'
import React from 'react'

const ManageProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerOne}>
        <Image source={require('../assets/aboutpm.jpg')} style={styles.image}/>
      </View>
      <View style={styles.containerTwo}>
        <View style={styles.inputContainer}>
          <Image source={require('../assets/man-user.png')} style={styles.user}/>

          <TextInput
        style={styles.input}
        placeholder="Name"
      />
       <TextInput
        style={styles.input}
        placeholder="Email"
      />
       <TextInput
        style={styles.input}
        placeholder="Password"
      />
       <TextInput
        style={styles.input}
        placeholder="Confirm Password"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={{color: '#fff'}}>Update Profile</Text>
      </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ManageProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#def3f2',
  },
  containerOne: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    height: '90%',
    width: '95%',
    borderRadius: 20,
  },
  containerTwo: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',

  },
  inputContainer: {
    backgroundColor: '#fff',
    width: '93%',
    height: '90%',
    elevation: 20,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    
    
  },
  user: {
    height: '20%',
    width: '20%',
    marginTop: 20,
   
  },
  input: {
    
    height: 40,
    width: "80%",
    margin: 10,
    borderWidth: 0.9,
    padding: 13,
    borderColor: '#5acdc9',
    borderRadius: 10,
    
  },
  button: {
    height: '8%',
    width: '44%',
    backgroundColor: '#1aa29a',
    borderRadius: 10,
    justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10
  }
})