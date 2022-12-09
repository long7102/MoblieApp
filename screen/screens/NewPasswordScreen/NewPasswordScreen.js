/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const NewPasswordScreen = () => {
  const {control, handleSubmit, watch} = useForm();
  const navigation = useNavigation();
  const pwd = watch('password');
  const onSubmitPressed = (data) => {
    navigation.navigate('Main');
  };

  const onBackSigninPressed = () => {
    console.warn('Back to Sign in');
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Enter Your New Password</Text>
      <CustomInput
      name="newpassword"
        placeholder="Enter your new password"
        control={control}
        secureTextEntry={true}
        rules={{required: 'Password is not empty', minLength:{value: 3, message:'Password should be minium 7 characters long'}}}
      />
      <CustomInput
      name="renewpassword"
        placeholder="Confirm your password"
        control={control}
        secureTextEntry={true}
        rules={
          {required:'Password reapeat is not empty ',validate: value => value == pwd || 'Password do not match'}
        }
      />

      <CustomButton text="Submit" onPress={onSubmitPressed} />
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
export default NewPasswordScreen;
