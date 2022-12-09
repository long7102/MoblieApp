import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton/SocialSignInButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const SignUpScreen = () => {
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');
  const navigation = useNavigation();

  const onRegisterPressed = () => {
    console.warn('Register');
    navigation.navigate('ConfirmEmail');
  };
  const OnPrivacyPressed = () => {
    console.warn('Privacy Policy');
  };
  const OnTermsOfUsePressed = () => {
    console.warn('Terms Of Use');
  };
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create an account</Text>
      <CustomInput
        name="username"
        control={control}
        placeholder="Username"
        rules={{
          required: 'Username is not empty',
          minLength: {
            value: 3,
            message: 'Username should be minium 3 characters long',
          },
        }}
      />
      <CustomInput
        placeholder="Email"
        name="email"
        control={control}
        rules={{
          required: 'Email is not empty',
          pattern: {value: EMAIL_REGEX},
          message: 'Email is invalid',
        }}
      />
      <CustomInput
        placeholder="Password"
        name="password"
        control={control}
        secureTextEntry={true}
        rules={{
          required: 'Password is not empty',
          minLength: {
            value: 3,
            message: 'Password should be minium 7 characters long',
          },
        }}
      />
      <CustomInput
        placeholder="Password Reapeat"
        name="password-reapeat"
        control={control}
        secureTextEntry={true}
        rules={{
          required: 'Password reapeat is not empty ',
          validate: value => value == pwd || 'Password do not match',
        }}
      />
      <CustomButton text="Register" onPress={handleSubmit(onRegisterPressed)} />
      <Text style={styles.text}>
        By registering, you confirm that you are accpect our{''}
        <Text style={styles.link} onPress={OnTermsOfUsePressed}>
          {' '}
          Terms of Use
        </Text>{' '}
        and{' '}
        <Text style={styles.link} onPress={OnPrivacyPressed}>
          Privacy Policy
        </Text>
      </Text>
      <SocialSignInButton />
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
export default SignUpScreen;
