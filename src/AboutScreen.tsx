import {FlatList, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerOne}>
        <Image source={require('../assets/aboutpm.jpg')} style={styles.image} />
      </View>
      
      <View style={styles.containerTwo}>
        <View style={styles.textContainer}>
          <ScrollView>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 20}}>About </Text>
            <Text style={{fontSize: 20, color: '#5acdc9'}}>
              Profile Manager
            </Text>
          </View>
          <Text style={{fontWeight: 'bold', fontSize: 15, padding: 5}}>
            Welcome to Profile Manager Broking !!
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              letterSpacing: 0.5,
              lineHeight: 20,
            }}>
            We are Profile Manager Broking Company since 2003 with a team of
            Insurance Professionals and Industry experts, having Branches across
            South India and have served hundreds of Corporates, Thousands of
            SMEs and Lakhs of Policy holders.
          </Text>
          <Text style={{ marginTop: 20 , fontSize: 18 , fontWeight: '500'}}>Why Profile Manage Brokers</Text>
          <View>
    
           <FlatList
           data={[
             { key: 'Through a digital insurance platform, insurance software enables insurance' },
             { key: 'Conduct operational and organizational duties more successfully and efficiently.' },
             { key: 'Assist in obtaining policy with the most competitive premium, terms and conditions' },
             { key: 'Optimize Insurance cost' },
             { key: 'Mexico City' },
             { key: 'No extra cost to the client for availing the service of an insurance broker' },
            
           ]}
           renderItem={({ item }) => {
             return (
               <View style={{ marginBottom: 10 }}>
                 <Text style={{ fontSize: 15 }}>{`\u25CF ${item.key}`}</Text>
               </View>
             );
           }}
         />
          </View>

          <Text style={{ marginTop: 20 , fontSize: 18 , fontWeight: '500'}}>Why Profile Manage</Text>
          <View>
    
           <FlatList
           data={[
             { key: 'An ISO 9001-2015 Profile Manager company doing both General and Life Insurance.' },
             { key: 'We have Network services across South India, total 12 Offices.' },
             { key: 'Having more than 30 Insurance qualified professionals from National Insurance Academy, Pune.' },
             { key: 'We are the only company providing expert advice in Claim consultancy services across Kerala.' },
             { key: 'We are serving our clients by way of using latest Technologies in software and Mobile applications.' },
             { key: 'No extra cost to the client for availing the service of an insurance broker' },
            
           ]}
           renderItem={({ item }) => {
             return (
               <View style={{ marginBottom: 10 }}>
                 <Text style={{ fontSize: 15 }}>{`\u25CF ${item.key}`}</Text>
               </View>
             );
           }}
         />
          </View>
          </ScrollView>
        </View>
        
      </View>
      
    </View>
  );
};

export default AboutScreen;

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
  containerTwo: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  textContainer: {
    backgroundColor: '#fff',
    width: '93%',
    height: '110%',
    elevation: 20,
    borderRadius: 10,
    padding: 15,
  },
  image: {
    height: '95%',
    width: '95%',
    borderRadius: 20,
  },
});
