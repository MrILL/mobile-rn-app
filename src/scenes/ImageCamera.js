import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Header} from 'react-native-elements';
import * as ImagePicker from 'react-native-image-picker';
import ImageLayout from '../components/ImageLayout';

const ImageCamera = () => {
  const [imagesUri, setImagesUri] = useState([]);

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
