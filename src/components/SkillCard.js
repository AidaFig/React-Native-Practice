import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function SkillCard({skill}) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    borderRadius: 50,
    backgroundColor: '#1F1e25',
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  textSkill: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
