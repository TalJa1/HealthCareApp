/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {main, vh, vw} from '../../services/styleSheets';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {HomeLearnMoreData} from '../../services/renderData';
import {backIcon, doubleSaveIcon} from '../../assets/svgXml';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type DetailRouteParams = {
  Detail: {
    dataIndex: number;
  };
};

const Detail = () => {
  const route = useRoute<RouteProp<DetailRouteParams, 'Detail'>>();
  const {dataIndex} = route.params;
  const renderData = HomeLearnMoreData[dataIndex];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
      </ScrollView>
    </SafeAreaView>
  );
};

const Header: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: vw(5),
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: vh(2),
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        {backIcon(vw(7), vw(7))}
      </TouchableOpacity>
      <Text style={styles.headerTxt}>Detail</Text>
      <View>{doubleSaveIcon(vw(7), vw(7))}</View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: main,
  headerTxt: {
    color: '#344054',
    fontSize: 20,
    fontWeight: '600',
  },
});
