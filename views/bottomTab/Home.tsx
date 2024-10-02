import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {main} from '../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';

const Home = () => {
  useStatusBar('#EAECF5');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>Home</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: main,
});
