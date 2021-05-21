import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async (url) => {
  const response = await fetch(url);
  if (response) {
    const data = await response.json();
    await AsyncStorage.setItem(url, JSON.stringify(data));
    return data;
  }

  const cached = await AsyncStorage.getItem(url);
  if (cached) {
    return JSON.parse(cached);
  }
};

export default getData;
