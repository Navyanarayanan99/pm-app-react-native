import { Image, StyleSheet, Text, View , TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
const HomeScreen = () => {
  const navigation = useNavigation();
  return (

    <View style={styles.container}>
      <View style={styles.imageContainer}> 
         <Image source={require('../assets/topPic.jpg')} style={styles.image}/>
      </View>
      
      <View style={styles.textContainer}> 
      <View style={styles.cardText}>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 20}}>About </Text>
        <Text style={{fontSize: 20, color: '#5acdc9'}}>Profile Manager</Text>
        </View>
        <Text style={{fontWeight:'bold', fontSize: 15, padding: 5}}>Welcome to Profile Manager Broking !!</Text>
        <Text style={{fontSize: 15, fontWeight: '500',letterSpacing: 0.5,lineHeight: 20}}>We are Profile Manager Broking Company since 2003 with
a team of Insurance Professionals and Industry experts,
having Branches across South India and have served
hundreds of Corporates, Thousands of SMEs and Lakhs of
Policy holders.</Text>
      </View>
      </View>

      <View style={styles.cardContainer}> 
      <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 22, fontWeight: '500'}}>Important </Text>
      <Text style={{fontSize: 22, fontWeight: '500',color: '#5acdc9'}}>Links</Text>
      </View>
      <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
      <TouchableOpacity style={styles.linkCards} onPress={() => navigation.navigate("AboutScreen")}>
          <Image source={require('../assets/hospital.png')} style={styles.linkImage}/>    
          <Text style={{fontSize: 15, fontWeight: '500',marginTop: 10,color: '#5acdc9'}}>PM{'\n'}About</Text>   
          <View style={styles.circle}></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkCards} onPress={() => navigation.navigate("ManageMember")}>
          <Image source={require('../assets/helping.png')} style={styles.linkImage}/>    
          <Text style={{fontSize: 15, fontWeight: '500',marginTop: 10,color: '#5acdc9'}}>Manage{'\n'}Members
          </Text>   
          <View style={styles.circle}></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkCards} onPress={() => navigation.navigate("ManageProfile")}>
          <Image source={require('../assets/touch-screen.png')} style={styles.linkImage}/>    
          <Text style={{fontSize: 15, fontWeight: '500',marginTop: 10,color: '#5acdc9'}}>Manage{'\n'}Profile</Text>   
          <View style={styles.circle}></View>
      </TouchableOpacity>
      </View>
       
      <View style={{flexDirection: 'row',justifyContent: 'space-evenly'}}>
      <TouchableOpacity style={styles.linkCardss} onPress={() => navigation.navigate("PasswordReset")}>
          <Image source={require('../assets/document.png')} style={styles.linkImagee}/>    
          <Text style={{fontSize: 15, fontWeight: '500',marginTop: 10,color: '#5acdc9'}}>Reset{'\n'}Password</Text>   
          <View style={styles.circlee}></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkCardss} onPress={() => navigation.navigate("ContactUs")}>
          <Image source={require('../assets/chat.png')} style={styles.linkImagee}/>    
          <Text style={{fontSize: 15, fontWeight: '500',marginTop: 10,color: '#5acdc9'}}>ContactUs</Text>   
          <View style={styles.circlee}></View>
      </TouchableOpacity>
      </View>
      </View>
      <View style={styles.bottomContainer}> 
      <View style={{flexDirection:'row',  marginLeft: 10,}}>
      <Text style={{fontSize: 20, fontWeight: '500', color:'#5acdc9'}}>Follow </Text>
      <Text style={{fontSize: 17, fontWeight: '500'}}>us on:</Text>
      </View>
      <View style={{flexDirection: 'row',marginLeft: 10, }}>
       <Icon name="facebook-square" size={28} color="blue" style={{padding: 10}}/>
       <Icon name="linkedin-square" size={28} color="blue" style={{padding: 10}}/>
      </View>
      </View>
    </View>
  
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: '#def3f2'
  },
  imageContainer: {
     flex: 3.5,
     alignItems: 'center',
     backgroundColor: '#fff'
     
  },
  image:{ 
      height: '85%',
      width: '95%',
      borderRadius: 20
  },
  textContainer: {
    flex: 4.5,
    alignItems: 'center',
  },
  cardText: {
     backgroundColor: '#fff',
     width: '95%',
     height: '110%',
     marginTop: 20,
     elevation: 20,
     borderRadius: 10,
     padding: 15
  },
  cardContainer: {
    flex: 5.5,
    backgroundColor: '#fff',
    width: '95%',
    height: '160%',
    marginTop: 60,
    elevation: 20,
    borderRadius: 10,
    marginLeft: 10,
    padding: 15
    
  },
  linkCards: {
    backgroundColor: '#fff',
    width: '30%',
    height: '60%',
    marginTop: 10,
    elevation: 20,
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    
  },
  linkCardss: {
    backgroundColor: '#fff',
    width: '30%',
    height: '70%',
    marginTop: -15,
    elevation: 20,
    borderRadius: 10,
    alignItems: 'center',
    
  },
  linkImage: {
    height: '40%',
    width: '40%'
  },
  circle: {
    height: '30%',
    width: '30%',
    borderRadius: 50,
    backgroundColor: '#effafa',
    marginLeft: 77,
    marginTop: -20
  },
  linkImagee: {
    height: '35%',
    width: '35%'
  },
  circlee: {
    height: '30%',
    width: '25%',
    borderRadius: 60,
    backgroundColor: '#effafa',
    marginLeft: 77,
    marginTop: -25
  },
  
  bottomContainer: {
     flex: 2,
     backgroundColor: '#fff',
     width: '95%',
     height: '10%',
     elevation: 20,
     borderRadius: 10,
     marginTop: 10,
     marginLeft: 10
  }
})