import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image, StyleSheet,Modal} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { AntDesign } from '@expo/vector-icons'; 
import MovieCard from './MovieCard';
import { AppContext } from '../movie-stream/utils/context'
import { useContext } from 'react';

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const data = [
  {
    id: 1,
    rating:'6.7',
    quality:'HD',
    year:'2020',
    name: 'Locke & Key',
    url: 'https://flxt.tmsimg.com/assets/p17699282_b_v13_ab.jpg',
  },
  {
    id: 2,
    rating:'7.1',
    quality:'HD',
    year:'2022',
    name: 'Uncoupled',
    url: 'https://occ.a.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZi2hYhToTXiCVQl_bUFVykbNPLsL1WA9WP8RZ0f1i0M1mP6qe8HrN7XXvQj9NGlnerVfLzKI18RKaCT9OpJb-dmm5L9JKrK5DBmnjb97DI4HWjDkDf09SkWZlcF4tmU7xnqmg.jpg?r=f07',
  },
  {
    id: 3,
    rating:'8.3',
    quality:'HD',
    year:'2022',
    name: 'The Sandman',
    url: 'https://www.heavenofhorror.com/wp-content/uploads/2022/08/the-sandman-netflix-review.jpg',
  },
  {
    id: 4,
    rating:'5.3',
    quality:'HD',
    name: 'Country Queen',
    url: 'https://www.kbc.co.ke/wp-content/uploads/2022/06/FVca5HiXwAAI6JI-960x960.jpe',
    year:'2022',
  },
  {
    id: 5,
    rating:'7.5',
    quality:'HD',
    name: 'First Kill',
    url: 'https://then24.com/wp-content/uploads/2022/08/netflix-vuelve-liar-abandona-otra-serie-primera-temporada-first-kill-no-continuara-2776647.jpg',
    year:'2022',
  },
  {
    id: 6,
    rating:'5.8',
    quality:'HD',
    name: 'Money Heist',
    url: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/MONEY-HEIST-SEASON-5.jpg',
    year:'2015',
  },
  {
    id: 7,
    rating:'8.6',
    quality:'HD',
    name: 'Di4ries',
    url: 'https://flxt.tmsimg.com/assets/p22269942_b_v13_ab.jpg',
    year:'2022',
  },
  {
    id: 8,
    rating:'4.3',
    quality:'HD',
    name: 'The Terminal List',
    url: 'https://upload.wikimedia.org/wikipedia/en/e/ed/The_Terminal_List.jpeg',
    year:'2022',
  },
  {
    id:9,
    rating:'6.4',
    quality:'HD',
    name: 'Paper Girls',
    url: 'https://m.media-amazon.com/images/M/MV5BODE5ZjMwZmQtYTcxZS00MzVjLWEzOTQtMzBhMTFkODQ3MGVmXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg',
    year:'2022',
  },
  {
    id: 10,
    rating:'3.7',
    quality:'HD',
    name: 'Dota',
    url: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Dota_Dragons_Blood_poster.jpg/250px-Dota_Dragons_Blood_poster.jpg',
    year:'2021',
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
      <Image source={{uri: item.url}} style={{width: 180, height: 180,}} />

       {/* this is a moda */}
       <Modal visible={modalOpen} animationType='slide' style={styles.modalContainer}>
        <View style={styles.modalContent}>

      <Text style={{marginVertical: 10, fontSize: 13, fontWeight: 'bold', color:'white'}}>
        {details.name}
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
            description:item.year
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