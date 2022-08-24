import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image, Modal, StyleSheet, ImageBackground} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import MovieCard from './MovieCard';
import { AppContext } from '../movie-stream/utils/context'
import { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons'; 

// import VideoPlayer from 'react-native-video-player';
// import YoutubeIframe from 'react-native-youtube-iframe';

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const data = [
  {
    id: 1,
    rating:'6.7',
    quality:'HD',
    year:'2022',
    name: 'Day Shift',
    url: 'https://occ-0-58-990.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABWyssWH42yPoRSGMPdesYpn0r2ybzOLJ68HxzTZ5R5P67YPA6M1ozPGBP8KYA0NkegmZEleQbgFTfCA5SS4DHRsdR9cnaDQ6tUb8.jpg?r=7bb',
    video:'dayshift.mp4',
    description:'A hardworking dad out to provide for his daughter uses a boring pool-cleaning job as a front for his real gig: hunting and killing vampires.'
  },
  {
    id: 2,
    rating:'7.1',
    quality:'HD',
    year:'2022',
    name: 'The Gray Man',
    url: 'https://techcrunch.com/wp-content/uploads/2022/07/a6IVnXx70uZqmL31sbrUuQH7d4U.jpg',
    description:'When the CIAs top asset -- his identity known to no one -- uncovers agency secrets, he triggers a global hunt by assassins set loose by his ex-colleague.',
  },
  {
    id: 3,
    rating:'8.3',
    quality:'HD',
    year:'2019',
    name: 'Spies in Disguise',
    url: 'https://see.news/wp-content/uploads/2020/01/nGklNSmiCcDHKGeoAYvv7zINTO7.jpg',
    description:'Lance Sterling, a secret agent, finds himself transformed into a pigeon. He then sets out with his associate Walter to stop a villain who is using Sterlings disguise to carry out a dangerous plan.',

  },
  {
    id: 4,
    rating:'5.3',
    quality:'HD',
    name: 'Rumble',
    url: 'https://img-www.tf-cdn.com/movie/2/rumble-2021.jpeg',
    year:'2019',
    description:'Winnie sets out to find a monster to represent her town in the sport of monster wrestling. She comes across Steve, a red reptilian amateur monster wrestler, who loves dancing.',

  },
  {
    id: 5,
    rating:'7.5',
    quality:'HD',
    name: 'Avater The Last Airbender',
    url: 'https://cdn.gizmostory.com/wp-content/uploads/2022/03/The-Last-Airbender-WESTSERIESMOVIES.jpg',
    year:'2010',
    description:'Aang, a 12-year-old boy, must put his childhood aside to impede chaos that the Fire Nation is creating. He embarks on a quest to restore harmony in the nations of Water, Earth and Air.',

  },
  {
    id: 6,
    rating:'5.8',
    quality:'HD',
    name: 'Uncharted',
    url: 'https://static.bangkokpost.com/media/content/20220427/c1_2301274.jpg',
    year:'2022',
    description:'Victor Sullivan recruits Nathan Drake to help him find the lost fortune of Ferdinand Magellan. However, they face competition from Santiago Moncada, who believes that the treasure belongs to him.',

  },
  {
    id: 7,
    rating:'8.6',
    quality:'HD',
    name: 'Venom Let The Be Carnage',
    url: 'https://www.godisageek.com/wp-content/uploads/Venom-Let-there-be-carnage1.jpg',
    year:'2022',
    description:'Eddie Brock tries to revive his failing career by interviewing a serial killer, Cletus Kasady, who is on death row. When Carnage gains control over Cletuss body, he escapes from the prison.',

  },
  {
    id: 8,
    rating:'4.3',
    quality:'HD',
    name: 'Black Crab',
    url: 'https://i0.wp.com/spikytv.com/wp-content/uploads/2022/03/Black-Crab-2022-Movie-Review-And-Ending-Explained.jpg?fit=1920%2C1080&ssl=1',
    year:'2022',
    description:'In a post-apocalyptic world, six soldiers on a covert mission must transport a mysterious package across a frozen archipelago.',

  },
  {
    id:9,
    rating:'6.4',
    quality:'HD',
    name: 'Eternals',
    url: 'https://i.ytimg.com/vi/MKWXuj3ZYf0/maxresdefault.jpg',
    year:'2022',
    description:'The Eternals, a race of immortal beings with superhuman powers who have secretly lived on Earth for thousands of years, reunite to battle the evil Deviants.',

  },
  {
    id: 10,
    rating:'3.7',
    quality:'HD',
    name: 'Mother / Android',
    url: 'https://www.avforums.com/styles/avf/editorial/block//ccc769eac65661a4d2833a6b621fa576_3x3.jpg',
    year:'2021',
    description:'Georgia and Sam flee their country as the world battles artificial intelligence.',

  },
 
];
const Swiper1 = () => {

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
      <Image  source={{uri: item.url}} resizeMode='cover' style={{width: 180, height: 180,}} />

        {/* this is a moda */}
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
      </Text >
      
       <Text style={styles.modalToggle} onPress={() =>{
           setDetails({
            name:item.name,
            description:item.year,
            img:item.url,
            description:item.description,
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

export default Swiper1;

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