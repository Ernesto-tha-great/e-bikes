import React from 'react'
import { View, Text, TextInput} from 'react-native'
import Header from '../components/Header'
import tw from 'tailwind-react-native-classnames';
import {  AntDesign} from '@expo/vector-icons';

const ExploreScreen = () => {
    return (
        <View style={[tw`bg-white`,{flex:1}]}>
              <Header />
              <Text style={tw`bg-white text-xl font-semibold p-2 `}>Hello Good Morning!</Text>

                <View style={[tw`bg-yellow-400 py-6 pb-10 mx-6 rounded-2xl`,{alignItems:"center"}]}>
                    <View style={tw`py-2 pb-6`}>
                        <Text style={tw`text-2xl font-semibold`}>Track Your Package</Text>
                        <Text style={tw`text-sm text-gray-500`}>Enter the receipt number that has </Text>
                        <Text style={tw`text-sm text-gray-500 text-center`}>been given by the officer</Text>
                    </View>

                    <TextInput placeholder="Enter the recipt number" style={[tw`border rounded-3xl pl-4`,{ height: 60, width: 250}]}  />
                    <View style={ { flexDirection:"row", alignItems:"center", margin: 10, justifyContent:"space-between", backgroundColor:"black", paddingVertical:11, paddingHorizontal: 66, borderRadius: 30}}>
                        
                        <Text style={tw`text-white text-xl font-semibold`}>Track Now</Text>
        
                        <AntDesign style={tw`left-12`} name="arrowright" size={40} color="white" />
                        
                    </View>
                
                </View>
        </View>
    )
}

export default ExploreScreen
