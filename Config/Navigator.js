import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Component/screen/Home';
import Quiz from '../Component/screen/quiz';
import Result from '../Component/screen/result';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Quiz"
            component={Quiz}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Result"
            component={Result}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigator;
