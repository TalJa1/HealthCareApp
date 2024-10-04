/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {centerAll, main, vh, vw} from '../../services/styleSheets';
import useStatusBar from '../../services/useStatusBar';
import {backIcon, doubleSaveIcon} from '../../assets/svgXml';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  additionListTask,
  currentListTaskData,
  getCurrentDayOfWeekAndDate,
  getCurrentMonthAndDate,
} from '../../services/renderData';
import {CuztomizeMainProps, TaskProps} from '../../services/typeProps';
import {loadData, saveData} from '../../services/storage';

const Customize = () => {
  useStatusBar('#EAECF5');
  const [currentTask, setCurrentTask] = useState<TaskProps[]>([]);
  const [additionTask, setAdditionTask] = useState<TaskProps[]>([]);

  const fetchAddtionTask = async () => {
    await loadData<TaskProps[]>(
      `AdditionTasksStorage${getCurrentMonthAndDate()}`,
    )
      .then(data => {
        setAdditionTask(data);
      })
      .catch(() => {
        saveData(
          `AdditionTasksStorage${getCurrentMonthAndDate()}`,
          additionListTask,
        );
        setAdditionTask(additionListTask);
      });
  };

  const fetchData = async () => {
    await loadData<TaskProps[]>(`TasksStorage${getCurrentMonthAndDate()}`)
      .then(data => {
        setCurrentTask(data);
      })
      .catch(() => {
        saveData(
          `TasksStorage${getCurrentMonthAndDate()}`,
          currentListTaskData,
        );
        setCurrentTask(currentListTaskData);
      });
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
      fetchAddtionTask();
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, paddingHorizontal: vw(5)}}>
          <Header />
          <MainContent
            additionTask={additionTask}
            setAdditionTask={setAdditionTask}
            currentTask={currentTask}
            setCurrentTask={setCurrentTask}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const MainContent: React.FC<CuztomizeMainProps> = () => {
  return <View></View>;
};

const Header: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        {backIcon(vw(6), vw(6))}
      </TouchableOpacity>
      <View style={centerAll}>
        <Text style={{color: '#344054', fontSize: 20, fontWeight: '600'}}>
          Customize
        </Text>
        <Text style={{color: '#98A2B3', fontSize: 14, fontWeight: '600'}}>
          {getCurrentDayOfWeekAndDate()}
        </Text>
      </View>
      <View>{doubleSaveIcon(vw(6), vw(6))}</View>
    </View>
  );
};

export default Customize;

const styles = StyleSheet.create({
  container: main,
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: vh(2),
  },
});
