import React from 'react'
import { View, SafeAreaView, Text} from 'react-native'
import {  AntDesign} from '@expo/vector-icons';
import Header from '../components/Header';
import tw from 'tailwind-react-native-classnames';
import ImageCard,{SLIDER_WIDTH, ITEM_WIDTH } from '../components/ImageCard';
import Carousel from 'react-native-snap-carousel';  
import LottieView from 'lottie-react-native';
const data = [
    {
      id: "123",
      title: "Get a ride",
      image: "https://cdn.pixabay.com/photo/2017/12/28/16/18/bicycle-3045580__340.jpg",
      screen: "MapScreen",
    },
    {
      id: "456",
      title: "order food",
      image: "https://cdn.pixabay.com/photo/2013/07/13/13/46/bicycle-161524_1280.png",
      screen: "EatsScreen",
    },
    {
      id: "789",
      title: "order food",
      image: "https://cdn.pixabay.com/photo/2016/11/29/03/25/bicycles-1867046__480.jpg",
      screen: "EatsScreen",
    },
    {
      id: "103",
      title: "order food",
      image: "https://cdn.pixabay.com/photo/2015/11/18/15/44/france-1049333__480.jpg",
      screen: "EatsScreen",
    },
    {
      id: "214",
      title: "order food",
      image: "https://cdn.pixabay.com/photo/2020/03/18/06/06/street-4942809__480.jpg",
      screen: "EatsScreen",
    },
    {
      id: "565",
      title: "order food",
      image: "https://cdn.pixabay.com/photo/2017/06/27/11/52/mountain-bike-2447170__480.jpg",
      screen: "EatsScreen",
    },
  ];

 
const HomeScreen = () => {
        const isCarousel = React.useRef(null)
      
    
    return (
        <View style={[tw`bg-white`,{flex: 1, }]}>
            <Header />
            <Text style={tw`bg-white text-xl font-semibold p-4 `}>Hello Good Morning!</Text>
            <View style={{marginLeft:-30, marginVertical: 8, marginBottom: 11,  }}>
                <Carousel
                    layout="default"
                    ref={isCarousel}
                    data={data}
                    renderItem={ImageCard}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    inactiveSlideShift={0}
                    useScrollView={true}
                />
             </View>


             <View style={[tw` bg-yellow-400 py-8 mt-8`,{flexDirection:"row", justifyContent:"space-between"}]}>
                 <View style={tw`left-2`}> 
                    <Text style={tw`text-xl text-gray-600`}>
                        Gotten your 
                    </Text>
                    <Text style={tw`text-xl text-gray-600`}>E-Bike yet?</Text>
                 </View>

                 <View style={[tw`bg-black rounded-3xl px-12 py-2 mr-4  `, {flexDirection:"row", }]}>
                     <View style={tw``}>
                    <Text style={tw`text-white font-semibold text-xl right-8`}>Your Orders</Text>
                    </View>

                    <View >
                    <AntDesign style={tw`left-8`} name="arrowright" size={33} color="white"  />
                    </View>
                 </View>
             </View>


                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <View style={tw``}>
                        <LottieView 
                        autoPlay
                         loop
                         speed={0.5}
                         
                         source={require('../../assets/animation/9817-delivery-on-bicycle-or-cycling.json')}
                         style={{height: 170, width: 50,  marginBottom: 30}} 
                        />
                    </View>

                    <View >
                        <Text style={ tw`text-xl text-gray-600 `}>
                            You too can join our 
                        </Text>
                        <Text style={tw`text-xl text-gray-600`}>
                        Elite squad of E-Bikers
                        </Text>
                    </View>
                </View>
        </View>
    )
}
  
export default HomeScreen
