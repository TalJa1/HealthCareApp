/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {main, vh, vw} from '../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {menuIcon} from '../../assets/svgXml';

const News = () => {
  useStatusBar('#EAECF5');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, paddingHorizontal: vw(5), marginBottom: vh(2)}}>
          <Header />
          <MainContent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const MainContent: React.FC = () => {
  return <View></View>;
};

const Header: React.FC = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: vh(2),
      }}>
      <Text style={{color: '#4E5BA6', fontSize: 20, fontWeight: '600'}}>
        News
      </Text>
      {menuIcon(vw(8), vw(8))}
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container: main,
});
