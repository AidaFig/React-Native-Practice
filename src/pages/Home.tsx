import React, {useState, useEffect} from 'react';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';
import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }

  useEffect(() => {
    console.log('useEffect executado!');
  }, []);

  useEffect(() => {
    const currentHour = new Date().getHours();
    console.log(currentHour);

    if (currentHour < 12) {
      setGreeting('Good Morning!');
    } else if (currentHour > 12 && currentHour < 18) {
      setGreeting('Good Afternoon!');
    } else {
      setGreeting('Good Envening');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Aida</Text>
      <Text style={styles.greeting}>{greeting}</Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button onPress={handleAddNewSkill} />
      <Text
        style={[
          styles.title,
          {marginVertical: 50, textDecorationLine: 'underline'},
        ]}>
        My Skills:
      </Text>
      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => <SkillCard skill={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1e25',
    color: '#ffffff',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
  },
  greeting: {
    marginTop: 10,
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});