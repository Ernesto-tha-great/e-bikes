import React from 'react'
import { View, Text, StyleSheet, Modal} from 'react-native'
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import tw from 'tailwind-react-native-classnames';
import { Dimensions } from "react-native";
import BottomSheet from '@gorhom/bottom-sheet';



const Map = () => {
    return (
        <View>
      <MapView
        style={styles.map}
        mapType={'standard'}
        userInterfaceStyle={"dark"}
        showsUserLocation={true}
        initialRegion={{
          latitude: 6.431248,
          longitude: 3.432031,
          latitudeDelta: 0.0041,
          longitudeDelta: 0.0021,
        }}
      />
       
</View>

    );
  };
  
export default Map

const styles = StyleSheet.create({
    map: {
        height: Dimensions.get("window").height, 
    },

});

