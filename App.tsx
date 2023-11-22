import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Home from './Component/screen/Home';
import Quiz from './Component/screen/quiz';
import Result from './Component/screen/result';


// import AppNavigator from './Component/Navigation/Navigation';

// import AppNavigator from './Config/Navigator';
import AppNavigator from './Config/Navigator';

function App() {
  return (
    <>
   <AppNavigator />
      {/* <AppNavigator /> */}
    </>
  );
}

export default App;
