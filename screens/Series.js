import React from 'react'
import { Text,View,Button, StyleSheet, Pressable} from 'react-native'
import 'react-native-gesture-handler'
import { AntDesign } from "@expo/vector-icons";


export default function Series({navigation}) {
  return (
    <View style={styles.container} >
      <Text>SeriesScreen</Text>
      <Pressable  onPress={()=>{navigation.navigate('Main')}} style={styles.button}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                paddingTop: 2,
                fontSize: 18,
              }}
            >
              MAIN
            </Text>
            <AntDesign
              name="rightcircleo"
              size={28}
              color="#FFF"
              style={{ marginLeft: 12 }}
            />
          </Pressable>

          <Pressable  onPress={()=>{navigation.navigate('Serie')}} style={styles.button}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                paddingTop: 2,
                fontSize: 18,
              }}
            >
              SERIES
            </Text>
            <AntDesign
              name="rightcircleo"
              size={28}
              color="#FFF"
              style={{ marginLeft: 12 }}
            />
          </Pressable>

          <Pressable  onPress={()=>{navigation.navigate('Movie')}} style={styles.button}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                paddingTop: 2,
                fontSize: 18,
              }}
            >
              MOVIE
            </Text>
            <AntDesign
              name="rightcircleo"
              size={28}
              color="#FFF"
              style={{ marginLeft: 12 }}
            />
          </Pressable>
      {/* <Button onPress={()=>{ navigation.navigate('Main')}} title="go to main"/> */}
      {/* <Button onPress={()=>{ navigation.navigate('Home')}} title="go to Home"/> */}
      {/* <Button onPress={()=>{ navigation.navigate('Movie')}} title="go to Movie"/> */}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "blue",
    padding:40,
    // paddingHorizontal: 20,
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
