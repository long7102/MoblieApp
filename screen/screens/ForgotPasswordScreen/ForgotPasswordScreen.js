/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const ForgotPasswordScreen = () => {

  const {control, handleSubmit, watch, formState: {errors}} = useForm();
  const navigation = useNavigation();

  const onSendPressed = () => {
    navigation.navigate('NewPassword');
  };

  const onBackSigninPressed = () => {
    console.warn('Back to Sign in');
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset Your Password</Text>
      <CustomInput
      name="username"
        placeholder="Enter your username"
        control={control}
        rules={{required:'Password is not empty'}}
      />
      <CustomButton text="Send" onPress={onSendPressed} />
      <CustomButton text="Back to Sign In" onPress={onBackSigninPressed} bgColor="black" boColor="green" boWidth={3}/>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
    height:'100%',
  },
  logo: {
    marginTop: 50,
    width: '70%',
    maxWidth: 500,
    maxHeight: 250,
    marginBottom: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
    color: '#ffffff',
  },
  text: {
    color: 'white',
    marginVertical: 10,
    fontSize: 15,

  },
  link: {
    color: '#FDB075',
  },
});
export default ForgotPasswordScreen;
