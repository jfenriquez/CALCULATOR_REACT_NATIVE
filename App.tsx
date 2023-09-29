/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
//import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import CalculadoraScreeen from './src/screens/CalculadoraScreen';
import {styles} from './src/theme/appTheme';
function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" barStyle="light-content"></StatusBar>
      <CalculadoraScreeen></CalculadoraScreeen>
    </SafeAreaView>
  );
}

export default App;
