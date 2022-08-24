import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image, Pressable, ImageBackground,ScrollView, StyleSheet, Modal} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { Ionicons } from '@expo/vector-icons'; 
import Swiper1 from '../Swiper1';
import Swiper2 from '../Swiper2';
import Swiper3 from '../Swiper3';
import { AntDesign } from "@expo/vector-icons";
// import { AppContext } from '.../movie-stream/utils/context'
import { AppContext } from '../utils/context';
import { useContext } from 'react';

// import MovieCard from '../MovieCard';



export const SLIDER_WIDTH = Dimensions.get('window').width + 43;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const topbar = {
  width: '100%',
  backgroundColor: "#414859",
  height: 50,
  marginTop: 23,
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
    description:'Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse.',
    url: 'https://cdn.vox-cdn.com/thumbor/aIgnekvyjdARf_NVJj21EL37uT8=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23434598/DrStrange2_Payoff_1_Sht_v6_Lg.jpeg',
  },
  {
    id: 2,
    title: 'Spider-Man: Far From Home',
    description:'Peter Parker, the beloved superhero Spider-Man, faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins.',
    url: 'https://i.ytimg.com/vi/uyPCkTzhDxQ/maxresdefault.jpg',
  },
  {
    id: 3,
    title: 'Captain Marvel',
    description:'Amidst a mission, Vers, a Kree warrior, gets separated from her team and is stranded on Earth. However, her life takes an unusual turn after she teams up with Fury, a S.H.I.E.L.D. agent.',

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
    description:'Reclusive author Loretta Sage writes about exotic places in her popular adventure novels that feature a handsome cover model named Alan. While on tour promoting her new book with Alan, Loretta gets kidnapped by an eccentric billionaire who hopes she can lead him to an ancient cities lost treasure from her latest story. Determined to prove he can be a hero in real life and not just on the pages of her books, Alan sets off to rescue her.',
    url:'https://catholicnews.com/wp-content/uploads/custom/20220324T1545-MOVIE-REVIEW-THE-LOST-CITY-1523886.jpg'
  }
];

const Home = ({navigation}) => {
  const [modalOpen, setModalOpen] = useState('false')
  const [name, setName] = useState('')
  const {details, setDetails} = useContext(AppContext)

  const passDetails = (name , description)=>{
       setDetails({
           name : '',
           description:'',
       })
  }
  

const renderItem = ({item}) => {
  return (
    <View
      style={{
        // padding: 20,
        alignItems: 'center',
        backgroundColor: 'transparent',
        width:'100%',
        height:250,
        flexDirection:'row',
        justifyContent:'center',
        justifyContent:'space-between'
        
      }}>
      <ImageBackground source={{uri: item.url}} ref='' style={{width:'100%', height: '100%', borderRadius:40,flexDirection:'row', marginRight:50,}}>
        <Text onPress={() =>{
           setDetails({
            name:item.name,
            description:item.year,
            img:item.url,
            description:item.description,
           })
        setModalOpen(true)}}
        style={{marginTop:190,}}
        >
        <Ionicons name="play-circle-outline" size={50} color="#00ffff"/>
        </Text>

        <Modal visible={modalOpen} animationType='slide' style={styles.modalContainer}>
        <View style={styles.modalContent}>
           <View style={{ height:300 , width:'100%'}} >
            <ImageBackground source={{uri:details.img}} resizeMode='contain' style={{height:'100%' , width:'100%',flexDirection:'row',alignItems:'center', justifyContent:'center',}}>
            <Ionicons name="play-circle-outline" size={50} color="#00ffff"/>
            </ImageBackground>
         </View>
      <Text style={{marginVertical: 10, fontSize: 18, fontWeight: '300', color:'white'}}>
      <AntDesign name="star" size={14} color="#00ffff" />
        {details.name}
      </Text >
      <Text style={{marginVertical: 10, fontSize: 13, fontWeight: '200', color:'white'}}>
        {details.description}
      </Text>
        <Text style={styles.modalToggleClose} onPress={() => setModalOpen(false)}>
          Close
       </Text>
        </View>
        </Modal>
       

        <Text style={{fontSize: 19, fontWeight: 'bold',color:'white',marginTop:205,}}>{item.title}</Text>
      </ImageBackground>
      <Image source={{uri: item.url}} style={{width:300, height:300,marginLeft:150,zIndex:1}}/>
      
    </View>
  );
};


  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <View >

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
          <Text style={{fontSize: 16, fontWeight: 'bold',color:'white', marginLeft:17, paddingLeft:6, marginTop:12,marginLeft:10, borderBottomWidth:5, borderBottomColor:'#00ffff'}}>Trending</Text>
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
          <View style={{marginBottom:60}}>

          </View>
    
      </View>
    </ScrollView>
    </View>
  );
};

export default Home;

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
  button: {
    width: "50%",
    borderRadius: 50,
    backgroundColor: "#17a2b8",
    flexDirection: "row",
    marginLeft:0,
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
  modalToggle:{
    fontSize:15,
    backgroundColor:'#00ffff',
    borderRadius:4,
    alignItems:'center',
    textAlign:'center',
    justifyContent:'center',
  },
  modalToggleClose:{
    fontSize:17,
    backgroundColor:'#00ffff',
    borderRadius:4,
    alignItems:'center',
    textAlign:'center',
    justifyContent:'center',
    width:70,
  },
  modalContent:{
    alignItems:'center',
    textAlign:'center',
    justifyContent:'center',
    height:'100%',
    backgroundColor:'#414859',
    flex:1,
  },
});