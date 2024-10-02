import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {main} from '../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';

const ListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>ListScreen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: main,
});
