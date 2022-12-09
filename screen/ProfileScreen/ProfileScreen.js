/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, SafeAreaView, StyleSheet, Image } from 'react-native';
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfo}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: 'https://www.lolsolved.gg/static/wiki/Pantheon_0.jpg',
            }}
            size={80}
            style={{borderWidth: 0, borderColor:'#038625'}}
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={[styles.title, { marginTop: 15, marginBottom: 5 }]}>User7102</Title>
            <Caption style={styles.caption}>@user7102</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfo}>
        <View style={styles.row}>
            <Image style={styles.img} source={require('../../assests/icons/user-solid.png')} />
          <Text style={{ fontSize: 16 }}> Hà Nội, Việt Nam</Text>
        </View>
        <View style={styles.row}>
        <Image style={styles.img} source={require('../../assests/icons/phone-call.png')} />
          <Text style={{ fontSize: 16 }}> 1234556788</Text>
        </View>
        <View style={styles.row}>
        <Image style={styles.img} source={require('../../assests/icons/email.png')} />
          <Text style={{ fontSize: 16 }}> gymwarrior@gmail.com</Text>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View style={styles.infoBox}>
          <Title> <Image style={{width: 25, height: 25, marginLeft: 15}} source={require('../../assests/icons/calendar.png')} />7</Title>
          <Caption style={{ fontSize: 16 }}>Day of work</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>  <Image style={{width: 25, height: 25, marginRight: 15}} source={require('../../assests/icons/checked.png')} />11</Title>
          <Caption style={{ fontSize: 16 }}>Completed exersise</Caption>
        </View>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => { navigation.navigate('EditProfile'); }}>
          <View style={styles.menuItem}>
          <Image style={styles.img2} source={require('../../assests/icons/edit.png')} />
            <Text style={styles.menuText}>Edit My Profile</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => { navigation.navigate('Favorite'); }}>
          <View style={styles.menuItem}>
          <Image style={styles.img2} source={require('../../assests/icons/heart.png')} />
            <Text style={styles.menuText}>My Favorite</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => { navigation.navigate('AboutUs'); }}>
          <View style={styles.menuItem}>
          <Image style={styles.img2} source={require('../../assests/icons/multiple-users-silhouette.png')} />
            <Text style={styles.menuText}>About Us</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => { navigation.navigate('SignIn'); }}>
          <View style={styles.menuItem}>
          <Image style={styles.img2} source={require('../../assests/icons/logout.png')} />
            <Text style={styles.menuText}>Log Out</Text>
          </View>
        </TouchableRipple>
      </View>


    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfo: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    borderTopColor: 'gray',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    // color: 'white',
    // borderColor: 'white',
    borderLeftWidth: 1,
    borderLeftColor: 'grey',
  },
  menuWrapper: {
    marginTop: 10,

  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,

  },
  menuItemText: {
    // color: '#white',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 26,
  },
  menuText: {
    // color: 'white',
    fontSize: 16,
  },
  img:{
    width: 18, height: 18, marginRight: 5,
  },
  img2:{
    width: 25, height: 25, marginRight: 10,
  },
}
);
