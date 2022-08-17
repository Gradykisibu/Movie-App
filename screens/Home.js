import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image, Pressable, ImageBackground,ScrollView, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { Ionicons } from '@expo/vector-icons'; 
import Swiper1 from '../Swiper1';
import Swiper2 from '../Swiper2';
import Swiper3 from '../Swiper3';
import { AntDesign } from "@expo/vector-icons";

// import MovieCard from '../MovieCard';



export const SLIDER_WIDTH = Dimensions.get('window').width + 43;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const topbar = {
  width: '105%',
  backgroundColor: "#414859",
  height: 50,
  marginTop: -45,
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

const footerText = {
  color: "white",
  opacity: 0.6,
  fontSize:11,
};

const data = [
  {
    id: 1,
    title: 'Doctor Strange II',
    description:'hello world',
    url: 'https://cdn.vox-cdn.com/thumbor/aIgnekvyjdARf_NVJj21EL37uT8=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23434598/DrStrange2_Payoff_1_Sht_v6_Lg.jpeg',
  },
  {
    id: 2,
    title: 'Spider-Man: Far From Home',
    description:'hello world',
    url: 'https://i.ytimg.com/vi/uyPCkTzhDxQ/maxresdefault.jpg',
  },
  {
    id: 3,
    title: 'Captain Marvel',
    description:'hello world',

    url: 'https://i0.wp.com/thegameofnerds.com/wp-content/uploads/2019/03/captain-marvel-giveaway.jpg?fit=767%2C431&ssl=1',
  },
  {
    id:4,
    title:'Morbius',
    description:'hello world',
    url:'https://thestreamable.com/media/pages/news/when-will-morbius-be-available-to-stream-will-marvel-movie-be-on-disney-plus-netflix/a2bef8c51e-1655821810/morbius-banner-1536x864-crop.jpg'

  },
  {
    id:5,
    title:'The Lost City',
    description:'',
    url:'https://catholicnews.com/wp-content/uploads/custom/20220324T1545-MOVIE-REVIEW-THE-LOST-CITY-1523886.jpg'
  }
];


const renderItem = ({item}) => {
  return (
    <View
      style={{
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}>
      <ImageBackground source={{uri: item.url}} style={{width: 270, height: 200, borderRadius:40,flexDirection:'row', marginRight:50, marginTop:-15}}>
        <Ionicons name="play-circle-outline" size={50} color="#00ffff" style={{marginTop:140,}}/>
        <Text style={{fontSize: 16, fontWeight: 'bold',color:'white',marginTop:155,}}>{item.title}</Text>
      </ImageBackground>
      <Image source={{uri: item.url}} style={{width:90, height:70,marginLeft:150, marginTop:-25}}/>
      
    </View>
  );
};

const Home = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <View style={{paddingTop: 70,alignItems: 'center', backgroundColor:'#1E2129'}}>

     

         <Pressable onPress={()=>{navigation.navigate('Main')}}>
          <View style={topbar}>
            <Image source={require("../assets/logo2.png")} style={logo} />
            <Text style={{color:'white', zIndex:1,marginLeft:'65%',}}>
              GLIMEO
            </Text>
          </View>
         </Pressable>

   <ScrollView>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}/>
      
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: '#00ffff',
          }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: 'black',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}/>

        <Pressable  onPress={()=>{navigation.navigate('Movie')}} style={styles.button}>
            <Text
              style={{color: "white",fontWeight: "bold",paddingTop: 2,fontSize: 16,}}>
                 GO TO MOVIES
            </Text>
          </Pressable>

        <View>
          <Text style={{fontSize: 16, fontWeight: 'bold',color:'white', marginLeft:17, paddingLeft:6, marginTop:12,marginLeft:110}}>Trending</Text>
        </View>

        <View>
          <Text style={{fontSize: 16, fontWeight: 'bold',color:'white', marginLeft:17, borderLeftColor:'#00ffff',borderLeftWidth:3, paddingLeft:6, marginTop:12}}>Latest Movies</Text>
          <Text>
            <Swiper1/>
          </Text>
        </View>

        <View>
          <Text style={{fontSize: 16, fontWeight: 'bold',color:'white', marginLeft:17, borderLeftColor:'#00ffff',borderLeftWidth:3, paddingLeft:6, marginTop:12}}>Latest Tv Shows</Text>
          <Text>
            <Swiper2/>
          </Text>
        </View>

        <View>
          <Text style={{fontSize: 16, fontWeight: 'bold',color:'white', marginLeft:17, borderLeftColor:'#00ffff',borderLeftWidth:3, paddingLeft:6, marginTop:12}}>Coming Soon</Text>
          <Text>
            <Swiper3/>
          </Text>
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

          <View style={{marginTop:15,alignItems:'center',justifyContent:'center', paddingRight:8}}>
            <Text style={{color:'white', opacity:0.6, alignItems:'center', justifyContent:'center',fontSize:11}}>
              SFlix is a Free Movies streaming site with zero ads. We let you
              watch movies online 
            </Text>
            <Text style={{color:'white', opacity:0.6,marginTop:20,}}>
            <AntDesign name="copyright" size={12} color="lightgrey" />
              SFLIX
              </Text>
          </View>


        <View style={{marginBottom:10}}>
         </View>
    </ScrollView>
    
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
    width: "50%",
    borderRadius: 50,
    backgroundColor: "#17a2b8",
    flexDirection: "row",
    marginLeft:60,
    alignItems:'center',
    justifyContent:'center'
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