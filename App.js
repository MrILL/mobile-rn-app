/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styleAlignCenter = {
  flex: 1,
  justifyContent: 'center',
  alignitems: 'center',
};

const Tab = createBottomTabNavigator();

const InfoScreen = () => {
  const styleTextCenter = {textAlign: 'center'};
  return (
    <View style={styleAlignCenter}>
      <Text style={styleTextCenter}>Стародубець Ілля</Text>
      <Text style={styleTextCenter}>ІП-83</Text>
      <Text style={styleTextCenter}>ЗК ІП-8522</Text>
    </View>
  );
};

const SecondItem = () => {
  const textStyle = {textALign: 'center'};
  return (
    <View style={styleAlignCenter}>
      <Text style={textStyle}>nothing...</Text>
    </View>
  );
};

const App = () => {
  return (
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
        <Tab.Screen name="Item 2" component={SecondItem} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
