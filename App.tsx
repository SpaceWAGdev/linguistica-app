import React from 'react';
import {  NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CameraPage } from './src/pages/cameraPage';
import { cardInfo } from './src/pages/cardInfo';

import 'react-native-worklets-core';
import { Card } from './src/card';

// TODO: cardLists(cards), cardManager()

export type RootStackParamList = {
  CameraPage: undefined;  // CameraPage does not take any params
  cardInfo: {card: Card};  // cardInfo screen expects a `Card` param
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CameraPage">
        <Stack.Screen name="CameraPage" component={CameraPage} />
        <Stack.Screen name="cardInfo" component={cardInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}