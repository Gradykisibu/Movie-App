import React, { useState, useEffect} from 'react'
import { Text,View,Button, StyleSheet ,Pressable,Image, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import { AntDesign } from "@expo/vector-icons";
import { fetchMovies } from '../Api/index';
import MovieCard from '../MovieCard';

const topbar = {
  width: '106%',
  backgroundColor: "#414859",
  height: 50,
  marginTop: -235,
  flexDirection: "row",
  display: "flex",
  alignItems: "center",
  top:0,
};

const logo = {
  width: 40,
  height: 40,
  marginTop: 4,
  marginLeft: 10,
};

export default function Movie({navigation}) {

  return (
    <View style={styles.container}>

      <Pressable onPress={()=>{navigation.navigate('Main')}}>
          <View style={topbar}>
            <Image source={require("../assets/logo2.png")} style={logo} />
            <Text style={{color:'white', zIndex:1,marginLeft:'65%',}}>
              GLIMEO
            </Text>
          </View>
      </Pressable>

      <Text style={{fontSize: 16, fontWeight: 'bold',color:'white', marginLeft:17, borderLeftColor:'#00ffff',borderLeftWidth:3, paddingLeft:6, marginTop:-60}}>MOVIES</Text>


      <Text style={{fontSize:16, fontWeight:'bold',color:'white', marginTop:50,}}>
       Movie Servers are down at the moment,   working  on  getting  latest  updates
      </Text>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2129",
    
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "50%",
    paddingVertical: 20,
    borderRadius: 50,
    backgroundColor: "#17a2b8",
    marginTop: 20,
    padding: 20,
    flexDirection: "row",
  },
});
