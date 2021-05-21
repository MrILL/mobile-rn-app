import React from 'react';
import {ActivityIndicator, StyleSheet, View, Dimensions} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';

const getUnitWidth = (screenWidth) => {
  return screenWidth / 5;
};

const positionRule = (index, screenWidth) => {
  if (index === undefined || screenWidth === undefined) {
    return;
  }
  const unitW = getUnitWidth(screenWidth);
  const gap = 3;

  const positions = [
    {
      top: 0,
      left: 0,
      width: unitW * 3,
      height: unitW * 3,
    },
    {
      top: 0,
      left: unitW * 3,
      width: unitW * 2,
      height: unitW * 2,
    },
    {
      top: unitW * 2,
      left: unitW * 3,
      width: unitW * 2,
      height: unitW * 2,
    },
    {
      top: unitW * 3,
      left: 0,
      width: unitW,
      height: unitW,
    },
    {
      top: unitW * 3,
      left: unitW,
      width: unitW,
      height: unitW,
    },
    {
      top: unitW * 3,
      left: unitW * 2,
      width: unitW,
      height: unitW,
    },
  ];
  const style = positions[index % positions.length];
  const result = {
    ...style,
    width: style.width ? style.width - gap * 2 : 0,
    height: style.height ? style.height - gap * 2 : 0,
    left: style.left + gap,
  };
  return result;
};

const getBlockHeight = (groupSize, screenWidth) => {
  const unitW = getUnitWidth(screenWidth);
  if (groupSize === 0) {
    return 0;
  } else if (groupSize > 2) {
    return unitW * 4;
  } else {
    return unitW * 3;
  }
};

const ImageLayout = ({data}) => {
  const screenWidth = Dimensions.get('window').width;
  const blockElements = 6;
  const groupSize =
    Math.floor(data.length / blockElements) +
    (data.length % blockElements > 0 ? 1 : 0);

  const groups = Array(groupSize);
  for (let i = 0; i < groupSize - 1; i++) {
    groups[i] = data.slice(
      i * blockElements,
      i * blockElements + blockElements,
    );
  }
  groups[groupSize - 1] = data.slice((groupSize - 1) * blockElements);

  if (groups.length) {
    return (
      <FlatList
        data={groups}
        renderItem={({item, index}) => (
          <View
            key={`${index}`}
            style={{
              width: screenWidth,
              height: getBlockHeight(item.length, screenWidth),
            }}>
            {item.map((uri, i) => (
              <FastImage
                key={uri}
                style={[
                  styles.img,
                  positionRule(index * blockElements + i, screenWidth),
                ]}
                source={{uri}}
                resizeMode={FastImage.resizeMode.contain}
              />
            ))}
          </View>
        )}
        keyExtractor={(_, i) => `${i}`}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#2589dc" />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  img: {
    width: 100,
    position: 'absolute',
    resizeMode: 'contain',
    backgroundColor: 'grey',
  },
});

export default ImageLayout;
