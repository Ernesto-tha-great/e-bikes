import React from "react";
import tw from "tailwind-react-native-classnames";
import { View, Image, StyleSheet, Dimensions } from "react-native";


export const SLIDER_WIDTH = Dimensions.get('window').width 
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8)

const ImageCard = ({item, index}) => {
  return (
    <View style={[tw`bg-gray-200`,styles.container]} key={index}>
      <Image
        source={{ uri: item.image }}
        style={[tw`bg-gray-200`, styles.image]}
      />
     
      
    </View>
  )
};

export default ImageCard;

const styles = StyleSheet.create({
    container: {
      borderRadius: 20,
      width: ITEM_WIDTH,
      paddingBottom: 4,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
      marginLeft: 0,
    },
    image: {
      width: ITEM_WIDTH,
      height: 250,
      borderRadius: 20,
    },
  
  })
  
  
