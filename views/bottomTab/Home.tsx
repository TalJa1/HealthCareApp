/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {main, vh, vw} from '../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {menuIcon} from '../../assets/svgXml';

const Home = () => {
  useStatusBar('#EAECF5');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={{flex: 1}}>
          <Header />
          <Banner />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Banner: React.FC = () => {
  return (
    <View style={styles.bannerContainer}>
      <View style={styles.bannerLeft}></View>
      <View style={styles.bannerRight}>
        <Image
          style={{resizeMode: 'contain'}}
          source={require('../../assets/home/footballer.png')}
        />
      </View>
    </View>
  );
};

const Header: React.FC = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: vh(2),
        paddingHorizontal: vw(5),
      }}>
      <Text style={styles.headerTxt}>Home</Text>
      <View
        style={{flexDirection: 'row', columnGap: vw(2), alignItems: 'center'}}>
        <Image
          style={styles.headerImg}
          source={require('../../assets/home/avatar.png')}
        />
        {menuIcon(vw(7), vw(7), '#98A2B3')}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: main,
  headerTxt: {
    color: '#344054',
    fontSize: 20,
    fontWeight: '600',
  },
  headerImg: {
    width: vw(8),
    height: vw(8),
    borderRadius: vw(4),
  },
  bannerContainer: {
    alignSelf: 'center',
    width: vw(90),
    borderRadius: 12,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4}, // Apply shadow only to the bottom
    shadowOpacity: 0.25,
    shadowRadius: 10, // Increase radius for more blur
    elevation: 10, // For Android shadow
    backgroundColor: '#EAECF5', // Ensure background color is set
    overflow: 'hidden', // Allow shadow to be visible outside the box
    justifyContent: 'space-between',
    paddingHorizontal: vw(3),
  },
  bannerLeft: {},
  bannerRight: {},
});
