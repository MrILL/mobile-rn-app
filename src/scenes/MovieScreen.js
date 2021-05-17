import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Movie from '../components/Movie';
import {SearchBar} from 'react-native-elements';
import {SwipeListView} from 'react-native-swipe-list-view';
import {TouchableOpacity} from 'react-native-gesture-handler';

const MovieScreen = ({data, deleteMovie, setMovies, navigation}) => {
  const [searchText, setSearchText] = useState('');

  const searchHandler = (userText) => {
    const API_KEY = '7e9fe69e';
    const requestUrl = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${userText}&page=1`;
    if (userText) {
      fetch(requestUrl)
        .then((response) => response.json())
        .then(({Search}) => setMovies(Search))
        .catch((err) => console.error(err));
    }
    setSearchText(userText);
  };

  const text = searchText.trim().toLowerCase();
  const searchList = data.length
    ? data.filter((item) => {
        return item.Title.toLowerCase().indexOf(text) >= 0;
      })
    : null;

  const renderItem = ({item}) => {
    const {imdbID, Poster, Title, Year, Type} = item;
    return (
      <Movie
        params={{imdbID, Poster, Title, Year, Type}}
        navigation={navigation}
      />
    );
  };

  const renderHiddenItem = ({item}) => {
    return (
      <View style={styles.hidden}>
        <TouchableOpacity
          style={styles.deleteBtn}
          onPress={() => deleteMovie(item.imdbID)}>
          <Text style={styles.backTextWhite}>Delete</Text>
        </TouchableOpacity>
      </View>
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
      {searchList ? (
        <SwipeListView
          recalculateHiddenLayout={true}
          data={searchList}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-styles.deleteBtn.width}
          keyExtractor={(movie) => movie.imdbID}
        />
      ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>No items found</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  hidden: {
    alignItems: 'center',
    backgroundColor: '#e72d27',
    flex: 1,
    flexDirection: 'row-reverse',
  },
  backTextWhite: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  deleteBtn: {
    alignItems: 'center',
    width: 75,
  },
});

export default MovieScreen;
