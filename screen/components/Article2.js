/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import news from './news';
const Article2 = () => {
    const NewsData = news;
    const route = useRoute();
    const navigation = useNavigation();
    return (
        <ScrollView style={{ height: '100%'}}>
      
    </ScrollView>
    );
};

export default Article2;

const styles = StyleSheet.create({


});
