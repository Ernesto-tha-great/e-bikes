import React from 'react'
import { View, Text, Image, TouchableOpacity  } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import {  AntDesign} from '@expo/vector-icons';


const HistoryCard = ({image, trackingNumber, status}) => {
    return (
        <View style={[tw` mb-4`,{flexDirection:"row", justifyContent:"space-between", marginHorizontal: 14, padding: 10}]}>
            <View style={[tw`bg-gray-200 p-2 rounded-full `, {marginTop: -14}]}>
                <Image
                style={{height: 50, width: 50, resizeMode:"contain"}}
                source={{uri: image}}
                 />

            </View>

            <View>
                <Text style={tw`font-semibold`}>{trackingNumber}</Text>
                <Text style={tw`text-gray-500`}>{status}</Text>
            </View>

            <View>
                <TouchableOpacity>
                <AntDesign name="right" size={20} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HistoryCard
