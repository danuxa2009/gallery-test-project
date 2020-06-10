import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GalleryScreen from './screens/GalleryScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
     <NavigationContainer>
        <Stack.Navigator initialRouteName='Gallery'>
          <Stack.Screen
            name='Home Gallery'
            component={GalleryScreen}
          />
          {/* <Stack.Screen name='Image' component={ImageScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer> 
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
