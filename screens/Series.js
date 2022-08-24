import React, { useState, useEffect} from 'react'
import { Text,View,Button, StyleSheet ,Pressable,Image, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import { AntDesign } from "@expo/vector-icons";
import { fetchMovies } from '../Api/index';
import MovieCard from '../MovieCard';
import { MaterialIcons } from '@expo/vector-icons';

const topbar = {
  width: "100%",
  backgroundColor:'#414859',
  height: 50,
  marginTop: 23,
  flexDirection:'row',
  display: "flex",
  alignItems: "center",
};

const logo = {
  width: 40,
  height: 40,
  marginTop: 4,
  marginLeft: 10,
};

export default function Series({navigation}) {

  return (
    <View>

      <Pressable onPress={()=>{navigation.navigate('Main')}}>
          <View style={topbar}>
            <Image source={require("../assets/logo2.png")} style={logo} />
            <Text style={{color:'white', zIndex:1,marginLeft:'65%',}}>
              GLIMEO
            </Text>
          </View>
      </Pressable>

      <ScrollView>
     <View style={styles.container}>
     <Text style={{fontSize: 16, fontWeight: 'bold',color:'white', marginLeft:0, borderLeftColor:'#00ffff',borderLeftWidth:3, paddingLeft:6,}}>SERIES</Text>

     <View style={{flexDirection:'row'}}>
     <Pressable  onPress={()=>{navigation.navigate('Movie')}} style={styles.button}>
      <Text
        style={{color: "white",fontWeight: "bold",paddingTop: 2,fontSize: 16,}}>
            GO TO MOVIES
      </Text>
     </Pressable>

     <Pressable  onPress={()=>{navigation.navigate('Home')}} style={styles.button}>
      <Text
        style={{color: "white",fontWeight: "bold",paddingTop: 2,fontSize: 16,}}>
            GO TO HOME
      </Text>
     </Pressable>
     </View>



      <Text style={{fontSize:16, fontWeight:'bold',color:'white', marginTop:50,}}>
      Series Servers are down at the moment,working
      </Text>

      <Text style={{fontSize:16, fontWeight:'bold',color:'white', marginTop:10,}}>
      on getting latest updates
      </Text>

      <Text style={{marginTop:40}}>
      <MaterialIcons name="error-outline" size={70} color="white" />
      </Text>

      <View style={{marginTop:800}}>

      </View>
     </View>
      </ScrollView>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#1E2129",
    padding: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingTop:200
  },
  button: {
    width: "50%",
    paddingVertical: 7,
    borderRadius: 50,
    backgroundColor: "#17a2b8",
    marginTop: 20,
    // padding: 20,
    flexDirection: "row",
    textAlign:'center',
    justifyContent:'center',
    
  },
});
