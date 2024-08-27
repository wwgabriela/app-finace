import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import AddRecord from '../pages/AddRecord';
import SignIn from '../pages/SignIn';
import Welcome from '../pages/Welcome';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddRecord" component={AddRecord} />
    </Stack.Navigator>
  );
}
