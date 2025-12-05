import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import {COLORS} from '../constants/Theme';
 
const Header = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.iconButton}>
        <AntDesign name="arrow-left" size={24} color={COLORS.secondary} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={{ width: 40 }} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: 'white',
  },
  iconButton: {
    padding: 8,
    borderRadius: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.secondary,
  },
});

export default Header;
