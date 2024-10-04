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
import useStatusBar from '../../services/useStatusBar';
import {menuIcon} from '../../assets/svgXml';
import {NewsItem, NewsRenderProps} from '../../services/typeProps';
import {loadData, saveData} from '../../services/storage';
import {getCurrentMonthAndDate, NewsListData} from '../../services/renderData';
import {useFocusEffect} from '@react-navigation/native';

const News = () => {
  useStatusBar('#EAECF5');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, paddingHorizontal: vw(5), marginBottom: vh(2)}}>
          <Header />
          <MainContent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const MainContent: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'all' | 'follow'>('all');
  const [renderData, setRenderData] = useState<NewsItem[]>([]);

  const fetchData = async () => {
    await loadData<NewsItem[]>(`NewsData${getCurrentMonthAndDate()}`)
      .then(data => {
        setRenderData(data);
      })
      .catch(() => {
        saveData(`NewsData${getCurrentMonthAndDate()}`, NewsListData);
        setRenderData(NewsListData);
      });
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  return (
    <View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'all' && styles.selectedTab]}
          onPress={() => setSelectedTab('all')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'all' && styles.tabActiveText,
            ]}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'follow' && styles.selectedTab]}
          onPress={() => setSelectedTab('follow')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'follow' && styles.tabActiveText,
            ]}>
            Follow
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {selectedTab === 'all' ? (
          <NewsRender data={renderData} showButton={false} />
        ) : (
          <NewsRender data={renderData} showButton={true} />
        )}
      </View>
    </View>
  );
};

const NewsRender: React.FC<NewsRenderProps> = () => {
  return <View></View>;
};

const Header: React.FC = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: vh(2),
      }}>
      <Text style={{color: '#4E5BA6', fontSize: 20, fontWeight: '600'}}>
        News
      </Text>
      {menuIcon(vw(8), vw(8))}
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container: main,
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
});
