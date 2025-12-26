import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ExerciseScreen from './screens/ExerciseScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'VerbFlow' }} />
        <Stack.Screen
          name="Exercise"
          component={ExerciseScreen}
          options={({ route }) => ({ title: route.params.exerciseTitle })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
