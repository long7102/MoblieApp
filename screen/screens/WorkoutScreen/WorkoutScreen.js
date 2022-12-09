/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { FitnessItems } from '../../../Context';
const WorkoutScreen = () => {
  // const {completed,setCompleted} = useContext(FitnessItems);
  const navigation = useNavigation();
  const route = useRoute();
  

  return (

    <ScrollView style={{ height: '100%', backgroundColor: 'black' }}>
      <Image
        style={{ width: '100%', height: 170 }}
        source={{ uri: route.params.image }}
      />
      <Text style={{ fontSize: 25, color: 'white', alignSelf: 'center' }}>ALL EXCERSISES</Text>
      {route.params.excersises.map((item, index) => (
        <Pressable style={{ margin: 10, flexDirection: 'row' }} key={index}>
          <Image style={styles.press} source={{ uri: item.image }} />
          <View style={{ marginTop: 25 }}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.sets}>X{item.sets}</Text>
          </View>
          {/* {completed?.includes(item.name) ? (console.log('abc')) : (null)} */}
        </Pressable>
      ))}
      <Pressable style={styles.start} onPress={() => {
        navigation.navigate('Pratice', { excersises: route.params.excersises });
        // setCompleted([]);
      }}>
        <Text style={styles.textstart} >START</Text>

      </Pressable>
    </ScrollView>

  );
};
const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 170,
    alignItems: 'center',
  },
  press: {
    width: 100,
    height: 100,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 7,
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: '#038625',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  sets: {
    marginTop: 5,
    fontSize: 16,
    color: 'whitesmoke',
  },
  start: {
    backgroundColor: '#038625',
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 20,
    width: '30%',
  },
  textstart: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',

  },
});
export default WorkoutScreen;
