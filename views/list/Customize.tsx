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
import {
  CuztomizeMainProps,
  TabRenderListProps,
  TaskProps,
} from '../../services/typeProps';
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

const MainContent: React.FC<CuztomizeMainProps> = ({
  currentTask,
  additionTask,
}) => {
  const [selectedTab, setSelectedTab] = useState<'current' | 'list'>('current');
  const [cancelTasks, setCancelTasks] = useState<number[]>([]);
  const [moveTasks, setMoveTasks] = useState<number[]>([]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'current' && styles.selectedTab]}
          onPress={() => setSelectedTab('current')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'current' && styles.tabActiveText,
            ]}>
            Current tasks({currentTask.length})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'list' && styles.selectedTab]}
          onPress={() => setSelectedTab('list')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'list' && styles.tabActiveText,
            ]}>
            On your list({additionTask.length})
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {selectedTab === 'current' ? (
          <View>
            <Text style={styles.mainCountText}>
              Cancel ( {cancelTasks.length} ) task
            </Text>
            <TabRender />
          </View>
        ) : (
          <View>
            <Text style={styles.mainCountText}>
              Move ( {moveTasks.length} ) to your tasks
            </Text>
            <TabRender />
          </View>
        )}
      </View>
    </View>
  );
};

const TabRender: React.FC<TabRenderListProps> = () => {
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
  mainContainer: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.4,
    borderBottomColor: '#667085',
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  selectedTab: {
    borderBottomColor: '#2D31A6',
  },
  tabText: {
    fontSize: 16,
    color: '#667085',
    fontWeight: '400',
  },
  tabActiveText: {
    fontSize: 16,
    color: '#2D31A6',
    fontWeight: '600',
  },
  content: {
    marginTop: vh(2),
  },
  mainCountText: {
    color: '#444CE7',
    fontSize: 14,
    fontWeight: '600',
  },
});
