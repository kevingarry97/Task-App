import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SigninScreen from '../app/screens/signinScreen';
import SignupScreen from '../app/screens/signupScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SignUp" component={SignupScreen} />
    <Stack.Screen name="SignIn" component={SigninScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
