/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {centerAll, main, vh, vw} from '../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {menuIcon, nextIcon} from '../../assets/svgXml';
import * as Progress from 'react-native-progress';
import {
  currentListTaskData,
  DiseaseCategoriesTabs,
  HomeLearnMoreData,
} from '../../services/renderData';
import LearnMoreComponent from '../../components/home/LearnMoreComponent';
import {loadData, saveData} from '../../services/storage';
import {TaskProps} from '../../services/typeProps';
import {useFocusEffect} from '@react-navigation/native';

const Home = () => {
  useStatusBar('#EAECF5');
  const [taskData, setTaskData] = useState<TaskProps[]>([]);

  const fetchData = async () => {
    await loadData<TaskProps[]>('TasksStorage')
      .then(data => {
        console.log(data);
        setTaskData(data);
      })
      .catch(err => {
        console.log(err);
        saveData('TasksStorage', currentListTaskData);
        setTaskData(currentListTaskData);
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
        <View style={{flex: 1, marginBottom: vh(2)}}>
          <Header />
          <Banner data={taskData} />
          <DiseaseCatergory />
          <TabsRender />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const TabsRender: React.FC = () => {
  const tabsData = HomeLearnMoreData;
  return (
    <View style={{rowGap: vh(2)}}>
      {tabsData.map((tab, index) => {
        return (
          <View key={index} style={{paddingHorizontal: vw(5)}}>
            <LearnMoreComponent
              description={tab.description}
              img={tab.img}
              index={index}
              label={tab.disease}
            />
          </View>
        );
      })}
    </View>
  );
};

const DiseaseCatergory: React.FC = () => {
  return (
    <View style={{paddingHorizontal: vw(5), marginVertical: vh(2)}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: '#344054', fontSize: 20, fontWeight: '600'}}>
          Disease Categories
        </Text>
        {nextIcon(vw(7), vw(7), '#98A2B3')}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginVertical: vh(2)}}>
        {DiseaseCategoriesTabs.map((item, index) => {
          return (
            <View
              key={index}
              style={[styles.diseaseCategoryContainer, centerAll]}>
              <Image source={item.img} />
              <Text style={styles.diseaseCategoryTxt}>{item.label}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const Banner: React.FC<{data: TaskProps[]}> = ({data}) => {
  const taskDone = data.filter(task => task.isCompleted === true).length;

  return (
    <View style={styles.bannerContainer}>
      <View style={{justifyContent: 'space-between', rowGap: vh(2)}}>
        <View style={{flexDirection: 'row', columnGap: vw(3)}}>
          <Progress.Circle
            size={55}
            borderWidth={0}
            thickness={5}
            progress={0}
            strokeCap="round"
            unfilledColor="#C7D7FE"
            showsText={true}
            formatText={() => ''}
            color={'#0000FF'}
          />
          <View style={{justifyContent: 'space-between'}}>
            <Text style={styles.progressLabel}>Ready for a new day?</Text>
            <Text style={styles.progressText}>
              {taskDone} of {data.length} completed
            </Text>
          </View>
        </View>
        <TouchableOpacity style={[styles.button, centerAll]}>
          <Text style={styles.buttonText}>Check all tasks</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.bannerBackImg}
        source={require('../../assets/home/bannerBack.png')}
      />
      <Image
        style={styles.bannerImg}
        source={require('../../assets/home/footballer.png')}
      />
    </View>
  );
};

const Header: React.FC = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: vh(2),
        paddingHorizontal: vw(5),
      }}>
      <Text style={styles.headerTxt}>Home</Text>
      <View
        style={{flexDirection: 'row', columnGap: vw(2), alignItems: 'center'}}>
        <Image
          style={styles.headerImg}
          source={require('../../assets/home/avatar.png')}
        />
        {menuIcon(vw(7), vw(7), '#98A2B3')}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: main,
  headerTxt: {
    color: '#344054',
    fontSize: 20,
    fontWeight: '600',
  },
  headerImg: {
    width: vw(8),
    height: vw(8),
    borderRadius: vw(4),
  },
  bannerContainer: {
    alignSelf: 'center',
    width: vw(90),
    borderRadius: 12,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4}, // Apply shadow only to the bottom
    shadowOpacity: 0.25,
    shadowRadius: 10, // Increase radius for more blur
    elevation: 10, // For Android shadow
    backgroundColor: '#EAECF5', // Ensure background color is set
    overflow: 'hidden', // Allow shadow to be visible outside the box
    justifyContent: 'space-between',
    paddingHorizontal: vw(3),
    paddingVertical: vh(1),
  },
  progressText: {
    fontWeight: '400',
    fontSize: 12,
    color: '#444CE7',
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#2D31A6',
    paddingVertical: vh(1),
    paddingHorizontal: vw(3),
    borderRadius: 6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  progressLabel: {
    color: '#1D2939',
    fontWeight: '600',
    fontSize: 14,
  },
  bannerImg: {
    position: 'absolute',
    resizeMode: 'contain',
    bottom: 0,
    right: vw(3),
  },
  bannerBackImg: {
    position: 'absolute',
    resizeMode: 'cover',
    right: 0,
    height: vh(20),
    zIndex: -2,
  },
  diseaseCategoryTxt: {
    color: '#1D2939',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  diseaseCategoryContainer: {
    width: vw(20),
    alignSelf: 'flex-start',
  },
});
