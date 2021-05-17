/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import InfoScreen from './src/scenes/InfoScreen';
import DrawingScreen from './src/scenes/DrawingScreen';
import MoviesScreen from './src/scenes/MoviesScreen';
import ImageCamera from './src/scenes/ImageCamera';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <View style={styles.main}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={InfoScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Drawing"
            component={DrawingScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="pen" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Movies List"
            component={MoviesScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="filmstrip"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Image Camera"
            component={ImageCamera}
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="image"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
  },
});

export default App;
