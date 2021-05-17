/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, View, Dimensions, SafeAreaView} from 'react-native';
import {StyleSheet, Image} from 'react-native';

const positionRule = (index, screenWidth) => {
  const unitW = screenWidth / 5;
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
    top: style.top + gap + unitW * 4 * Math.floor(index / positions.length),
  };

  return result;
};

const ImageLayout = ({data}) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          {data &&
            data.map((uri, i) => (
              <Image
                key={uri}
                style={[styles.img, positionRule(i, screenWidth)]}
                source={{uri}}
              />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    position: 'absolute',
    resizeMode: 'contain',
    backgroundColor: 'grey',
  },
});

export default ImageLayout;
