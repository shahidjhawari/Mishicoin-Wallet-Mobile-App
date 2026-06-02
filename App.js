import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import {THEME} from './src/utils/theme';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={THEME.gradient[0]} />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
