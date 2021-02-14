/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg from 'react-native-svg';
import {PieChart} from 'react-native-svg-charts';

const Diagram = ({fieldSize}) => {
  const data = [
    {part: 10, color: 'yellow'},
    {part: 20, color: 'green'},
    {part: 25, color: 'blue'},
    {part: 5, color: 'red'},
    {part: 40, color: 'lightblue'},
  ];

  const pieData = data.map(({part, color}, i) => (
    {
      value: part,
      svg: {fill: color},
      key: i,
    }
  ));

  return  (
    <View style={styles.diagram}>
      <Svg
        style={styles.diagramSvg}
        viewBox={`0 0 ${fieldSize.x} ${fieldSize.y}`}
      >
        <PieChart
          style={styles.diagramSvgChart}
          data={pieData}
          padAngle={0}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  diagram: {
    alignItems: 'center',
    height: 350,
    width: 350,
    maxHeight: '80%',
  },
  diagramSvg: {
    width: '100%',
    maxHeight: '100%',
    aspectRatio: 1,
    marginTop: 7,
  },
  diagramSvgChart: {
    aspectRatio: 1,
  },
});

export default Diagram;
