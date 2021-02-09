/* eslint-disable no-bitwise */
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

import TimeIS from './TimeIS.js';

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

const SecondItemScreen = () => {
  const textStyle = {textAlign: 'center'};
  const t1 = TimeIS.fromValues(23, 59, 59);
  const t2 = TimeIS.fromValues(12, 0, 1);
  const t3 = TimeIS.fromZero();
  const t4 = TimeIS.fromValues(0, 0, 1);
  const t5 = TimeIS.fromDate(new Date());
  return (
    <View style={styleAlignCenter}>
      <Text style={textStyle}>From Zero: {t3.getTime()}</Text>
      <Text style={textStyle}>From Values: {t4.getTime()}</Text>
      <Text style={textStyle}>From Date: {t5.getTime()}</Text>
      <Text style={textStyle}>
        {t1.getTime()} + {t2.getTime()} = {t1.add(t2).getTime()}
      </Text>
      <Text style={textStyle}>
        {t3.getTime()} - {t4.getTime()} = {t3.sub(t4).getTime()}
      </Text>
      <Text style={textStyle}>{t5.getTime()}</Text>
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
        <Tab.Screen name="Item 2" component={SecondItemScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
