import React from 'react'
import { StyleSheet, Text, View, SafeAreaView,Image, TouchableOpacity,ActivityIndicator} from 'react-native'
import * as Google from "expo-google-app-auth"
import {  AntDesign} from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';
const LoginScreen = ({navigation}) => {
    const [googleSubmitting, setGoogleSubmitting] = React.useState(false)
    const handleGoogleSignIn = () => {
        setGoogleSubmitting(true)
        const config = {
            iosClientId:`248733133912-96v79fofr3bvbboldojtrbin25197fms.apps.googleusercontent.com`, 
            androidClientId:`248733133912-i2kbsfbniuudj1o9e9io0v6u91uf3lo9.apps.googleusercontent.com`,
            scopes: ['profile', 'email']
        }
        
        Google.logInAsync(config).then((res) => {
                const {type, user } = res;
                if(type === 'success'){
                console.log("success");
                setTimeout(() => {
                    navigation.navigate('Root', {
                        user: user
                    })
                }, 1000)
                }else{
                    console.log('erroroooo')
                }
                setGoogleSubmitting(false)
        }).catch((err) => {
            console.log(err)
            setGoogleSubmitting(false)
        }
        )

    }
    return (
        <SafeAreaView style={tw`bg-yellow-400 flex-1 justify-center`}>
        
            <View style={{alignItems:"center",}}> 
            <Image style={{width: 200, height:200, resizeMode:"contain",}}  source={{uri:"https://cdn.pixabay.com/photo/2014/04/03/10/00/skyscrapers-309573__340.png"}}  />

               <View>
                <Text style={tw`text-center font-semibold text-3xl p-6`}>Welcome to E-Bikes</Text>

                <View style={tw`p-6`}>
                <Text style={tw`text-center text-lg text-gray-500 `}>Buying Electric bikes just got a lot easier. </Text>
                {/* go bnack and fix this spacing stuff */}
                <Text style={tw`text-center text-lg text-gray-500`}>Try us today</Text>
                </View>
                </View>

           <View>
            {!googleSubmitting && (
                  <TouchableOpacity onPress={handleGoogleSignIn} google={true}  style={[tw`py-4 px-6 bg-black rounded-full`,{flexDirection:"row",alignItems:"center"}]}>
                  <Image style={tw`w-10 h-10 px-2 mx-8 right-11 bg-white rounded-full `}  source={{uri:"https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004__340.png"}}   />
                  <Text style={tw`text-white right-9 text-lg`}>Login with Google</Text>
              </TouchableOpacity>
            )}
          
           {googleSubmitting && (
                <TouchableOpacity disabled={true} google={true}  style={tw`py-4 px-6 bg-gray-700 rounded-2xl `}>
                <ActivityIndicator size="large" color="green" />
            </TouchableOpacity>
           )}
           </View>

           <View style={[tw`items-center p-4 top-12 `,{flexDirection:"row"}]}>
              <Text style={tw`text-center text-lg text-gray-500 mx-2`}>Don't have an account? </Text>
              <Text style={tw`text-lg font-semibold`}>Sign Up</Text>
            </View>

            </View> 
       

        </SafeAreaView>
    )
} 

export default LoginScreen

