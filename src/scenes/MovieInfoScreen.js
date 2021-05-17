import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const MovieInfoScreen = ({route}) => {
  const {annotation, imdbID} = route.params;
  // const info = moviesInfo[imdbID];
  const [info, setInfo] = useState();

  useEffect(() => {
    const API_KEY = '7e9fe69e';
    const requestUrl = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`;
    fetch(requestUrl)
      .then((response) => response.json())
      .then((movie) => setInfo(movie))
      .catch((err) => console.error(err));
  }, []);
  // const getValue = info ? (key) => info[key] : (key) => annotation[key];
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
  // console.log(info);
  // console.log(info.Poster);

  console.log(info && info.Poster);

  return info ? (
    <ScrollView>
      {info && info.Poster && (
        <Image style={styles.poster} source={{uri: info.Poster}} />
      )}
      {info
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
          ]}
    </ScrollView>
  ) : (
    <View style={styles.activityContainer}>
      <ActivityIndicator size="large" color="#2589dc" />
    </View>
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
    width: 300,
    height: 500,
    alignSelf: 'center',
  },
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default MovieInfoScreen;
