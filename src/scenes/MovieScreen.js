import React, {useState} from 'react';
import {FlatList} from 'react-native';
import data from '../../assets/Movies/MoviesList';
import Movie from '../components/Movie';
import {SearchBar} from 'react-native-elements';

//TODO: move getting movies from screen to the Movie or MovieInfoScreen component
const movies = {
  tt0076759: require('../../assets/Movies/tt0076759.json'),
  tt0080684: require('../../assets/Movies/tt0080684.json'),
  tt0086190: require('../../assets/Movies/tt0086190.json'),
  tt0120915: require('../../assets/Movies/tt0120915.json'),
  tt0121765: require('../../assets/Movies/tt0121765.json'),
  tt0121766: require('../../assets/Movies/tt0121766.json'),
  tt0796366: require('../../assets/Movies/tt0796366.json'),
  tt2488496: require('../../assets/Movies/tt2488496.json'),
  tt2527336: require('../../assets/Movies/tt2527336.json'),
  tt3748528: require('../../assets/Movies/tt3748528.json'),
};

const MovieScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');

  const searchHandler = (userText) => {
    setSearchText(userText);
  };

  const text = searchText.trim().toLowerCase();
  const searchList = data.Search.filter(({Title}) => {
    return Title.toLowerCase().indexOf(text) >= 0;
  });

  const renderItem = ({item}) => {
    const {imdbID, Poster, Title, Year, Type} = item;
    return (
      <Movie
        params={{imdbID, Poster, Title, Year, Type, info: movies[imdbID]}}
        navigation={navigation}
      />
    );
  };

  return (
    <>
      <SearchBar
        placeholder="Search"
        onChangeText={searchHandler}
        value={searchText}
        lightTheme={true}
      />
      <FlatList
        data={searchList}
        renderItem={renderItem}
        keyExtractor={(movie) => movie.imdbID}
      />
    </>
  );
};

export default MovieScreen;
