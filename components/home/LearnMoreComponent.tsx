/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LearnMoreComponentProps} from '../../services/typeProps';
import {vw} from '../../services/styleSheets';

const LearnMoreComponent: React.FC<LearnMoreComponentProps> = ({
  description,
  img,
  index,
  label,
}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.label}>{label}</Text>
        <Image source={img} style={{resizeMode: 'cover'}} />
      </View>
    </View>
  );
};

export default LearnMoreComponent;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#667085',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    padding: vw(5),
  },
  label: {
    color: '#2D31A6',
    fontSize: 16,
    fontWeight: '600',
  },
});
