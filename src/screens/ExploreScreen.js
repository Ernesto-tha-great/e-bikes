import React from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import Header from '../components/Header'
import tw from 'tailwind-react-native-classnames';
import {  AntDesign} from '@expo/vector-icons';
import HistoryCard from '../components/HistoryCard';

const data = [
    {
        image: "https://cdn.pixabay.com/photo/2016/03/31/18/01/bow-1294066__480.png",
        trackingNumber: "SCP9374826473",
        status: "In the process",

    },
    {
        image: "https://cdn.pixabay.com/photo/2018/04/18/20/07/delivery-truck-3331471_1280.png",
        trackingNumber: "SCP9374826480",
        status: "In delivery",

    },
    {
        image: "https://cdn.pixabay.com/photo/2019/04/04/11/30/delivery-4102583_1280.jpg",
        trackingNumber: "SCP93748264444",
        status: "Delivered",

    },
    {
        image: "https://cdn.pixabay.com/photo/2015/12/11/14/17/christmas-shopping-1088186__480.jpg",
        trackingNumber: "SCP9374826987",
        status: "In cart",

    },
    {
        image: "https://cdn.pixabay.com/photo/2018/07/10/22/26/ecommerce-3529837__340.jpg",
        trackingNumber: "SCP9374826434",
        status: "Awaiting Payment",

    },

]

const ExploreScreen = ({navigation}) => {
    return (
        <View style={[tw`bg-white`,{flex:1}]}>
            {/* header */}
              <Header />
              <Text style={tw`bg-white text-xl font-semibold p-2 `}>Hello Good Morning!</Text>
                {/* card */}
                <View style={[tw`bg-yellow-400 py-6 pb-10 mx-6 rounded-2xl`,{alignItems:"center"}]}>
                    <View style={tw`py-2 pb-6`}>
                        <Text style={tw`text-2xl font-semibold`}>Track Your Package</Text>
                        <Text style={tw`text-sm text-gray-500`}>Enter the receipt number that has </Text>
                        <Text style={tw`text-sm text-gray-500 text-center`}>been given by the officer</Text>
                    </View>

                    <TextInput placeholder="Enter the recipt number" style={[tw`border rounded-3xl pl-4`,{ height: 60, width: 250}]}  />
                    <TouchableOpacity activeOpacity={0.7} style={ { flexDirection:"row", alignItems:"center", margin: 10, justifyContent:"space-between", backgroundColor:"black", paddingVertical:11, paddingHorizontal: 66, borderRadius: 30}}>
                        
                        <Text style={tw`text-white text-xl font-semibold`}>Track Now</Text>
        
                        <AntDesign style={tw`left-12`} name="arrowright" size={40} color="white" />
                        
                    </TouchableOpacity>
                
                </View>

                {/* tracking history */}
                <View style={tw`p-4 `}>
                <Text style={tw`text-xl font-semibold`}>Tracking History</Text>
                </View>
                <View>
                    <ScrollView>
                        {data.map(({image, trackingNumber, status}, index) => (
                            <HistoryCard key={index} image={image} trackingNumber={trackingNumber} status={status} />
                        ))}
                    </ScrollView>
                </View>
        </View>
    )
}

export default ExploreScreen
