import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, Text, StyleSheet} from 'react-native';

type ButtonProps = TouchableOpacityProps

export function Button({...rest} : ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} {...rest} activeOpacity={0.7}>
      <Text style={styles.buttonText} >
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
