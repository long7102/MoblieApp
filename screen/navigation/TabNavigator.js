/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import { Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
import NewScreen from '../New/NewScreen';
import MainScreen from '../MainScreen/MainScreen';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    // <NavigationContainer>

    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { backgroundColor: 'whitesmoke' },
      tabBarInactiveTintColor: '#fff',
      tabBarActiveTintColor: '#038625',
    }}>

      <Tab.Screen name={'Main2'} component={MainScreen} options={{
        tabBarIcon: ({ }) => (
          <Image style={{ tintColor: 'gray', width: 20, height: 20 }} source={require('../../assests/icons/home.png')} />
        ),
      }} />
      <Tab.Screen name={'Pratice'} component={HomeScreen} options={{
        tabBarIcon: ({ }) => (
          <Image style={{ tintColor: 'gray', width: 20, height: 20 }} source={require('../../assests/icons/dumbell.png')} />
        ),
      }} />
      <Tab.Screen name={'New'} component={NewScreen} options={{
        tabBarIcon: ({ }) => (
          <Image style={{ tintColor: 'gray', width: 20, height: 20 }} source={require('../../assests/icons/newspaper.png')} />
        ),
      }} />
      <Tab.Screen name={'Profile'} component={ProfileScreen} options={{
        tabBarIcon: ({ }) => (
          <Image style={{ tintColor: 'gray', width: 20, height: 20 }} source={require('../../assests/icons/user-solid.png')} />
        ),
      }} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
