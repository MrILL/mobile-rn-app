import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MovieScreen from './MovieScreen';
import MovieInfoScreen from './MovieInfoScreen';
import MovieAddScreen from './MovieAddScreen';

const Stack = createStackNavigator();

const MoviesScreen = () => {
  const [movieList, setMovieList] = useState(
    require('../../assets/Movies/MoviesList').Search,
  );

  const handleAddMovie = (movie) => setMovieList([...movieList, movie]);
  const handleDeleteMovie = (movieImdb) => {
    setMovieList(movieList.filter((m) => m.imdbID !== movieImdb));
  };

  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen
        name="List"
        options={({navigation}) => ({
          headerRight: () => {
            return (
              <AntDesign
                onPress={() => navigation.push('Add')}
                name="plus"
                color="#000"
                size={25}
                style={{marginRight: 10}}
              />
            );
          },
        })}>
        {(props) => (
          <MovieScreen
            {...props}
            data={movieList}
            deleteMovie={handleDeleteMovie}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="Info" component={MovieInfoScreen} />

      <Stack.Screen name="Add">
        {(props) => <MovieAddScreen {...props} addMovie={handleAddMovie} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default MoviesScreen;
