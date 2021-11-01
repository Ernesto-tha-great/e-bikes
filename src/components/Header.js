import React from 'react'
import { View} from 'react-native'
import { Ionicons} from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';
import {Avatar} from 'react-native-paper';



const Header = () => {
    return (
      <View style={{flexDirection:"row", justifyContent:"space-between", paddingVertical:10, paddingHorizontal: 10, marginTop: 40, alignItems:"center", backgroundColor:"white"}}>
            <View>
                <Avatar.Image
                    source={{uri:"https://cdn.pixabay.com/photo/2019/06/25/11/11/mountain-bike-4297972__340.jpg"}}
                    size={70}
                />      
            </View>

            <View style={tw`bg-gray-100 rounded-2xl mt-2`}>
               <Ionicons style={tw` p-4`} name="notifications-outline" size={30} />
            </View>
        </View>
        
    )}

export default Header
