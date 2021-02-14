import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

const posters = {
  'Poster_01.jpg': require('../../assets/Posters/Poster_01.jpg'),
  'Poster_02.jpg': require('../../assets/Posters/Poster_02.jpg'),
  'Poster_03.jpg': require('../../assets/Posters/Poster_03.jpg'),
  'Poster_05.jpg': require('../../assets/Posters/Poster_05.jpg'),
  'Poster_06.jpg': require('../../assets/Posters/Poster_06.jpg'),
  'Poster_07.jpg': require('../../assets/Posters/Poster_07.jpg'),
  'Poster_08.jpg': require('../../assets/Posters/Poster_08.jpg'),
  'Poster_10.jpg': require('../../assets/Posters/Poster_10.jpg'),
};

const Movie = ({Poster, Title, Year, Type}) => {
  return (
    <View style={styles.movie}>
      <Image style={styles.poster} source={posters[Poster]} />
      <View style={styles.info}>
        <Text style={styles.infoText}>{Title}</Text>
        {Year ? <Text style={styles.infoText}>{Year}</Text> : null}
        {Type ? <Text style={styles.infoText}>{Type}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  movie: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: '#d8d8d8',
  },
  poster: {
    width: 80,
    height: 115,
    resizeMode: 'contain',
    marginRight: 15,
  },
  info: {
    flexShrink: 1,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default Movie;