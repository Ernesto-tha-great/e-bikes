import { FontAwesome, Entypo, AntDesign, MaterialIcons,  Foundation} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import OrderHistoryScreen from "../screens/OrderHistoryScreen"
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}


const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Explore" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="OrderHistory" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}


const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "red",
       
      
        
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'Home',
          tabBarIcon: () => <Foundation style={{ marginBottom: -3 }} name="home" color="grey" size={30} />,
          headerShown: false,
          
        })}
      />
      <BottomTab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          title: 'Explore',
          tabBarIcon: () => <MaterialIcons style={{ marginBottom: -3 }} name="receipt" size={30}  color="grey" />,
          headerShown: false,
        }}
      />

    <BottomTab.Screen
        name="OrderHistory"
        component={OrderHistoryScreen}
        options={{
          title: 'Rides',
          tabBarIcon: () => <FontAwesome name="paper-plane" size={26} color="grey" />,
          headerShown: false,
        }}
      />

<BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: () => <MaterialIcons style={{ marginBottom: -3 }} name="settings" size={30} color="grey" />,
          headerShown: false,
        }}
      />


    </BottomTab.Navigator>
  );
}

