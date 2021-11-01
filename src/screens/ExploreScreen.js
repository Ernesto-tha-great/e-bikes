import React from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import Header from '../components/Header'
import tw from 'tailwind-react-native-classnames';
import {  AntDesign} from '@expo/vector-icons';
import HistoryCard from '../components/HistoryCard';
import DummyData from "../constants/DummyData"

const ExploreScreen = ({navigation}) => {
    return (
        <View style={tw`bg-white flex-1`}>
            {/* header */}
              <Header />
              <Text style={tw`bg-white text-xl font-semibold p-2 shadow mb-2 `}>Hello Good Morning!</Text>
                {/* card */}

                <View style={[tw`bg-yellow-400 py-6 pb-10 mx-6 rounded-3xl`,{alignItems:"center"}]}>
                    <View style={tw`py-2 pb-6`}>
                        <Text style={tw`text-2xl font-semibold`}>Track Your Package</Text>
                        <Text style={tw`text-sm text-gray-500`}>Enter the receipt number that has </Text>
                        <Text style={tw`text-sm text-gray-500 text-center`}>been given by the officer</Text>
                    </View>

                    {/* text input and button */}
                    <View style={{alignItems:"center"}}>
                     <TextInput placeholder="Enter the recipt number" style={[tw`border rounded-full pl-4 `,{ height: 55, width: 260}]}  />

                     <View style={tw`bg-black mt-3 px-16 py-3 rounded-full items-center`}>
                        <TouchableOpacity onPress={()=>navigation.navigate('OrderHistory')} activeOpacity={0.7} style={{ flexDirection:"row"}}>
                        <Text style={tw`text-white text-center right-12 mt-1 text-xl font-semibold`}>Track Now</Text>     
                        <AntDesign style={tw`left-12 `} name="arrowright" size={35} color="white" />   
                        </TouchableOpacity>
                    </View>

                  </View>

                </View>

                {/* tracking history */}
                <View style={tw`p-4 `}>
                <Text style={tw`text-xl font-semibold `}>Tracking History</Text>
                </View>
                    <ScrollView>
                        {DummyData.data1.map(({image, trackingNumber, status}, index) => (
                            <HistoryCard key={index} image={image} trackingNumber={trackingNumber} status={status} />
                        ))}
                    </ScrollView>     
        </View>
    )
}

export default ExploreScreen
