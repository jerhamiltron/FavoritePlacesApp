import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OutlinedButton from '../UI/OutlinedButton';
import { Colors } from '../../constants/colors';

const LocationPicker = () => {
  const getLocationHandler = () => {};

  const pickOnMapHandler = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose the location</Text>
      <View style={styles.mapContainer}></View>
      <View style={styles.actions}>
        <OutlinedButton
          icon='location'
          color={Colors.primary500}
          size={24}
          onPress={getLocationHandler}
        >
          Locate User
        </OutlinedButton>
        <OutlinedButton
          icon='map'
          color={Colors.primary500}
          size={24}
          onPress={pickOnMapHandler}
        >
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderTopColor: Colors.primary200,
    borderTopWidth: 2,
  },

  title: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary500,
    textAlign: 'center',
  },

  mapContainer: {
    width: '100%',
    height: 300,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 8,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
