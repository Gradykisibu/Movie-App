import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
// import Slide from "../comps/Slide";


const text = {
  color: "white",
  marginTop: 10,
};
const header = {
  fontWeight: "bold",
  fontSize: 16,
  color: "white",
  marginTop: 20,
};
const mainConatiner = {
  marginTop: 30,
};
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
  width: 36,
  height: 36,
  marginTop: 4,
  // marginLeft: 10,
};
const logo2 = {
  width: 70,
  height: 70,
  marginTop: 30,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: 23,
};
const logotext = {
  color: "#FFF",
  fontWeight: "bold",
  fontSize: 35,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const footerText = {
  color: "white",
  opacity: 0.6,
  fontSize: 11,
};

export default function Main({navigation}) {
  return (
    <View>
      <Pressable onPress={()=>{navigation.navigate('Main')}}>
      <View style={topbar}>
        <Image source={require("../assets/logo2.png")} style={logo} />
        <Text style={{color:'white', zIndex:1,marginLeft:'70%',}}>
          GLIMEO
        </Text>
      </View>
      </Pressable>

      <ScrollView>
        <View style={styles.container}>
          <View>
            <Image source={require("../assets/logo2.png")} style={logo2} />
            <Text style={logotext}>GLIMEO</Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <TextInput
              style={styles.input}
              placeholder="Search Movie or Tv show..."
            />
            <AntDesign
              name="search1"
              size={24}
              color="#FFF"
              style={{
                backgroundColor: "#17a2b8",
                width: 45,
                height: 49,
                paddingTop: 10,
                paddingLeft: 6,
                marginTop: 0.3,
                borderBottomRightRadius: 20,
                borderTopRightRadius: 20,
                borderColor: "#777",
              }}
            />
          </View>

          <Pressable  onPress={()=>{navigation.navigate('Home')}} style={styles.button}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                paddingTop: 2,
                fontSize: 16,
              }}
            >
              GO TO HOME
            </Text>
            <AntDesign
              name="rightcircleo"
              size={28}
              color="#FFF"
              style={{ marginLeft: 12 }}
            />
          </Pressable>

          <View style={mainConatiner}>
            {/*Paragrapgh one */}
            <View>
              <Text style={header}>Watch Movies online</Text>
              <Text style={text}>
                Glimeo is one of the best free sites to watch movies online for
                free in 2021. With no registration or payment required, you can
                binge-watch tens of thousands of movies and TV shows in HD
                quality seamlessly and safely New titles are updated on the site
                daily to make sure fun never ends on Glimeo. Should you not find
                your movie of interest, simply make a request and we will scour
                the Internet to provide you the content you have been longing
                for.
              </Text>
            </View>

            {/*Paragrapgh two */}
            <View>
              <Text style={header}>What is Sflix</Text>
              <Text style={text}>
                SFlix is a newly-created site that allows users to watch and
                download movies and TV shows online in HD quality for free.
                Glimeo’s purpose is to become a free alternative to Netflix so
                movie enthusiasts can enjoy all the features that the giant
                streaming service offers without having to pay a dime. Glimeo is
                created in order for movie fans to watch movies safely and
                seamlessly no matter what their financial situation is. We might
                have a long way to go to reach our goal, but we believe, with
                your support, it can be achieved soon.
              </Text>
            </View>

            {/*Paragrapgh three */}
            <View>
              <Text style={header}>
                Is Glimeo Better for streaming movies and shows?
              </Text>
              <Text style={text}>
                Netflix is no doubt the most popular free movie site ever. At
                peak, 123movies welcomed 98 millions of users a month. To many
                movie fans, whenever they think of free movie streaming, the
                domain 123movies.to pops up. Unfortunately, the site was shut
                down in 2018 and since then, we haven't heard any official news
                about a comeback from the team. In fact, multiple sites have
                been created to copy 123movies and they might be
                ill-intentioned. Visiting such sites might cause you troubles
                because they are all filled with malicious ads. For your
                complete security, you should stay with Glimeo instead. Hackers
                have no chances to access your device or gain your private
                information on Glimeo as we are free from ads and do not require
                any registration.
              </Text>
            </View>
          </View>

          <View>
            <Pressable onPress={()=>{navigation.navigate('Home')}} style={styles.button2}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  paddingTop: 2,
                  fontSize: 18,
                }}
              >
                Go To Glimeo
              </Text>
              <AntDesign
                name="rightcircleo"
                size={28}
                color="#FFF"
                style={{ marginLeft: 12 }}
              />
            </Pressable>
          </View>

          <View style={styles.footerSection}>
            <View style={styles.footerBox}>
              <Text style={footerText}>Android App</Text>
              <Text style={footerText}>Terms & Services</Text>
              <Text style={footerText}>Contact</Text>
            </View>
            <View style={styles.footerBox}>
              <Text style={footerText}>Site Map</Text>
              <Text style={footerText}>9Anime</Text>
            </View>
          </View>

          <View style={{marginTop:15,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'white', opacity:0.6,}}>
              SFlix is a Free Movies streaming site with zero ads. We let you
              watch movies online 
            </Text>
            <Text style={{color:'white', opacity:0.6,marginTop:20,}}>
            <AntDesign name="copyright" size={15} color="lightgrey" />
              SFLIX
              </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
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
  },
  input: {
    color: "grey",
    borderWidth: 1,
    padding: 10,
    // margin: 8,
    width: 220,
    height: 50,
    borderColor: "#777",
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "#FFF",
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
  button2: {
    width: 180,
    paddingVertical: 20,
    borderRadius: 50,
    backgroundColor: "#17a2b8",
    marginTop: 20,
    padding: 20,
    flexDirection: "row",
  },
  footerSection: {
    flexDirection: "column",
    marginTop: 15,
    justifyContent: "space-evenly",
    width: "100%",
  },
  footerBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 6,
  },
});
