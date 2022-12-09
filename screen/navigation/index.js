/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
import WorkoutScreen from '../screens/WorkoutScreen/WorkoutScreen';
import Pratice from '../screens/Pratice/Pratice';
import RestScreen from '../screens/RestSCreen/RestScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import EditProfileScreen from '../EditProfileScreen/EditProfileScreen';
import AboutUsScreen from '../AboutUs/AboutUsScreen';
import GymNews from '../GymNews/GymNews';
import FavoriteScreen from '../Favorite/FavoriteScreen';
import TabNavigator from './TabNavigator';
const Stack = createNativeStackNavigator();
const Navigation = () => {

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="WorkoutScreen" component={WorkoutScreen}/>
        <Stack.Screen name="Pratice" component={Pratice}/>
        <Stack.Screen name="RestScreen" component={RestScreen}/>
        <Stack.Screen name="Main" component={TabNavigator}/>
        {/* <Stack.Screen component={TabNavigator}/> */}
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="EditProfile" component={EditProfileScreen}/>
        <Stack.Screen name="AboutUs" component={AboutUsScreen}/>
        <Stack.Screen name="GymNews" component={GymNews}/>
        <Stack.Screen name="Favorite" component={FavoriteScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
