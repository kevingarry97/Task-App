import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListingScreen from '../app/screens/listingScreen';
import CreateListingScreen from '../app/screens/createListingScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingScreen} />
    <Stack.Screen name="CreateListings" component={CreateListingScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
