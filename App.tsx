/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { Provider } from 'react-redux';
import MyStack from './router/mystack';
import { store } from './store/store';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = StyleSheet.create({
    backgroundStyle: {
      backgroundColor: isDarkMode ? '#ffffff10' : '#fff',
      flex: 1
    }
  });

  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
};


export default App;
