/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
const onSignInGG = () => {
    console.warn('Sign in with Google');
  };
  const onSignInFB = () => {
    console.warn('Sign in with Facebook');
  };
const SocialSignInButton = () => {
  return (
    <>
      <CustomButton text="Sign In with Google" onPress={onSignInGG} bgColor="#FAE9EA" fgColor="red"/>
      <CustomButton text="Sign In with Facebook" onPress={onSignInFB} bgColor="#E7EAF4" fgColor="blue"/>
    </>
  );
};

export default SocialSignInButton;
