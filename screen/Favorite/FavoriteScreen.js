/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const FavoriteScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ height: '100%', backgroundColor: '#CD853F' }}>
      <View style={{ marginTop: 150 }}>
        <Image style={styles.image} source={require('../../assests/images/blushing.png')} />
        <Text style={styles.text}> You don't have any favorite excercise</Text>
        <Pressable style={styles.button} onPress={() => { navigation.navigate('Main'); }}>
          <Text style={styles.text2}> Go Back </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    height: 250,
    width: 250,
  },
  text: {
    fontSize: 22,
    color: 'whitesmoke',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button:{
    alignSelf: 'center',
    height: 40,
    width: 120,
    backgroundColor: '#038625',
    marginTop: 20,
    borderRadius: 7,
  },
  text2:{
    fontSize: 20,
    textAlign: 'center',
    color: 'whitesmoke',
    marginTop: 5,
  },
});
