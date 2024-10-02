import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {main} from '../../services/styleSheets';

const LearnMoreComponent = () => {
  return (
    <View style={styles.container}>
      <Text>LearnMoreComponent</Text>
    </View>
  );
};

export default LearnMoreComponent;

const styles = StyleSheet.create({
  container: main,
});
