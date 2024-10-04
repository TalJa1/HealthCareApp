import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {main} from '../../services/styleSheets';
import useStatusBar from '../../services/useStatusBar';

const Customize = () => {
  useStatusBar('#EAECF5');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>Customize</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Customize;

const styles = StyleSheet.create({
  container: main,
});
