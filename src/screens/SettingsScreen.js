import React from 'react'
import { View, Text,StyleSheet, SafeAreaView} from 'react-native'
import {Avatar, Title, Caption,   TouchableRipple} from 'react-native-paper';
import {MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';



const SettingsScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.userInfoSection}>
                <View style={{flexDirection:"row", marginTop: 15}}>
                    <Avatar.Image
                        source={{uri:"https://cdn.pixabay.com/photo/2019/06/25/11/11/mountain-bike-4297972__340.jpg"}}
                        size={80}
                    />
                <View style={{marginLeft: 20,marginTop: 15 }}> 
                    <Title style={styles.title, { marginBottom: 5}}>Ernest Nnamdi</Title>
                    <Caption style={styles.caption}>@ernestnnamdi</Caption>
                </View>
                </View>
            </View>

            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <MaterialCommunityIcons name="map-marker-radius" color="#777777" size={20} />
                    <Text style={{color:"#777777", marginLeft:20}}>Lagos, Nigeria.</Text>
                 </View>

                 <View style={styles.row}>
                    <MaterialCommunityIcons name="phone" color="#777777" size={20} />
                    <Text style={{color:"#777777", marginLeft:20}}>+2349151819207</Text>
                 </View>

                 <View style={styles.row}>
                    <MaterialCommunityIcons name="email" color="#777777" size={20} />
                    <Text style={{color:"#777777", marginLeft:20}}>ernestnamdi6@gmail.com</Text>
                 </View>
            </View>


            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox, {
                    borderRightColor:"#777777",
                    borderRightWidth: 1,
                }]}>
                    <Title>$178</Title>
                    <Caption>Balance</Caption>
                </View>

                <View style={styles.infoBox}>
                    <Title>26</Title>
                    <Caption>Orders</Caption>
                </View>
            </View>

            <View style={styles.menuWrapper}>
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <MaterialCommunityIcons name="heart-outline" color="#FF6347" size={25} />
                        <Text style={styles.menuItemText}>Your Favourites</Text>
                    </View>
                </TouchableRipple>

                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <MaterialCommunityIcons name="credit-card" color="#FF6347" size={25} />
                        <Text style={styles.menuItemText}>Payment</Text>
                    </View>
                </TouchableRipple>

                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <MaterialCommunityIcons name="share-outline" color="#FF6347" size={25} />
                        <Text style={styles.menuItemText}>Tell Your Friends</Text>
                    </View>
                </TouchableRipple>

                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <MaterialCommunityIcons name="account-check-outline" color="#FF6347" size={25} />
                        <Text style={styles.menuItemText}>Support</Text>
                    </View>
                </TouchableRipple>

                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <AntDesign name="setting" color="#FF6347" size={25} />
                        <Text style={styles.menuItemText}>Settings</Text>
                    </View>
                </TouchableRipple>

            </View>
        </SafeAreaView>
    )
}

export default SettingsScreen

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
    

})
