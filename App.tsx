import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import theme from './src/theme';
import { cameraPage } from './src/pages/cameraPage';
import { cardInfo } from './src/pages/cardInfo';

// TODO: cardLists(cards), cardManager()

const navigation = useNavigation();

const Stack = createNativeStackNavigator({
  screens: {
    Home: cameraPage,
  },
});

const Navigation = createStaticNavigation(Stack);

export default function App(){
  return <Navigation></Navigation>
}