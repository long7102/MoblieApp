/* eslint-disable prettier/prettier */
import {Image, Text, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
const RestScreen = () => {
  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(10);
  const navigation = useNavigation();
  const startTime = () =>{
    setTimeout(()=>{
      if (timeLeft <= 0){
        navigation.goBack();
        clearTimeout(timer);
      }
      setTimeLeft(timeLeft - 1);
    }, 1500);
  };
  useEffect(()=>{
    startTime();
    return ()=> clearTimeout(-1);
  },);
  return (
    <SafeAreaView style={styles.all}>
      <Image style={styles.image} source={{uri:'https://hips.hearstapps.com/hmg-prod/images/muscled-man-taking-a-break-between-rounds-of-royalty-free-image-1027108190-1563208504.jpg'}}/>
      <Text style={styles.text}>TAKE A BREAK!</Text>
      <Text style={styles.text}>{timeLeft}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  all:{
    backgroundColor:'black',
    height:'100%',
  },
  text:{
    fontSize: 30,
    color: 'white',
    fontWeight:'900',
    textAlign:'center',
    marginTop: 25,
  },
  image:{
    width: '100%',
    height: 450,
  },
});
export default RestScreen;
