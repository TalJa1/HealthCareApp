import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {main} from '../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';

const News = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>News</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default News;

const styles = StyleSheet.create({
  container: main,
});
