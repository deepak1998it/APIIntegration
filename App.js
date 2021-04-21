/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Api_Integration from './Screens/Api_integration'



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView >
      <Api_Integration />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
