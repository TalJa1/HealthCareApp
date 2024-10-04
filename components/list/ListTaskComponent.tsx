/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TaskProps} from '../../services/typeProps';
import {centerAll, vh, vw} from '../../services/styleSheets';
import {completeIcon} from '../../assets/svgXml';

const ListTaskComponent: React.FC<{data: TaskProps[]}> = ({data}) => {
  const isPast = data.every(item => item.isCompleted === true);

  return (
    <View style={styles.container}>
      <Text style={{color: '#444CE7', fontSize: 14, fontWeight: '600'}}>
        {isPast ? 'All tasks completed' : '0 of 6 completed'}
      </Text>
      <View style={{rowGap: vh(2), marginVertical: vh(2)}}>
        {data.map((item, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <View style={{flexDirection: 'row', columnGap: vw(2)}}>
                <Image source={item.img} style={styles.img} />
                <View style={{justifyContent: 'space-between'}}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
              </View>
              <View style={[centerAll, styles.completeContainer]}>
                {completeIcon(vw(6), vw(6))}
                <Text style={styles.completeTxt}>Complete</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default ListTaskComponent;

const styles = StyleSheet.create({
  container: {flex: 1},
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    width: vw(12),
    height: vw(12),
    resizeMode: 'contain',
  },
  title: {
    color: '#1D2939',
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    color: '#3538CD',
    fontSize: 14,
    fontWeight: '400',
  },
  completeTxt: {
    color: '#039855',
    fontSize: 12,
    fontWeight: '500',
  },
  completeContainer: {
    backgroundColor: '#E5F7F0',
    borderRadius: vw(2),
    paddingHorizontal: vw(3),
  },
});
