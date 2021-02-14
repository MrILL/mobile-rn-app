import React from 'react';
import {FlatList} from 'react-native';
import data from '../../assets/MoviesList';
import Movie from '../components/Movie';

const MovieScreen = () => {
  const renderItem = ({item}) => {
    const {Title, Poster, Type, Year} = item;
    return <Movie Poster={Poster} Title={Title} Year={Year} Type={Type} />;
  };

  return (
    <FlatList
      data={data.Search}
      renderItem={renderItem}
      keyExtractor={(movie) => movie.imdbID}
    />
  );
};

export default MovieScreen;
