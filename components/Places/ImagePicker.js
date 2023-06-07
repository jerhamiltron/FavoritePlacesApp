import React, { useState } from 'react';
import { View, Alert, Image, StyleSheet, Text } from 'react-native';
import {
  useCameraPermissions,
  launchCameraAsync,
  PermissionStatus,
  launchImageLibraryAsync,
} from 'expo-image-picker';
import { Colors } from '../../constants/colors';
import OutlinedButton from './../UI/OutlinedButton';

const ImagePickerComponent = () => {
  const [pickedImage, setPickedImage] = useState();

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  const verifyPermissions = async () => {
    if (
      cameraPermissionInformation.status === PermissionStatus.UNDETERMINED ||
      cameraPermissionInformation.status === PermissionStatus.DENIED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient permissions!, You need to grant camera permissions to use this app.'
      );
      const permissionResponse2 = await requestPermission();
      return permissionResponse2.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient permissions!, There is another issue after 2 tries to set camera permissions'
      );
      return false;
    }

    return true;
  };

  const pickImageHandler = async () => {
    let result = await launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setPickedImage(result.assets[0]);
    } else {
      alert('You did no select an image');
    }
  };

  const takeImageHandler = async () => {
    // const hasPermission = await verifyPermissions();

    // if (!hasPermission) return;

    const image = launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
  };

  let imagePreview = (
    <Text style={styles.fallbackText}>No image taken yet...</Text>
  );

  if (pickedImage) {
    imagePreview = (
      <Image
        source={{ uri: pickedImage.uri }}
        style={{
          width: pickedImage.width / 10,
          height: pickedImage.height / 10,
          borderRadius: 8,
        }}
      />
    );
  }

  return (
    <View>
      <View style={styles.imageContainer}>{imagePreview}</View>
      <OutlinedButton
        icon='camera'
        color={Colors.primary500}
        size={24}
        onPress={pickImageHandler}
      >
        Pick Image
      </OutlinedButton>
      {/* <Button title='Take Image' onPress={takeImageHandler} /> */}
    </View>
  );
};

export default ImagePickerComponent;

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },

  fallbackText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    margin: 20,
  },
});
