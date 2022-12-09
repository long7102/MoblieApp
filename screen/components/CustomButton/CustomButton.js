/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text, type, bgColor, fgColor, boColor,boWidth}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles['container_${type}'],
        bgColor ? {backgroundColor:bgColor} : {},
        boColor ? {borderColor:boColor} : {},
        boWidth ? {borderWidth:boWidth} : {},
        ]}>
      <Text style={[styles.text,
      styles['text_${type}'],
      fgColor ? {color:fgColor} : {},
    ]}>{text}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#038625',
  },
  // container_PRIMARY: {
  //     backgroundColor:'#038625',
  //   },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CustomButton;
