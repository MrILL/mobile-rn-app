import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const MovieAddScreen = ({navigation}) => {
  const [input, setText] = React.useState({
    title: '',
    type: '',
    year: '',
  });

  const handlePress = () => {
    alert('added! suckama!' + input.title + input.type + input.year);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Title</Text>
      <TextInput
        style={styles.textInput}
        value={input.title}
        onChangeText={(title) => setText({...input, title})}
      />

      <Text style={styles.text}>Type</Text>
      <TextInput
        style={styles.textInput}
        value={input.type}
        onChangeText={(type) => setText({...input, type})}
      />

      <Text style={styles.text}>Year</Text>
      <TextInput
        style={styles.textInput}
        value={input.year}
        onChangeText={(year) => setText({...input, year})}
      />

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.text}>Add</Text>
      </TouchableOpacity>
    </View>
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
