/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Article from '../components/Article';

const NewScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={{fontSize: 25, textAlign: 'center', color: '#038625'}}><Image style={{width: 50, height: 50, marginBottom: 10}} source={require('../../assests/icons/fitness.png')} />GYM NEWS FOR YOU</Text>
    <Article />
    </ScrollView>
  );
};

export default NewScreen;

const styles = StyleSheet.create({
    container:{
      width: '100%',
      flex: 1,
      height: 2100,
    },
});
