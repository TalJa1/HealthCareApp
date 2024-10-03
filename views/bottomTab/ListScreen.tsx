/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {main, vw} from '../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getMonthYearHomeChart} from '../../services/renderData';
import {Picker} from '@react-native-picker/picker';

const ListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Header />
        <View>
          <Text>ListScreen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Header: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState('current');

  return (
    <View style={{paddingHorizontal: vw(5)}}>
      <Picker
        dropdownIconColor={'#6E778B'}
        selectedValue={selectedMonth}
        style={{
          width: vw(34),
          color: '#272727',
        }}
        onValueChange={itemValue => setSelectedMonth(itemValue)}>
        <Picker.Item label={getMonthYearHomeChart(0)} value="current" />
        <Picker.Item label={getMonthYearHomeChart(-1)} value="previous1" />
        <Picker.Item label={getMonthYearHomeChart(-2)} value="previous2" />
        <Picker.Item label={getMonthYearHomeChart(-3)} value="previous3" />
      </Picker>
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: main,
});
