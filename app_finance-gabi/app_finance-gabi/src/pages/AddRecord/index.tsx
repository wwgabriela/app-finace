import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../../services/supabase';
import { format, isValid, parse } from 'date-fns';
import styles from './style';

export default function AddRecord() {
  const [label, setLabel] = useState('');
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState(0); // 0 for expenses, 1 for income

  const navigation = useNavigation();

  const handleAddRecord = async () => {
    if (!label || !value || !date) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    const parsedDate = parse(date, 'yyyy-MM-dd', new Date());
    if (!isValid(parsedDate)) {
      Alert.alert('Error', 'Invalid date format. Use yyyy-MM-dd.');
      return;
    }
    const formattedDate = format(parsedDate, 'yyyy-MM-dd');

    const { data, error } = await supabase
      .from('account_records')
      .insert([
        { label, value: parseFloat(value), date: formattedDate, type },
      ]);

    if (error) {
      Alert.alert('Error', 'Failed to add record.');
      console.error('Add record error:', error);
    } else {
      Alert.alert('Success', 'Record added successfully.');
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Record</Text>
      
      <Text style={styles.label}>Label</Text>
      <TextInput
        style={styles.input}
        onChangeText={setLabel}
        value={label}
        placeholder="Label"
      />

      <Text style={styles.label}>Value</Text>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Value"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Date</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDate}
        value={date}
        placeholder="Date (e.g. 2024-01-01)"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleAddRecord}
      >
        <Text style={styles.buttonText}>Add Record</Text>
      </TouchableOpacity>
    </View>
  );
}
