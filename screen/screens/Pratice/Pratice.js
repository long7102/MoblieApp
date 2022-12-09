/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React, { useContext, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { FitnessItems } from '../../../Context';
const Pratice = () => {
  const route = useRoute();
  console.log(route.params);
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();
  const excersise = route.params.excersises;
  const current = excersise[index];
  console.log(current, 'Current excersise');
  // const {completed,setCompleted,workout,setWorkout,minutes,setMinutes,calories,setCalories} = useContext(FitnessItems);
  // console.log(completed, "completed excersise");
  return (
    <View style={styles.main}>
      <Image style={styles.image} source={{ uri: current.image }} />
      <Text style={styles.text}>{current.name}</Text>
      <Text style={styles.text}>X{current.sets}</Text>
      {index + 1 >= excersise.length ? (
        <Pressable
          style={styles.press} onPress={() => {
            navigation.navigate('Main');
          }}
        >
          <Text style={styles.text1}>DONE</Text>
        </Pressable>
      ) : (
        <Pressable style={styles.press}
          onPress={() => {
            navigation.navigate('RestScreen');
            // setCompleted([...completed, current.name]);
            // setWorkout(workout + 1);
            // setMinutes(minutes + 9);
            // setCalories(calories + 7);
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
        >
          <Text style={styles.text1}>DONE</Text>
        </Pressable>
      )}
      <Pressable style={styles.press2}>
        <Pressable style={styles.press3}
          disabled={index === 0}
          onPress={() => {
            navigation.navigate('RestScreen');
            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }}
        >
          <Text style={styles.text1}>10S MORE</Text>
        </Pressable>
        {index + 1 >= excersise.length ? (
          <Pressable
            onPress={() => {
              alert('You have completed all excersises');
              navigation.navigate('Main');
            }}
            style={styles.press3}
          >
            <Text style={styles.text1}>
              SKIP
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              navigation.navigate('RestScreen');
              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            }}
            style={styles.press3}
          >
            <Text style={styles.text1}>SKIP</Text>
          </Pressable>
        )}
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    height: '100%',
  },
  image: {
    height: 400,
    width: '100%',
  },
  text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 35,
    fontSize: 25,
    fontWeight: '600',
    color: 'white',
  },
  text1: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 25,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  press: {
    backgroundColor: '#038625',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 100,
    borderRadius: 7,
    padding: 10,
    marginTop: 20,
  },
  press1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#038625',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 100,
    borderRadius: 7,
    padding: 10,
    marginTop: 20,
  },
  press2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,

  },
  press3: {
    padding: 10,
    borderRadius: 7,
    marginHorizontal: 20,
    backgroundColor: '#038625',
  },
});
export default Pratice;
