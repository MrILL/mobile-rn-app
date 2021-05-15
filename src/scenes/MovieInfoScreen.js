import React from 'react';
import {Image, ScrollView, StyleSheet, Text} from 'react-native';

const moviesInfo = {
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

const MovieInfoScreen = ({route}) => {
  const {annotation, imdbID, posterImg} = route.params;
  const info = moviesInfo[imdbID];

  const getValue = info ? (key) => info[key] : (key) => annotation[key];
  const renderLine = (key, value) =>
    key &&
    value && (
      <Text key={key} style={styles.text}>
        <Text style={styles.key}>{key + ': '}</Text>
        {value}
      </Text>
    );
  const renderSeparating = (key) => <Text key={key} />;

  // const res = [];
  // const linesOrder = [
  //   ['Title', 'Year', 'Genre'],
  //   ['Director', 'Actors'],
  //   ['Country', 'Language', 'Production', 'Released', 'Runtime'],
  //   ['Awards', 'Rating'],
  //   ['Plot'],
  // ];
  // linesOrder.forEach((arr, i) => {
  //   const block = arr.map((key) => renderLine(key, getValue(key)));
  //   res.push(...block, separate(i));
  // });

  const a = info
    ? [
        renderLine('Title', info.Title),
        renderLine('Year', info.Year),
        renderLine('Genre', info.Genre),
        renderSeparating(0),
        renderLine('Director', info.Director),
        renderLine('Actors', info.Actors),
        renderSeparating(1),
        renderLine('Country', info.Country),
        renderLine('Language', info.Language),
        renderLine('Production', info.Production),
        renderLine('Released', info.Released),
        renderLine('Runtime', info.Runtime),
        renderSeparating(2),
        renderLine('Awards', info.Awards),
        renderLine('Rating', info.Rating),
        renderSeparating(3),
        renderLine('Plot', info.Plot),
      ]
    : [
        renderLine('Title', annotation.Title),
        renderLine('Year', annotation.Year),
      ];

  return (
    <ScrollView>
      <Image style={styles.poster} source={posterImg} />
      {a}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
  key: {
    color: '#666',
  },
  poster: {
    alignSelf: 'center',
  },
});

export default MovieInfoScreen;
