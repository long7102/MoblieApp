/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import news from './news';
import { useNavigation } from '@react-navigation/native';
const Article = () => {
    const NewsData = news;
    const navigation = useNavigation();
    return (
        <View>
            {NewsData.map((item, key) => (
                <Pressable onPress={() => navigation.navigate('GymNews', { image: item.image, id: item.id, title: item.title, description: item.description, author: item.author, date: item.date })} style={styles.container} key={key}>
                    <Image style={styles.img} source={{ uri: item.image }} />
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.by}>By: <Text style={styles.author}>{item.author}</Text></Text>
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
                </Pressable>
            ))}
        </View>

    );
};

export default Article;

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 20,
        shadowOpacity: 5,
        shadowColor: '#000',
        shadowOffset: {
            height: 5,
            width: 5,
        },
        backgroundColor: '#fff',
        marginTop: 15,
    },
    img: {
        width: '100%',
        height: 220,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    title: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        textAlign:'justify',
    },
    by: {
        fontSize: 16,
        fontWeight: '400',
        marginTop: 5,
        marginLeft: 15,
    },
    author: {
        fontSize: 16,
        color: '#e63946',
        fontWeight: 'bold',
        marginTop: 5,
    },
    date: {
        fontSize: 16,
        color: '#e63946',
        fontWeight: 'bold',
        marginTop: 5,
        marginRight: 15,
    },
});
