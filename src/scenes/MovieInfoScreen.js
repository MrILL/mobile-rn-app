import React from 'react';
import {Image, ScrollView, StyleSheet, Text} from 'react-native';

const MovieInfoScreen = ({route}) => {
  //TODO clear this shit
  //TODO also push here another basic parameters so if file not found - it'll use these parameters and output something
  const {annotation, info, posterImg} = route.params;

  const getValue = info ? (key) => info[key] : (key) => annotation[key];
  const line = (key, value) =>
    key && value && (
      <Text key={key} style={styles.text}>
        <Text style={styles.key}>{key + ': '}</Text>
        {value}
      </Text>
    );
  const separate = (key) => <Text key={key} />;

  // const res = [];
  // const linesOrder = [
  //   ['Title', 'Year', 'Genre'],
  //   ['Director', 'Actors'],
  //   ['Country', 'Language', 'Production', 'Released', 'Runtime'],
  //   ['Awards', 'Rating'],
  //   ['Plot'],
  // ];
  // linesOrder.forEach((arr, i) => {
  //   const block = arr.map((key) => line(key, getValue(key)));
  //   res.push(...block, separate(i));
  // });

  const a = info
    ? [
        line('Title', info.Title),
        line('Year', info.Year),
        line('Genre', info.Genre),
        separate(0),
        line('Director', info.Director),
        line('Actors', info.Actors),
        separate(1),
        line('Country', info.Country),
        line('Language', info.Language),
        line('Production', info.Production),
        line('Released', info.Released),
        line('Runtime', info.Runtime),
        separate(2),
        line('Awards', info.Awards),
        line('Rating', info.Rating),
        separate(3),
        line('Plot', info.Plot),
      ]
    : [
        line('Title', annotation.Title),
        line('Year', annotation.Year),
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
