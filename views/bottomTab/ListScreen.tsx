/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {main, vh, vw} from '../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getMonthYearHomeChart, getWeekDays} from '../../services/renderData';
import {Picker} from '@react-native-picker/picker';
import useStatusBar from '../../services/useStatusBar';

const ListScreen = () => {
  useStatusBar('#EAECF5');
  const today = new Date().getDate();
  const [selectedDate, setSelectedDate] = useState<number>(today);

  const handleDateChange = (dayDate: number) => {
    if (dayDate === selectedDate) {
      return; // If the selected date is the same as the previous one, do nothing
    }

    setSelectedDate(dayDate);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Header />
        <View style={{paddingHorizontal: vw(5)}}>
          <DateTimeRender
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const DateTimeRender: React.FC<{
  selectedDate: number;
  handleDateChange: (dayDate: number) => void;
}> = ({selectedDate, handleDateChange}) => {
  const today = new Date().getDate();

  return (
    <View style={[styles.dateContainer]}>
      {getWeekDays().map((day, index) => {
        const dayDate = parseInt(day.date, 10);
        const isToday = dayDate === today;
        const isSelected = dayDate === selectedDate;
        const isPast = dayDate < today;

        return (
          <TouchableOpacity
            key={index}
            style={styles.dateTxtContainer}
            onPress={() => handleDateChange(dayDate)}>
            <Text style={[styles.dateofWeek, isToday && {color: '#444CE7'}]}>
              {day.dayOfWeek}
            </Text>
            <View
              style={[
                styles.dateCircle,
                isToday && !isSelected && styles.todayCircle,
                isSelected && styles.selectedCircle,
                isToday && isSelected && {backgroundColor: '#4E5BA6'},
              ]}>
              <Text
                style={[
                  styles.datetime,
                  isToday && !isSelected && styles.todayText,
                  isSelected && styles.selectedText,
                  !isToday && !isSelected && styles.defaultText,
                  isPast && !isSelected && {color: '#B0B7C3'},
                ]}>
                {day.date}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
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
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: vh(2),
    borderTopWidth: 1,
    borderTopColor: '#E4E7EC',
    borderBottomColor: '#E4E7EC',
    borderBottomWidth: 1,
  },
  dateofWeek: {
    color: '#1D2939',
    fontSize: 12,
    fontWeight: '400',
  },
  datetime: {
    fontSize: 14,
    fontWeight: '600',
  },
  dateTxtContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: vh(0.5),
  },
  todayText: {
    color: '#444CE7',
  },
  selectedText: {
    color: '#FCFCFD',
  },
  defaultText: {
    color: '#344054',
  },
  dateCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todayCircle: {
    backgroundColor: 'transparent',
  },
  selectedCircle: {
    backgroundColor: '#98A2B3',
    borderRadius: vw(30),
  },
});
