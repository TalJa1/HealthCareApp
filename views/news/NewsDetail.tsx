/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {main, vh, vw} from '../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import useStatusBar from '../../services/useStatusBar';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NewsListData} from '../../services/renderData';
import {backIcon, doubleSaveIcon} from '../../assets/svgXml';

const NewsDetail = () => {
  useStatusBar('#EAECF5');
  const route = useRoute();
  const {dataIndex} = route.params as {dataIndex: number};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <TopRender dataIndex={dataIndex} />
        <View style={{flex: 1, paddingHorizontal: vw(5), marginTop: vh(2)}}>
          <Text>NewsDetail</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const TopRender: React.FC<{dataIndex: number}> = ({dataIndex}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const renderData = NewsListData[dataIndex];

  return (
    <View style={styles.topRenderContainer}>
      <TouchableOpacity
        style={[
          styles.topBtn,
          {alignSelf: 'flex-start', top: vh(3), left: vw(5)},
        ]}
        onPress={() => navigation.goBack()}>
        {backIcon(vw(7), vw(7), '#EEF4FF')}
      </TouchableOpacity>
      <Image style={styles.topImg} source={renderData.img} />
      <TouchableOpacity
        disabled={true}
        style={[
          styles.topBtn,
          {alignSelf: 'flex-start', top: vh(3), right: vw(5)},
        ]}>
        {doubleSaveIcon(vw(7), vw(7), '#EEF4FF')}
      </TouchableOpacity>
    </View>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
  container: main,
  topBtn: {
    backgroundColor: '#242F4199',
    padding: vw(2),
    borderRadius: vw(30),
    position: 'absolute',
    zIndex: 2,
  },
  topImg: {
    width: '100%',
    height: vh(20),
    resizeMode: 'cover',
  },
  topRenderContainer: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5, // For Android
  },
});
