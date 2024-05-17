import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox}>
      <View style={styles.checkboxContainer}>
        <View style={isChecked ? styles.checkboxChecked : styles.checkbox} />
        <Text style={styles.checkboxLabel}>I have read all the terms and conditions</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#333',
    marginRight: 10,
  },
  checkboxChecked: {
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#333',
  },
});

export default Checkbox;
