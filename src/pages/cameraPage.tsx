import { StatusBar } from 'expo-status-bar';

import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import React, { useState } from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Button, darkColors, Icon} from '@rneui/base';
import theme from '../theme';

export function cameraPage() {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
  
    if (!permission) {
      // Camera permissions are still loading.
      return <View/>;
    }
  
    if (!permission.granted) {
      // Camera permissions are not granted yet.
      return (
        <View style={styles.container}>
          <Text style={styles.message}>We need your permission to show the camera</Text>
          <Button onPress={requestPermission} title="grant permission" />
        </View>
      );
    }
  
    function toggleCameraFacing() {
      setFacing((current: string) => (current === 'back' ? 'front' : 'back'));
    }
  
    return (
      <View style={styles.container}>
        <CameraView style={styles.camera} facing={facing}>
          <View>
              <Button color={theme.lightColors?.primary} onPress={toggleCameraFacing}>
                <Icon name='cameraswitch' color='#fff'/>
              </Button>
          </View>
        </CameraView>
      </View>
    );
  
    
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    message: {
      textAlign: 'center',
      paddingBottom: 10,
    },
    camera: {
      flex: 1,
    }
  });