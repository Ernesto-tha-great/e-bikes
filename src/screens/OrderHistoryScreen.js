import React from 'react'
import { View, Text,StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import {MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';
import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated';
import tw from 'tailwind-react-native-classnames';
import HistoryCard from '../components/HistoryCard';
import Map from '../components/Map'
import DummyData from "../constants/DummyData"



const OrderHistoryScreen = ({navigation}) => {
    const bs = React.useRef(null);
    const fall = new Animated.Value(1);

    const renderInner = () => (
        <View style={styles.panel}>
            {/* header */}
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <View>
                        <Text style={tw`text-gray-500`}>Estimate arrives in</Text>
                        <Text style={tw`text-2xl font-semibold`}>2h 40m</Text>
                    </View>
                   
                    <View>
                        <MaterialCommunityIcons onPress={() => bs.current.snapTo(1)} name="dots-horizontal" size={30} color="black" />
                    </View>
            </View>

             {/* card */}
             <View style={tw`bg-yellow-300 py-4 mx-2 rounded-3xl   mt-2`}>
                <View style={tw` mx-2 border-gray-400 border-b p-4`}>
                    <Text style={tw`text-xl font-semibold`}>Sukabunmi, Indonesia</Text>
                    <Text style={tw`text-xs text-gray-500 `}>No receipt: SCP3567487394</Text>
                </View>
               

                <View style={tw` mx-2 border-gray-400  border-b p-4`}>
                    <Text style={tw`text-xl font-semibold`}>2500 USD</Text>
                    <Text style={tw`text-xs  text-gray-500 `}>Postal Fee</Text>
                </View>
                
                
                
                <View style={tw` mx-2 border-gray-400 p-4`}>
                    <Text style={tw`text-xl font-semibold`}>Bali, Indonesia</Text>
                    <Text style={tw`text-xs  text-gray-500 `}>Parcel, 24kg</Text>
                </View>
            </View>

            {/* scrollview */}
            <Text style={tw`p-4 text-xl font-semibold shadow`}>History</Text>
            
            <ScrollView style={tw` py-4 `}>
                {DummyData.data2.map(({image, trackingNumber, status}, index) => (
                    <HistoryCard key={index} image={image} trackingNumber={trackingNumber} status={status}  />
                ))}
            </ScrollView>
  

            
        </View>
    );

    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle} />
            </View>
        </View>
    )
    return (
        <View style={{position:"relative"}}>
        <BottomSheet 
        ref={bs}
        snapPoints={[550, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={0}
        callbackNode={fall}
        enabledGestureInteraction={true}
        
    />
    <View style={{position:"absolute", zIndex: 50, }}>

        <View style={{flexDirection:"row",  top: 50, alignItems:"center", justifyContent:"space-between"}}>
        <AntDesign onPress={() => navigation.navigate("Explore")} style={{left:8}} name="left" size={30} color="white" />
            <Text style={tw`text-white text-lg font-semibold`}>Tracking Details</Text>
            
        </View>
            <TouchableOpacity onPress={() => bs.current.snapTo(0)} activeOpacity={0.7} style={[tw`rounded-full px-4 py-3 `,{ backgroundColor: "yellow",  top: 100, left: 60  }]}>
            <View style={tw`border px-10 py-2 rounded-full`}> 
                <Text style={tw`text-lg font-semibold`}>SCPD657899008</Text>
            </View>
            </TouchableOpacity>
    </View>
   
       <Map />
        
        </View>
    )
}

export default OrderHistoryScreen

const styles = StyleSheet.create({
    header:{
        backgroundColor:"white",
        shadowColor:"#333333",
        shadowOffset:{width:-1, height:-3},
        shadowRadius:2,
        shadowOpacity:0.4,
        paddingTop:20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,

    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#DBE2E9',
        marginBottom: 10,
    },
    panel:{
        padding: 20,
        backgroundColor: '#ffffff',
        paddingTop: 20,
        

    }

})


