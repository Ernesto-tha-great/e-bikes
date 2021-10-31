import React from 'react'
import { View, Text,StyleSheet, Button, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native'
import {Avatar, Title, Caption, Paragraph, Drawer,  TouchableRipple, Switch} from 'react-native-paper';
import {MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';
import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated';
import tw from 'tailwind-react-native-classnames';
import HistoryCard from '../components/HistoryCard';
import { Divider } from 'react-native-elements';
import Map from '../components/Map'

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


const OrderHistoryScreen = ({navigation}) => {
    const bs = React.useRef(null);
    const fall = new Animated.Value(1);

    const renderInner = () => (
        <View style={styles.panel}>
            {/* header */}
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <View>
                        <Text style={tw`  text-gray-500`}>Estimate arrives in</Text>
                        <Text style={tw`text-2xl font-semibold`}>2h 40m</Text>
                    </View>
                   
                    <View>
                        <MaterialCommunityIcons onPress={() => bs.current.snapTo(1)} name="dots-horizontal" size={30} color="black" />
                    </View>
            </View>

             {/* card */}
             <View style={tw`bg-yellow-300 py-4 mx-2 rounded-3xl    mt-2`}>
                <View style={tw` mx-2 border-gray-400 p-4`}>
                    <Text style={tw`text-xl font-semibold`}>Sukabunmi, Indonesia</Text>
                    <Text style={tw`text-xs text-gray-500 `}>No receipt: SCP3567487394</Text>
                </View>
                <Divider width={0.7} color="grey" inset={true} insetType="middle" orientation="horizontal"  />

                <View style={tw` mx-2 border-gray-400 p-4`}>
                    <Text style={tw`text-xl font-semibold`}>2500 USD</Text>
                    <Text style={tw`text-xs  text-gray-500 `}>Postal Fee</Text>
                </View>
                
                <Divider width={0.7} color="grey" inset={true} insetType="middle" orientation="horizontal"  />
                
                <View style={tw` mx-2 border-gray-400 p-4`}>
                    <Text style={tw`text-xl font-semibold`}>Bali, Indonesia</Text>
                    <Text style={tw`text-xs  text-gray-500 `}>Parcel, 24kg</Text>
                </View>
            </View>
            {/* scrollview */}
            <View style={tw`py-4`}>
            <Text style={tw`p-4 text-xl font-semibold`}>History</Text>
            <ScrollView style={tw`pb-4`}>
                {data.map(({image, trackingNumber, status}, index) => (
                    <HistoryCard key={index} image={image} trackingNumber={trackingNumber} status={status}  />
                ))}
            </ScrollView>
            </View>

            
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
    container: {
        flex: 1,
      
       
       
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight:"500"
    },
    row:{
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#555555',
        marginLeft: 20,
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 26,

    },
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
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
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
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },

    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,

    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action:{
        flexDirection:"row",
        marginTop:10,
        marginBottom:10,
        borderBottomWidth:1,
        borderBottomColor:"#f2f2f2",
        paddingBottom:5,
    },
    actionError:{
        flexDirection:"row",
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:"#FF0000",
        paddingBottom:5,
    },
    textInput:{
        flex:1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft:10,
        color:"#05375a",
    },
    panel:{
        padding: 20,
        backgroundColor: '#ffffff',
        paddingTop: 20,
        

    }

})


