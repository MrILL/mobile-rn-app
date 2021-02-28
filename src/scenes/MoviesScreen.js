import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MovieScreen from './MovieScreen';
import MovieInfoScreen from './MovieInfoScreen';
import MovieAddScreen from './MovieAddScreen';

const Stack = createStackNavigator();

const MoviesScreen = () => {
  //TODO here must be short films
  //take it from List
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen
        name="List"
        component={MovieScreen}
        options={({navigation}) => ({
          headerRight: (props) => {
            //TODO: make onPress creating new film
            return (
              <AntDesign
                onPress={() => navigation.push('Add')}
                name="plus"
                color="#000"
                size={25}
                style={{margin: 10}}
              />
            );
          },
        })}
      />
      <Stack.Screen name="Info" component={MovieInfoScreen} />
      <Stack.Screen name="Add" component={MovieAddScreen} />
    </Stack.Navigator>
  );
};

export default MoviesScreen;
