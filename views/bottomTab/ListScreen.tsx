/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {main, vh, vw} from '../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  currentListTaskData,
  futureListTaskData,
  getCurrentMonthAndDate,
  getMonthYearHomeChart,
  getWeekDays,
  pastListTaskData,
} from '../../services/renderData';
import {Picker} from '@react-native-picker/picker';
import useStatusBar from '../../services/useStatusBar';
import {
  ListScreenDateProps,
  ListScreenMainProps,
  TaskProps,
} from '../../services/typeProps';
import {taskModifierIcon} from '../../assets/svgXml';
import ListTaskComponent from '../../components/list/ListTaskComponent';
import {loadData, saveData} from '../../services/storage';
import {useFocusEffect} from '@react-navigation/native';

const ListScreen = () => {
  useStatusBar('#EAECF5');
  const today = new Date().getDate();
  const [selectedDate, setSelectedDate] = useState<number>(today);
  const [selectedMonth, setSelectedMonth] = useState('current');
  const [renderData, setRenderData] = useState<TaskProps[]>([]);

  const handleDateChange = (dayDate: number) => {
    if (dayDate === selectedDate) {
      return; // If the selected date is the same as the previous one, do nothing
    }

    setSelectedDate(dayDate);
  };

  const fetchData = async () => {
    await loadData<TaskProps[]>(`TasksStorage${getCurrentMonthAndDate()}`)
      .then(data => {
        console.log(data);
        setRenderData(data);
      })
      .catch(err => {
        console.log(err);
        saveData(
          `TasksStorage${getCurrentMonthAndDate()}`,
          currentListTaskData,
        );
        setRenderData(currentListTaskData);
      });
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <DateTimeRender
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
        <Main
          selectedDate={selectedDate}
          selectedMonth={selectedMonth}
          isChangeable={
            selectedMonth === 'current' &&
            selectedDate >= today &&
            selectedDate - today < 4
          }
          renderData={renderData}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const Main: React.FC<ListScreenMainProps> = ({isChangeable, selectedDate}) => {
  const today = new Date().getDate();
  const isModifiable = selectedDate === today;

  const renderView = () => {
    if (isChangeable) {
      if (isModifiable) {
        return (
          <View>
            <Text>Today</Text>
          </View>
        );
      }
      return <ListTaskComponent data={futureListTaskData} />;
    } else {
      return <ListTaskComponent data={pastListTaskData} />;
    }
  };

  return (
    <View style={{paddingHorizontal: vw(5), marginTop: vh(2)}}>
      <View style={{rowGap: vh(1)}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 18, fontWeight: '600', color: '#1D2939'}}>
            Star your day
          </Text>
          {isChangeable ? (
            <TouchableOpacity disabled={!isModifiable}>
              {taskModifierIcon(vw(7), vw(7))}
            </TouchableOpacity>
          ) : (
            ''
          )}
        </View>
        <View>{renderView()}</View>
      </View>
    </View>
  );
};

const DateTimeRender: React.FC<ListScreenDateProps> = ({
  selectedDate,
  handleDateChange,
  selectedMonth,
  setSelectedMonth,
}) => {
  const today = new Date().getDate();

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

      <View style={[styles.dateContainer]}>
        {getWeekDays(selectedMonth).map((day, index) => {
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
