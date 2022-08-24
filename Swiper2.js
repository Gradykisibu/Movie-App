import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image, StyleSheet,Modal,ImageBackground} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { AntDesign } from '@expo/vector-icons'; 
import MovieCard from './MovieCard';
import { AppContext } from '../movie-stream/utils/context'
import { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons'; 


export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const data = [
  {
    id: 1,
    rating:'6.7',
    quality:'HD',
    year:'2020',
    name: 'Locke & Key',
    url: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/10/locke-and-key.jpg',
    description:'Following their fathers murder, three siblings move into a house filled with reality-bending keys; from the comics by Joe Hill and Gabriel Rodriguez.',
  },
  {
    id: 2,
    rating:'7.1',
    quality:'HD',
    year:'2022',
    name: 'Uncoupled',
    url: 'https://www.streamingdigitally.com/wp-content/uploads/2022/07/Uncoupled.webp',
    description:'A man has had his life turned upside down after his partner walks out on him after 17 years.',

  },
  {
    id: 3,
    rating:'8.3',
    quality:'HD',
    year:'2022',
    name: 'The Sandman',
    url: 'https://www.heavenofhorror.com/wp-content/uploads/2022/08/the-sandman-netflix-review.jpg',
    description:'When the Sandman, aka Dream, the cosmic being who controls all dreams, is captured and held prisoner for more than a century, he must journey across different worlds and timelines to fix the chaos his absence has caused.',

  },
  {
    id: 4,
    rating:'5.3',
    quality:'HD',
    name: 'Country Queen',
    url: 'https://occ-0-32-37.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTGeRuYNcxj4f_LjSTYIw1HAg3mc7GubI3W0WjhK9TjQjNLfANa-Lbj7KCj0kEIub5blUq69w21EprjoSoGvewfvrVnxHPeONB8rKyBi17VngvtDgZRh2kNxEcHh-fph15HhYQ.jpg?r=026',
    year:'2022',
    description:'After 10 years, a Nairobi event planner returns to her village, where she confronts her past and a mining company that threatens to destroy her home.',

  },
  {
    id: 5,
    rating:'7.5',
    quality:'HD',
    name: 'First Kill',
    url: 'https://flxt.tmsimg.com/assets/p22186899_b_h8_aa.jpg',
    year:'2022',
    description:'Falling in love is tricky for teens Juliette and Calliope because ones a vampire and the others a vampire hunter -- and both are ready to make their first kill.',

  },
  {
    id: 6,
    rating:'5.8',
    quality:'HD',
    name: 'Money Heist',
    url: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/MONEY-HEIST-SEASON-5.jpg',
    year:'2015',
    description:'Thieves overtake the mint of a unified Korea, trapping hostages inside; the police must stop the thieves as well as the shadowy mastermind behind the heist.',
  },
  {
    id: 7,
    rating:'8.6',
    quality:'HD',
    name: 'Di4ries',
    url: 'https://occ.a.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZ1D55Qg2kRrEck5rjT8vSP2n8HBf1-iP6gPLjhcxMFIWOUdnOvC9rHNJizFeSWwqdCQqwHVAAQIeZgKT8ktWhOn0cqYNIqR2-jF.jpg?r=fff',
    year:'2022',
    description:'At the Galileo Galilei middle school, days pass amidst a thousand surprises and events, first crushes, first kisses, beautiful friendships and even fights between rivals.',

  },
  {
    id: 8,
    rating:'4.3',
    quality:'HD',
    name: 'The Terminal List',
    url: 'https://sm.ign.com/ign_za/review/t/the-termin/the-terminal-list-limited-series-review_rbcp.jpg',
    year:'2022',
    description:'James Reece returns home after his entire platoon of Navy SEALs is ambushed, only to discover new dark forces working against him and endangering the ones he loves.',

  },
  {
    id:9,
    rating:'6.4',
    quality:'HD',
    name: 'Paper Girls',
    url: 'https://prd-rteditorial.s3.us-west-2.amazonaws.com/wp-content/uploads/2022/07/28183529/paper-girls-key-art-700x380-1.jpg',
    year:'2022',
    description:'',

  },
  {
    id: 10,
    rating:'3.7',
    quality:'HD',
    name: 'Dota',
    url: 'https://www.rotoscopers.com/wp-content/uploads/2021/03/AAAABe8in7VbJ3banhIpwChLQfXefd3uwazbRLlUsZZFeghf39dtL-Io-Z3rmx-T2Q9UVECfKRygfVHsUpzHPQE1JO6ij5rz.jpg',
    year:'2021',
    description:'In the early morning hours after Halloween 1988, four paper girls are out on their delivery route when they become caught in the crossfire between warring time-travelers, changing the course of their lives forever.',

  },
 
];

const Swiper2 = () => {

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
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}>
      <View style={{borderWidth:0.4, alignItems:'center',justifyContent:'center', borderColor:'#00ffff'}}>
      <Image source={{uri: item.url}} resizeMode='cover' style={{width: 180, height: 180,}} />

       {/* this is a moda */}
       <Modal visible={modalOpen} animationType='slide' style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <View style={{ height:300 , width:'100%'}} >
        <ImageBackground source={{uri:details.img}} resizeMode='contain' style={{height:'100%' , width:'100%',flexDirection:'row',alignItems:'center', justifyContent:'center',}}>
            <Ionicons name="play-circle-outline" size={60} color="#00ffff" />
            </ImageBackground>
         </View>
      <Text style={{marginVertical: 10, fontSize: 18, fontWeight: '300', color:'white'}}>
        {details.name}
      </Text >
      <Text style={{marginVertical: 10, fontSize: 13, fontWeight: '200', color:'white'}}>
        {details.description}
      </Text >

        <Text style={styles.modalToggleClose} onPress={() => setModalOpen(false)}>
          Close
       </Text>
       
        </View>
      </Modal>

      <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
      <Text style={{color:'white',opacity:0.5,}}>
        <Text>
        <AntDesign name="star" size={14} color="#00ffff" />
          {item.rating}</Text>
      </Text>
      <Text style={{color:'white',opacity:0.5,}}>
        <Text>{item.quality}</Text>
      </Text>
      <Text style={{color:'white',opacity:0.5,}}>
        <Text>{item.year}</Text>
      </Text>
      </View>
      <Text style={{marginVertical: 10, fontSize: 13, fontWeight: 'bold', color:'white'}}>
        {item.name}
      </Text>
      
      <Text style={styles.modalToggle} onPress={() =>{
           setDetails({
            name:item.name,
            description:item.year,
            description:item.description,
            img:item.url
           })
        setModalOpen(true)}}>
          WATCH NOW
       </Text>
      </View>

      
    </View>
  );
};


  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <View style={{
      alignItems: 'center'}}>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
      />
    </View>
  );
};

export default Swiper2;

const styles = StyleSheet.create({
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
  // modalContainer:{
  //   backgroundColor:'red',
  // }
})