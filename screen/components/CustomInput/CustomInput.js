/* eslint-disable prettier/prettier */
import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { Controller } from 'react-hook-form';

const CustomInput = ({ control, name, placeholder, rules = {}, secureTextEntry }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <>
        <View style={[styles.container, {borderColor: error ? 'red' : '#e8e8e8'}]}>
          <TextInput value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
          />
        </View>
        {error && (
        <Text style={{color:'red', alignSelf:'stretch'}}> {error.message || 'error'} </Text>)}
        </>
      )}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginBottom: 1,
  },
  input: {},
});
export default CustomInput;
