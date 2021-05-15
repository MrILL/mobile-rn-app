import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const MovieAddScreen = ({addMovie, navigation}) => {
  const [input, setText] = React.useState({
    Title: '',
    Type: '',
    Year: '',
  });

  const handlePress = () => {
    addMovie({...input, imdbID: input.Title});
    navigation.navigate('List');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Title</Text>
      <TextInput
        style={styles.textInput}
        value={input.Title}
        onChangeText={(Title) => setText({...input, Title})}
      />

      <Text style={styles.text}>Type</Text>
      <TextInput
        style={styles.textInput}
        value={input.Type}
        onChangeText={(Type) => setText({...input, Type})}
      />

      <Text style={styles.text}>Year</Text>
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        value={input.Year}
        onChangeText={(Year) => setText({...input, Year})}
      />

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.text}>Add</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const fontSizeDefault = 18;
const styles = StyleSheet.create({
  container: {
    margin: 19,
  },
  text: {
    fontSize: fontSizeDefault,
  },
  textInput: {
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: 'gray',
    fontSize: fontSizeDefault,
    borderWidth: 1,
  },
  button: {
    marginTop: 15,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    // fontSize: fontSizeDefault + 5,
    // height: 50,
  },
});

export default MovieAddScreen;
