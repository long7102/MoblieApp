/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import {BarChart} from 'react-native-chart-kit';
const MainScreen = () => {
  return (
    <ScrollView>
      <Text style={styles.text1}>START YOUR                                                               <Text style={styles.text2}>FITNESS</Text> JOURNEY TODAY</Text>
      <ScrollView style={styles.banner}>
        <Image style={{ width: '100%', height: '100%', alignSelf: 'center', margin: 5, borderRadius: 20 }} source={require('../../assests/images/1600w-rBuKyWUYZkM.png')} />
      </ScrollView>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.text3}><Image style={{ height: 35, width: 35, marginRight: 15}} source={require('../../assests/icons/bar-chart.png')}/>MY ACTIVITIES</Text>
        <View
          style={{ flexDirection: 'row' }}>
          <View style={{ width: '45%', height: 175, backgroundColor: '#f8e4d9', margin: 10, borderRadius: 20 }}>
            <Image style={{ height: 35, width: 35, marginLeft: 15, marginTop: 10 }} source={require('../../assests/images/cycling.jpg')} />
            <Progress.Circle
              size={60}
              progress={73 / 100}
              showsText
              color="#fac5a4"
              unfilledColor="#ededed"
              borderColor="#ededed"
              direction="counter-clockwise"
              fill="white"
              strokeCap="round"
              thickness={4}
              style={{
                shadowColor: 'grey',
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.1,
                alignSelf: 'center',
              }}
              textStyle={{
                fontSize: 16,
                fontWeight: 'bold',
              }}
            />
            <View>
              <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold' }}>
                {'CYCLING'}
              </Text>
              <Text style={{ alignSelf: 'center', fontSize: 15 }}>
                {'Day:     1'}
              </Text>
              <Text style={{ alignSelf: 'center', fontSize: 15 }}>
                {'Time:   20 min'}
              </Text>
            </View>
          </View>
          <View style={{ width: '45%', height: 175, backgroundColor: '#d7f0f7', margin: 10, borderRadius: 20 }}>
            <Image style={{ height: 35, width: 35, marginLeft: 15, marginTop: 10 }} source={require('../../assests/images/walking.png')} />
            <Progress.Circle
              size={60}
              progress={45 / 100}
              showsText
              color="#aceafc"
              unfilledColor="#ededed"
              borderColor="#ededed"
              direction="counter-clockwise"
              fill="white"
              strokeCap="round"
              thickness={4}
              style={{
                shadowColor: 'grey',
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.1,
                alignSelf: 'center',
              }}
              textStyle={{
                fontSize: 16,
                fontWeight: 'bold',
              }}
            />
            <View>
              <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold' }}>
                {'WALKING'}
              </Text>
              <Text style={{ alignSelf: 'center', fontSize: 15 }}>
                {'Day:     7'}
              </Text>
              <Text style={{ alignSelf: 'center', fontSize: 15 }}>
                {'Time:   71 min'}
              </Text>
            </View>

          </View >
        </View>
        <View
          style={{ flexDirection: 'row' }}>
          <View style={{ width: '45%', height: 175, backgroundColor: '#dad5fe', margin: 10, borderRadius: 20 }}>
            <Image style={{ height: 35, width: 35, marginLeft: 15, marginTop: 10 }} source={require('../../assests/images/lotus.png')} />
            <Progress.Circle
              size={60}
              progress={37 / 100}
              showsText
              color="#8860a2"
              unfilledColor="#ededed"
              borderColor="#ededed"
              direction="counter-clockwise"
              fill="white"
              strokeCap="round"
              thickness={4}
              style={{
                shadowColor: 'grey',
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.1,
                alignSelf: 'center',
              }}
              textStyle={{
                fontSize: 16,
                fontWeight: 'bold',
              }}
            />
            <View>
              <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold' }}>
                {'YOGA'}
              </Text>
              <Text style={{ alignSelf: 'center', fontSize: 15 }}>
                {'Day:     3'}
              </Text>
              <Text style={{ alignSelf: 'center', fontSize: 15 }}>
                {'Time:   15 min'}
              </Text>
            </View>
          </View>
          <View style={{ borderRadius: 20, width: '45%', height: 175, backgroundColor: '#98FB98', margin: 10 }}>
            <Image style={{ height: 35, width: 35, marginLeft: 15, marginTop: 10 }} source={require('../../assests/images/drop.png')} />
            <Progress.Circle
              size={60}
              progress={76 / 100}
              showsText
              color="#50C878"
              unfilledColor="#ededed"
              borderColor="#ededed"
              direction="counter-clockwise"
              fill="white"
              strokeCap="round"
              thickness={4}
              style={{
                shadowColor: 'grey',
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.1,
                alignSelf: 'center',
              }}
              textStyle={{
                fontSize: 16,
                fontWeight: 'bold',
              }}
            />
            <View>
              <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold' }}>
                {'WATER'}
              </Text>
              <Text style={{ alignSelf: 'center', fontSize: 15 }}>
                {'Drink:     6 cups'}
              </Text>
              <Text style={{ alignSelf: 'center', fontSize: 15 }}>
                {'All:   7 cups'}
              </Text>
            </View>
          </View >
        </View>
      </View>
      <BarChart
        // style={{padding: 10}}
        data={data}
        width={'100%'}
        height={250}
        yAxisLabel={''}
        chartConfig={{
          backgroundColor: '#e26a70',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientFromOpacity: 1,
          backgroundGradientTo: '#ffa726',
          backgroundGradientToOpacity: 1,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => 'rgba(255, 255, 255, 1)',
          barPercentage: 0.5,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          padding: 10,
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <View style={{ height: 900, width: '100%', marginTop: 10, padding: 10, resizeMode: 'contain', overflow: 'hidden' }}>
        <Text style={{fontSize: 20,color: 'black',marginLeft: 15,}}><Image style={{ height: 35, width: 35, marginRight: 15}}  source={require('../../assests/icons/youtube.png')}/>FITNESS VIDEO</Text>
        <View style={{ backgroundColor: '#FFFDD0', borderRadius: 15, marginTop: 10 }}>
          <Image source={require('../../assests/images/video.jpg')} style={{ width: '100%', height: 220, alignSelf: 'center', borderRadius: 15 }} />
          <Text style={{ position: 'absolute', bottom: 70, left: 25, color: 'white', fontSize: 20 }}>FITNESS OBSESSION</Text>
          <Image style={{ position: 'absolute', right: 35, top: 170, height: 40, width: 40 }} source={require('../../assests/images/play-button.png')} />
          <Text style={{ fontSize: 16, color: 'black', marginLeft: 10 }}>The dangerous downsides of a fitness obsession</Text>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ height: 20, width: 20, marginLeft: 10, marginBottom: 10 }} source={require('../../assests/images/hourglass.png')} />
            <Text style={{ fontSize: 15, marginLeft: 10 }}>45 Mins</Text>
          </View>
        </View>
        <View style={{ backgroundColor: '#FFFDD0', borderRadius: 15, marginTop: 10 }}>
          <Image source={require('../../assests/images/video2.jpg')} style={{ width: '100%', height: 220, alignSelf: 'center', borderRadius: 15 }} />
          <Text style={{ position: 'absolute', bottom: 70, left: 25, color: 'white', fontSize: 20 }}>MEN'S HEALTH</Text>
          <Image style={{ position: 'absolute', right: 35, top: 170, height: 40, width: 40 }} source={require('../../assests/images/play-button.png')} />
          <Text style={{ fontSize: 16, color: 'black', marginLeft: 10 }}>15 Seriously Shredded Vegan Bodybuilders </Text>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ height: 20, width: 20, marginLeft: 10, marginBottom: 10 }} source={require('../../assests/images/hourglass.png')} />
            <Text style={{ fontSize: 15, marginLeft: 10 }}>10 Mins</Text>
          </View>
        </View>
        <View style={{ backgroundColor: '#FFFDD0', borderRadius: 15, marginTop: 10 }}>
          <Image source={require('../../assests/images/video3.jpg')} style={{ width: '100%', height: 220, alignSelf: 'center', borderRadius: 15 }} />
          <Text style={{ position: 'absolute', bottom: 70, left: 25, color: 'white', fontSize: 20 }}>GYM PLACE</Text>
          <Image style={{ position: 'absolute', right: 35, top: 170, height: 40, width: 40 }} source={require('../../assests/images/play-button.png')} />
          <Text style={{ fontSize: 16, color: 'black', marginLeft: 10 }}>Cunningham Gym to test 24/7 schedule </Text>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ height: 20, width: 20, marginLeft: 10, marginBottom: 10 }} source={require('../../assests/images/hourglass.png')} />
            <Text style={{ fontSize: 15, marginLeft: 10 }}>3 Mins</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  text1: {
    fontSize: 30,
    fontWeight: 'normal',
    color: 'black',
    marginLeft: 15,
    marginRight: 15,
  },
  text2: {
    fontSize: 30,
    fontWeight: 'normal',
    color: '#038625',
  },
  text3: {
    fontSize: 20,
    color: 'black',
    marginLeft: 15,

  },
  banner: {
    height: 220,
    width: '100%',
    marginTop: 10,
    padding: 10,
    resizeMode: 'contain',
    overflow: 'hidden',
    // flexDirection: 'row',
  },
});
const data = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  datasets: [
    {
      data: [20, 45, 28, 80, 100],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],

};
