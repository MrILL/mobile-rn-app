import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';

const normalisedSource = (uri) => {
  const normalisedSrc =
    typeof uri === 'string' && !uri.split('http')[1] ? null : uri;
  return normalisedSrc;
};

const Movie = React.forwardRef(({navigation, params}, ref) => {
  const {imdbID, Poster, Title, Year, Type} = params;
  return (
    <TouchableHighlight
      ref={ref}
      onPress={() =>
        navigation.push('Info', {
          annotation: {Poster, Title, Year, Type},
          imdbID,
          posterImg: Poster,
        })
      }>
      <View style={styles.movie}>
        <FastImage
          style={styles.poster}
          source={{uri: normalisedSource(Poster)}}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={styles.info}>
          <Text style={styles.infoText}>{Title}</Text>
          {Year ? <Text style={styles.infoText}>{Year}</Text> : null}
          {Type ? <Text style={styles.infoText}>{Type}</Text> : null}
        </View>
      </View>
    </TouchableHighlight>
  );
});

const styles = StyleSheet.create({
  movie: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: '#d8d8d8',
    backgroundColor: 'white',
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
