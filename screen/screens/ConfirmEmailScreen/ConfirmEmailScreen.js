/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/core'

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState();
  const navigation = useNavigation();

  const onConfirmPressed = () => {
    console.warn('Confirm');
    navigation.navigate('Main');
  };
  const onRecodePressed = () => {
    console.warn('Resend Code');
  };
  const onBackSigninPressed = () => {
    console.warn('Back to Sign in');
    navigation.navigate('SignIn');
  };
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Confirm Your Email</Text>
      <CustomInput
        placeholder="Enter your confirmation code"
        value={code}
        setValue={setCode}
      />

      <CustomButton text="Confirm" onPress={onConfirmPressed} />
      <CustomButton text="Resend code" onPress={onRecodePressed} bgColor="black" boColor="green" boWidth={3}/>
      <CustomButton text="Back to Sign In" onPress={onBackSigninPressed} bgColor="black" boColor="green" boWidth={3}/>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
    height: '100%',
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
export default ConfirmEmailScreen;
