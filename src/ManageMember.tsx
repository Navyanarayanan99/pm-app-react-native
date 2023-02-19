import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
const Data= [
  {
    id: 1,
    image: require('../assets/man-user.png'),
    name: 'Name: Lorem ipsum P K',
    email: 'Email: user@gmail.com',
  },
  {
    id: 2,
    image: require('../assets/man-user.png'),
    name: 'Name: Lorem ipsum P K',
    email: 'Email: user@gmail.com'
  },
  {
    id: 3,
    image: require('../assets/man-user.png'),
    name: 'Name: Lorem ipsum P K',
    email: 'Email: user@gmail.com'
  },
  {
    id: 4,
    image: require('../assets/man-user.png'),
    name: 'Name: Lorem ipsum P K',
    email: 'Email: user@gmail.com'
  },
  {
    id: 5,
    image: require('../assets/man-user.png'),
    name: 'Name: Lorem ipsum P K',
    email: 'Email: user@gmail.com'
  }

]

const User = ({ item }) => {
  return (
    <View style={styles.containerFlatlist}>
      <View style={{flexDirection: 'row', height: 100}}>
      <Image source={item.image} style={{height: 80, width: 80, marginTop: 10}} />
      <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 20}}>
        <Text style={{fontSize: 15, fontWeight: '500'}}>{item.name}</Text>
        <Text style={{fontSize: 15, fontWeight: '500'}}>{item.email}</Text>
      </View>
      </View>
        
    </View>
  );
};
const ManageMember = () => {

  
  return (
    <View style={styles.container}>
      <View style={styles.containerOne}>
      <Image source={require('../assets/aboutpm.jpg')} style={styles.image}/>
      </View>
      <View style={styles.containerTwo}>

         <FlatList
          data={Data}
          keyExtractor={(item) => item.id}
        renderItem={User}
      />
        <View style={styles.plus}>
        <Icon name="pluscircle" size={40} color="#35c4bd" />
      </View>
      </View>
    </View>
  )
}

export default ManageMember

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#def3f2',
   
  },
  containerOne: {
     flex: 1
  },
  containerTwo: {
     flex: 3,
     marginLeft: 10
  },
  image: {
    height: '90%',
  width: '95%',
  borderRadius: 20,
  },
  containerFlatlist: {
    margin: 10,
    width: '95%',
    elevation: 20,
    borderRadius: 10,
    backgroundColor:'#fff',
   
  },
  plus: {
    position: "absolute",
    bottom: 30,
    right: 10,
    display: "flex",
  }
  
})