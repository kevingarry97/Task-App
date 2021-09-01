import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/routes/appNavigator';
import AuthNavigator from './src/routes/authNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
