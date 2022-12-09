/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const EditProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={StyleSheet.container}>
        <View style={{ marginLeft: 20, marginRight: 20, height: '100%' }}>
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity onPress={()=>{}}>
                    <View style={styles.imageWrapper} >
                        <ImageBackground style={styles.image} source={{uri: 'https://www.lolsolved.gg/static/wiki/Pantheon_0.jpg'}}/>
                        <View style={styles.image2} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.userName}>User7102</Text>
            </View>
            <View style={styles.action}>
            <Image style={styles.img} source={require('../../assests/icons/user-solid.png')} />
                <TextInput placeholder="Firstname" style={styles.TextInput } autoCorrect={false}/>
            </View>
            <View style={styles.action}>
            <Image style={styles.img} source={require('../../assests/icons/user-solid.png')} />
                <TextInput placeholder="Lastname" style={styles.TextInput} autoCorrect={false}/>
            </View>
            <View style={styles.action}>
            <Image style={styles.img} source={require('../../assests/icons/phone-call.png')} />
                <TextInput placeholder="Phone" keyboardType="number-pad" style={styles.TextInput} autoCorrect={false}/>
            </View>
            <View style={styles.action}>
            <Image style={styles.img} source={require('../../assests/icons/email.png')} />
                <TextInput placeholder="Email" keyboardType="email-address" style={styles.TextInput} autoCorrect={false}/>
            </View>
            <View style={styles.action}>
            <Image style={styles.img} source={require('../../assests/icons/condo.png')} />
                <TextInput placeholder="City" style={styles.TextInput} autoCorrect={false}/>
            </View>
            <TouchableOpacity style={styles.commandButton} onPress={()=>{}}>
              <Text style={styles.buttonTitle}>SUBMIT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.commandButton} onPress={()=>{navigation.goBack();}}>
              <Text style={styles.buttonTitle}>GO BACK</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
      },
      userName:{
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
      },
      image:{
        borderRadius: 15,
        height: 120,
        width: 120,
        borderColor: 'white',
        borderWidth: 1,
      },
      image2:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
      },
      action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
        paddingBottom: 3,
        // borderWidth: 0.5,
        borderColor: 'black',
        // marginLeft: 5,

      },
      textInput: {
        flex: 1,
        marginTop: 7,
        paddingLeft: 10,
        color: 'black',
      },
      imageWrapper:{
        marginTop: 10,
        height: 120,
        width: 120,
        borderRadius: 15,
        justifyContent:'center',
        alignItems:'center',
      },
      commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#038625',
        alignItems: 'center',
        marginTop: 20,
      },
      buttonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
      },
      img:{
        tintColor: 'black',
        width: 20,
        height: 20,
        marginTop: 13,
        marginRight: 5,
      },
});
