import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ContactUs = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/contactus.jpg')} style={styles.image}/>
      </View>
      <View style={styles.textContainer}>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 18, fontWeight: '500'}}>PROFILE MANAGER </Text>
        <Text style={{fontSize: 18, fontWeight: '500',color: '#5acdc9'}}>PVT.LTD</Text>
        </View>
    
        <Text style={{fontSize: 14, fontWeight:'500'}}>58/222/19,1st Floor</Text>
        <Text style={{fontSize: 14, fontWeight:'500'}}>lorem ipsum street</Text>
        <Text style={{fontSize: 14, fontWeight:'500'}}>lorem man power 54543</Text>
        <Text style={{fontSize: 14, fontWeight:'500'}}>PM  Registration No. DB 148 validity: 15-04-2021 to 14-04-2024</Text>
      </View>
      <View style={styles.containerOne}>
        <Image source={require('../assets/viber.png')} style={{height: 35, width: 35}} />
        <Text style={{fontSize: 20,fontWeight: 'bold', marginLeft: 50, marginTop: -30}}>For buisiness Enquiries</Text>
        <View style={{flexDirection: 'row' , marginLeft: 50, marginTop: 10}}>
          <Text style={{fontSize: 20}}>1233456789</Text>
          <TouchableOpacity style={{marginLeft: 50, height: 35, width: 120, backgroundColor: '#35c4bd', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}} >
            <Text style={{color: '#fff', fontSize: 17, }}>Tap to call</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row' , marginLeft: 50, marginTop: 10}}>
          <Text style={{fontSize: 20}}>1233456789</Text>
          <TouchableOpacity style={{marginLeft: 50, height: 35, width: 120, backgroundColor: '#35c4bd', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}} >
            <Text style={{color: '#fff', fontSize: 17, }}>Tap to call</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row' , marginLeft: 50, marginTop: 10}}>
          <Text style={{fontSize: 20}}>1233456789</Text>
          <TouchableOpacity style={{marginLeft: 50, height: 35, width: 120, backgroundColor: '#35c4bd', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}} >
            <Text style={{color: '#fff', fontSize: 17, }}>Tap to call</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerTwo}>
      <Image source={require('../assets/viber.png')} style={{height: 35, width: 35}} />
        <Text style={{fontSize: 20,fontWeight: 'bold', marginLeft: 50, marginTop: -30}}>For buisiness Enquiries</Text>
        <View style={{flexDirection: 'row' , marginLeft: 50, marginTop: 10}}>
          <Text style={{fontSize: 20}}>1233456789</Text>
          <TouchableOpacity style={{marginLeft: 50, height: 35, width: 120, backgroundColor: '#35c4bd', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}} >
            <Text style={{color: '#fff', fontSize: 17, }}>Tap to call</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row' , marginLeft: 50, marginTop: 10}}>
          <Text style={{fontSize: 20}}>1233456789</Text>
          <TouchableOpacity style={{marginLeft: 50, height: 35, width: 120, backgroundColor: '#35c4bd', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}} >
            <Text style={{color: '#fff', fontSize: 17, }}>Tap to call</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerThree}>
      <Image source={require('../assets/viber.png')} style={{height: 35, width: 35}} />
        <Text style={{fontSize: 20,fontWeight: 'bold', marginLeft: 50, marginTop: -30}}>For buisiness Enquiries</Text>
        <View style={{flexDirection: 'row' , marginLeft: 50, marginTop: 10}}>
          <Text style={{fontSize: 20}}>1233456789</Text>
          <TouchableOpacity style={{marginLeft: 50, height: 35, width: 120, backgroundColor: '#35c4bd', borderRadius: 5, justifyContent: 'center', alignItems: 'center'}} >
            <Text style={{color: '#fff', fontSize: 17, }}>Tap to call</Text>
          </TouchableOpacity>
        </View>
       
      </View>
    </ScrollView>
  )
}

export default ContactUs

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: '#def3f2',
     
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    height: '90%',
    width: '95%',
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
    backgroundColor: '#fff',
     width: '95%',
     marginTop: 20,
     elevation: 20,
     borderRadius: 10,
     marginLeft: 10,
    padding: 15
    
  },
  containerOne: {
    flex: 1.5,
    backgroundColor: '#fff',
     width: '95%',
     marginTop: 20,
     elevation: 20,
     borderRadius: 10,
     marginLeft: 10,
    padding: 15
  },
  containerTwo: {
    flex: 0.5,
    backgroundColor: '#fff',
    width: '95%',
    marginTop: 20,
    elevation: 20,
    borderRadius: 10,
    marginLeft: 10,
   padding: 15
  },
  containerThree: {
    flex: 0.5,
    backgroundColor: '#fff',
    width: '95%',
    marginTop: 20,
    elevation: 20,
    borderRadius: 10,
    marginLeft: 10,
   padding: 15
  }
})