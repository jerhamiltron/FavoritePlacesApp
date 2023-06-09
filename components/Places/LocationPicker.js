import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from 'expo-location';

import OutlinedButton from '../UI/OutlinedButton';
import { Colors } from '../../constants/colors';
import { getMapPreview } from '../../utils/location';

const LocationPicker = () => {
  const [location, setLocation] = useState(null);
  const [locationPermission, requestPermission] = useForegroundPermissions();

  const verifyPermissions = async () => {
    if (
      locationPermission.status === PermissionStatus.UNDETERMINED ||
      locationPermission.status === PermissionStatus.DENIED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (locationPermission.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant location permissions for this app'
      );
      return false;
    }
    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    setLocation({
      lat: location.coords.latitude,
      long: location.coords.longitude,
    });
  };

  const pickOnMapHandler = () => {};

  let locationPreview = <Text>No location picked yet...</Text>;

  if (location) {
    locationPreview = (
      <Image
        style={styles.image}
        source={{ uri: getMapPreview(location.lat, location.long) }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose the location</Text>
      <View style={styles.mapContainer}>{locationPreview}</View>
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

  image: {
    width: '100%',
    height: 300,
  },
});
