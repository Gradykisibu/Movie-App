import React from "react";
import { StyleSheet, Text, View, TextInput, Pressable , ScrollView , Image} from "react-native";
import Main from "./screens/main";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import Movie from "./screens/Movie";
import Series from "./screens/Series";
import { AppContext } from "../movie-stream/utils/context";
import { useContext, useState } from "react";


const Stack = createNativeStackNavigator();

export default function App() {

    const [details, setDetails] = useState({
      name:'',
      description:'',
      img:''
    })


  return (  
    // <View style={styles.container}>
    //   <Main/>
    // </View>
    <AppContext.Provider   value={{ details, setDetails}}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Main" component={Main} />
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown:false}} name="Movie" component={Movie}/>
        <Stack.Screen options={{headerShown:false}} name="Series" component={Series}/>
      </Stack.Navigator>
    </NavigationContainer>

     </AppContext.Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#1E2129",
    // marginTop: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
