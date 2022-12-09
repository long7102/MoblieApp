/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import { FitnessItems } from '../../Context';
import FitnessCard from '../components/FitnessCard/FitnessCard';
const HomeScreen = () => {
  // const {workout, calories, minutes} = useContext(FitnessItems);
  return (
    <ScrollView style={styles.view}>
      <View style={styles.root}>

         {/* <View style={styles.info}>
       <View>
         <Text style={styles.text2}>WORKOUT</Text>
         <Text style={styles.text3}>{workout} workouts</Text>
       </View>
       <View>
         <Text style={styles.text2}>CALORIES</Text>
         <Text style={styles.text3}>{calories} calories</Text>
       </View>
       <View>
         <Text style={styles.text2}>TIMES</Text>
         <Text style={styles.text3}>{minutes} minutes</Text>
       </View>
       </View>  */}

        <View style={styles.home}>
        <Text style={styles.text}> HOME WORKOUT </Text>
          <Image style={styles.img}
            source={{
              uri: 'https://i.ytimg.com/vi/9VwfgpGeXwk/maxresdefault.jpg',
            }}
          />
        </View>
        <FitnessCard />
        </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    // backgroundColor: 'black',
    // height: 200,
    backgroundColor: '#CD853F',

  },
  text: {
    fontSize: 24,
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  text2: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  text3: {

    fontSize: 17,
    marginTop: 6,
    resizeMode: 'contain',
    textAlign: 'center',
  },
  info: {
    flexDirection: 'row',
    alginItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  workout: {
    width: '90%',
    height: 120,
    marginTop: 25,
    borderRadius: 3,
  },
  home: {
    justifyContent: 'center', alignItems: 'center', backgroundColor: '#CD853F',
  },
  img: {
    width: '90%', height: 120, marginTop: 20, borderRadius: 7,
  },

});
export default HomeScreen;
