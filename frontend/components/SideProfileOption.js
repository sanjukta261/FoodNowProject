import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {COLORS,SIZE} from '@constants/Theme';

const SideProfileOption = ({icon, label, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
};

export default SideProfileOption;

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  label: {
    fontSize: SIZE.large,
    fontWeight: 'bold',
    marginLeft: 20,

  }

});