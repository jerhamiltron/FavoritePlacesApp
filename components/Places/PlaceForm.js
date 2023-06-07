import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TextInput, View, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import ImagePicker from './ImagePicker';

const PlaceForm = () => {
  const [title, setTitle] = useState('');

  const changeTitleHandler = (text) => {
    setTitle(text);
  };

  useEffect(() => {
    console.log('title changed');
  }, []);

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={title}
        />
        <ImagePicker />
      </View>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },

  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary700,
  },

  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
