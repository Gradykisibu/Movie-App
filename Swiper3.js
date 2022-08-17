import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { AntDesign } from '@expo/vector-icons'; 


export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const data = [
  {
    id: 1,
    rating:'6.7',
    quality:'HD',
    year:'2022',
    name: 'Black Adam',
    url: 'https://lyricsvan.com/wp-content/uploads/2022/02/Black-adam-Shazam-and-superman-all-three-in-their-suits-and-powers.webp',
  },
  {
    id: 2,
    rating:'7.1',
    quality:'HD',
    year:'2022',
    name: 'Black Panther II',
    url: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Black_Panther_Wakanda_Forever_poster.jpg/220px-Black_Panther_Wakanda_Forever_poster.jpg',
  },
  {
    id: 3,
    rating:'8.3',
    quality:'HD',
    year:'2022',
    name: 'The Invitation',
    url: 'https://m.media-amazon.com/images/M/MV5BYzc2ZTdmYzUtODdkMS00NWE5LTk0NzAtMTRiZDkzODBlYTM4XkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_QL75_UY281_CR18,0,190,281_.jpg',
  },
  {
    id: 4,
    rating:'5.3',
    quality:'HD',
    name: 'Avater II',
    url: 'https://www.deeperblue.com/wp-content/uploads/2017/12/Avatar-2-What-We-Know.jpg',
    year:'2022',
  },
  {
    id: 5,
    rating:'7.5',
    quality:'HD',
    name: 'The Marvels',
    url: 'https://i.ytimg.com/vi/n0JFEZmawpM/maxresdefault.jpg',
    year:'2022',
  },
  {
    id: 6,
    rating:'5.8',
    quality:'HD',
    name: 'Halloween Kills',
    url: 'https://m.media-amazon.com/images/M/MV5BYzY0Nzk1OTEtMzY3Ni00Yzc3LWI4N2MtOTljYjJjYWVkY2YyXkEyXkFqcGdeQXVyMTMwMDEyODM0._V1_.jpg',
    year:'2022',
  },
  {
    id: 7,
    rating:'8.6',
    quality:'HD',
    name: 'Aquamen II',
    url: 'https://www.denofgeek.com/wp-content/uploads/2021/08/aquaman-2-jason-momoa.jpg?resize=768%2C432',
    year:'2022',
  },
  {
    id: 8,
    rating:'4.3',
    quality:'HD',
    name: 'Ant-Men and the Wasp',
    url: 'https://www.gamelivestory.com/images/article/first-ant-man-and-the-wasp-quantumania-poster-reveals-kangs-new-look-main.webp',
    year:'2022',
  },
  {
    id:9,
    rating:'6.4',
    quality:'HD',
    name: 'The Flash',
    url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/56c72e90-7908-4970-8e1b-b5b7098f4fda/dexor9y-0932514b-25c2-4b52-a1b5-53dd17cb0ab2.png/v1/fill/w_1280,h_1811,q_80,strp/concept__fan__poster_for_the_flash___2022_by_pyramid3_dexor9y-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxMSIsInBhdGgiOiJcL2ZcLzU2YzcyZTkwLTc5MDgtNDk3MC04ZTFiLWI1YjcwOThmNGZkYVwvZGV4b3I5eS0wOTMyNTE0Yi0yNWMyLTRiNTItYTFiNS01M2RkMTdjYjBhYjIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HB-8MI2JTe85KMoRWsuj5hsgieUvghJTxfwYlv_wtlM',
    year:'2022',
  },
  {
    id: 10,
    rating:'3.7',
    quality:'HD',
    name: 'Mission Impossible',
    url: 'https://i.ytimg.com/vi/2m1drlOZSDw/maxresdefault.jpg',
    year:'2022',
  },
 
];
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
      <Image source={{uri: item.url}} style={{width: 178, height: 178,}} />

      <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
      {/* <Text style={{color:'white',opacity:0.5,}}>
        <Text>
        <AntDesign name="star" size={14} color="#00ffff" />
          {item.rating}</Text>
      </Text> */}
      {/* <Text style={{color:'white',opacity:0.5,}}>
        <Text>{item.quality}</Text>
      </Text> */}
      <Text style={{color:'white',opacity:0.5,}}>
        <Text>{item.year}</Text>
      </Text>
      </View>
      <Text style={{marginVertical: 10, fontSize: 13, fontWeight: 'bold', color:'white'}}>
        {item.name}
      </Text>
       <Text style={{ color:'black', backgroundColor:'#00ffff', borderRadius:5}}>
       COMING SOON
       </Text>
      </View>

      
    </View>
  );
};

const Swiper3 = () => {
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

export default Swiper3;