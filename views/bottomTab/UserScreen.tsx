import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {main} from '../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';

const UserScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>UserScreen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: main,
});
