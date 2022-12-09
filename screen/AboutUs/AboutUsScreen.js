/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React from 'react';
import DropDownItem from 'react-native-drop-down-item';

const AboutUs = () => {
const IC_ARR_DOWN = require('../../assests/images/upload.png');
const IC_ARR_UP = require('../../assests/images/down.png');
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.Caption}>ABOUT US</Text>
      <Text style={styles.Text}>
        Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Sem
        viverra aliquet eget sit amet tellus cras adipiscing. Quis vel eros
        donec ac odio tempor orci dapibus ultrices. Velit dignissim sodales ut
        eu. Fringilla urna porttitor rhoncus dolor purus non enim praesent.
        Cursus vitae congue mauris rhoncus aenean vel elit. Enim sit amet
        venenatis urna cursus eget nunc scelerisque. Lobortis mattis aliquam
        faucibus purus in massa tempor nec feugiat. Nunc sed id semper risus in
        hendrerit gravida. Lacus luctus accumsan tortor posuere ac ut consequat
        semper. Eu turpis egestas pretium aenean pharetra magna.
      </Text>
      <Text style={styles.Text}>
        Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Sem
        viverra aliquet eget sit amet tellus cras adipiscing. Quis vel eros
        donec ac odio tempor orci dapibus ultrices. Velit dignissim sodales ut
        eu. Fringilla urna porttitor rhoncus dolor purus non enim praesent.
        Cursus vitae congue mauris rhoncus aenean vel elit. Enim sit amet
        venenatis urna cursus eget nunc scelerisque. Lobortis mattis aliquam
        faucibus purus in massa tempor nec feugiat. Nunc sed id semper risus in
        hendrerit gravida. Lacus luctus accumsan tortor posuere ac ut consequat
        semper. Eu turpis egestas pretium aenean pharetra magna.
      </Text>
      <ScrollView style={{ alignSelf: 'center' }}>
          {data.map((item, i) => {
                return (
                  <DropDownItem
                    key={i}
                    style={styles.dropDownItem}
                    useNativeDriver={false}
                    contentVisible={false}
                    invisibleImage={IC_ARR_UP}
                    visibleImage={IC_ARR_DOWN}
                    header={
                      <View style={styles.header}>
                        <Text style={{
                          fontSize: 16,
                          color: 'whitesmoke',
                        }}>{item.title}</Text>
                      </View>
                    }
                  >
                    <Text style={styles.txt}>
                      {item.body}
                    </Text>
                  </DropDownItem>
                );
              })
          }
          <View style={{ height: 96 }}/>
        </ScrollView>
    </ScrollView>

  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CD853F',
  },
  Caption: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 5,
    fontWeight: 'bold',
    color: 'whitesmoke',
  },
  Text: {
    fontSize: 16,
    marginLeft: 15,
    marginRight: 15,
    textAlign:'justify',
    color: 'whitesmoke',
  },
  dropDownItem:{
    marginTop: 10,
    width: '97%',
  },
  header: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#708090',
  },
  headerTxt: {
    fontSize: 16,
    color: 'rgb(74,74,74)',
    flexWrap: 'wrap',
  },
});
const data =
  [
    {
      id: '0',
      title: 'Title 1',
      body: 'Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Semviverra aliquet eget sit amet tellus cras adipiscing. Quis vel erosdonec ac odio tempor orci dapibus ultrices. Velit dignissim sodales uteu. Fringilla urna porttitor rhoncus dolor purus non enim praesent.Cursus vitae congue mauris rhoncus aenean vel elit. Enim sit ametvenenatis urna cursus eget nunc scelerisque. Lobortis mattis aliquamfaucibus purus in massa tempor nec feugiat. Nunc sed id semper risus inhendrerit gravida. Lacus luctus accumsan tortor posuere ac ut consequatsemper. Eu turpis egestas pretium aenean pharetra magna.',
    },
    {
      id: '1',
      title: 'Title 2',
      body: 'Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Semviverra aliquet eget sit amet tellus cras adipiscing. Quis vel erosdonec ac odio tempor orci dapibus ultrices. Velit dignissim sodales uteu. Fringilla urna porttitor rhoncus dolor purus non enim praesent.Cursus vitae congue mauris rhoncus aenean vel elit. Enim sit ametvenenatis urna cursus eget nunc scelerisque. Lobortis mattis aliquamfaucibus purus in massa tempor nec feugiat. Nunc sed id semper risus inhendrerit gravida. Lacus luctus accumsan tortor posuere ac ut consequatsemper. Eu turpis egestas pretium aenean pharetra magna.',
    },
    {
      id: '1',
      title: 'Title 3',
      body: 'Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Semviverra aliquet eget sit amet tellus cras adipiscing. Quis vel erosdonec ac odio tempor orci dapibus ultrices. Velit dignissim sodales uteu. Fringilla urna porttitor rhoncus dolor purus non enim praesent.Cursus vitae congue mauris rhoncus aenean vel elit. Enim sit ametvenenatis urna cursus eget nunc scelerisque. Lobortis mattis aliquamfaucibus purus in massa tempor nec feugiat. Nunc sed id semper risus inhendrerit gravida. Lacus luctus accumsan tortor posuere ac ut consequatsemper. Eu turpis egestas pretium aenean pharetra magna.',
    },
    {
      id: '1',
      title: 'Title 4',
      body: 'Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Semviverra aliquet eget sit amet tellus cras adipiscing. Quis vel erosdonec ac odio tempor orci dapibus ultrices. Velit dignissim sodales uteu. Fringilla urna porttitor rhoncus dolor purus non enim praesent.Cursus vitae congue mauris rhoncus aenean vel elit. Enim sit ametvenenatis urna cursus eget nunc scelerisque. Lobortis mattis aliquamfaucibus purus in massa tempor nec feugiat. Nunc sed id semper risus inhendrerit gravida. Lacus luctus accumsan tortor posuere ac ut consequatsemper. Eu turpis egestas pretium aenean pharetra magna.',
    },
    {
      id: '1',
      title: 'Title 5',
      body: 'Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Semviverra aliquet eget sit amet tellus cras adipiscing. Quis vel erosdonec ac odio tempor orci dapibus ultrices. Velit dignissim sodales uteu. Fringilla urna porttitor rhoncus dolor purus non enim praesent.Cursus vitae congue mauris rhoncus aenean vel elit. Enim sit ametvenenatis urna cursus eget nunc scelerisque. Lobortis mattis aliquamfaucibus purus in massa tempor nec feugiat. Nunc sed id semper risus inhendrerit gravida. Lacus luctus accumsan tortor posuere ac ut consequatsemper. Eu turpis egestas pretium aenean pharetra magna.',
    },
  ];
