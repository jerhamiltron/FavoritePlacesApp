import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';

const PlaceForm = () => {
  const [title, setTitle] = useState('');

  const changeTitleHandler = (text) => {
    setTitle(text);
  };

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
        <LocationPicker />
      </View>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingHorizontal: 24,
    marginVertical: 24,
  },

  label: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 4,
    color: Colors.primary500,
    textAlign: 'center',
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
