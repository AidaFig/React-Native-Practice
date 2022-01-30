import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function Button({onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText} activeOpacity={0.7}>
        Add
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
