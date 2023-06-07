import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import {
  useCameraPermissions,
  launchCameraAsync,
  PermissionStatus,
} from 'expo-image-picker';

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

    if (
      cameraPermissionInformation.status === ImagePicker.PermissionStatus.DENIED
    ) {
      Alert.alert(
        'Insufficient permissions!, There is another issue after 2 tries to set camera permissions'
      );
      return false;
    }

    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();

    // if (!hasPermission) return;

    const image = launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
  };

  return (
    <View>
      <View></View>
      <Button title='Take Image' onPress={takeImageHandler} />
    </View>
  );
};

export default ImagePickerComponent;
