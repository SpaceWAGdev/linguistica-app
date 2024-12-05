import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import 'react-native-worklets-core';

import theme from './src/theme';
import { CameraPage } from './src/pages/cameraPage';
import { cardInfo } from './src/pages/cardInfo';

// TODO: cardLists(cards), cardManager()

const Stack = createNativeStackNavigator({
  screens: {
    'Camera Page': CameraPage,
    CardInfo: cardInfo
  },
});

const Navigation = createStaticNavigation(Stack);

export default function App(){
  return <Navigation></Navigation>
}