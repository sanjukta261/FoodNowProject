import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {COLORS,SIZE} from '@constants/Theme';
import PrimaryButton from '@components/PrimaryButton';

const EventForm = ({ eventData, onEventDataChange, onSave }) => {
  const fields = [
    { key: 'client', label: 'Client', placeholder: 'Client name' },
    { key: 'date', label: 'Date of Performance', placeholder: 'Enter date' },
    { key: 'time', label: 'Time', placeholder: 'Enter time' },
    { key: 'venue', label: 'Venue', placeholder: 'Event venue' },
    { key: 'payment', label: 'Payment', placeholder: 'Payment amount' },
    { key: 'Genre', label: 'Genre', placeholder: 'Enter Genre' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Show/Note</Text>
      {fields.map(field => (
        <View key={field.key} style={styles.inputGroup}>
          <Text style={styles.label}>{field.label}</Text>
          <TextInput
            placeholder={field.placeholder}
            value={eventData[field.key] || ''}
            onChangeText={(value) => onEventDataChange(field.key, value)}
            style={styles.input}
          />
        </View>
      ))}
      <PrimaryButton text={'Add Show'} size={'large'} onPress={onSave}  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 24,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    marginBottom: 20,

  },
  heading: {
    fontSize: SIZE.large,
    fontWeight: '600',
    color: COLORS.secondary,
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 12,
  },
  label: {
    fontSize: SIZE.medium,
    fontWeight: '500',
    marginBottom: 4,
    color: COLORS.secondary,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 8,
    padding: 8,
  },
});

export default EventForm;
