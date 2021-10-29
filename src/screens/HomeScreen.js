import React from 'react'
import { View, SafeAreaView, Text} from 'react-native'
import { FontAwesome, Entypo, AntDesign, MaterialIcons,  Foundation} from '@expo/vector-icons';
import Header from '../components/Header';
import tw from 'tailwind-react-native-classnames';
import ImageCard from '../components/ImageCard';

const HomeScreen = () => {
    return (
        <View style={[tw`bg-gray-100`,{flex: 1, }]}>
            <Header />
            <Text style={tw`bg-white text-xl font-semibold p-4`}>Hello Good Morning!</Text>
            <ImageCard />
        </View>
    )
}

export default HomeScreen
