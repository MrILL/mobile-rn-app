import React, {useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Header} from 'react-native-elements';
import * as ImagePicker from 'react-native-image-picker';
import ImageLayout from '../components/ImageLayout';
import getData from '../utils/persistData';

const ImageCamera = () => {
  const [imagesUri, setImagesUri] = useState([]);

  useEffect(() => {
    const API_KEY = '19193969-87191e5db266905fe8936d565';
    const REQUEST = 'small+animals';
    const COUNT = 18;
    const requestUrl = `https://pixabay.com/api/?key=${API_KEY}&q=${REQUEST}&image_type=photo&per_page=${COUNT}`;
    getData(requestUrl).then((responseData) => {
      const {hits} = responseData;
      if (hits) {
        setImagesUri(hits.map(({previewURL}) => previewURL));
      }
    });
  }, []);

  const addImageBtn = (
    <AntDesign
      onPress={() => {
        ImagePicker.launchImageLibrary(
          {
            mediaType: 'photo',
            ratio: [1, 1],
          },
          ({uri}) => {
            if (uri) {
              setImagesUri([...imagesUri, uri]);
            }
          },
        );
      }}
      name="plus"
      color="#000"
      size={25}
    />
  );

  return (
    <>
      <Header rightComponent={addImageBtn} />
      <ImageLayout data={imagesUri} />
    </>
  );
};

export default ImageCamera;
