/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {LineChart} from 'react-native-svg-charts';

const Graph = ({fieldSize}) => {
  const f = (x) => Math.log(x);

  const viewBox = {x: 100, y: 100};

  const fieldDraw = () => {
    const viewBoxCenter = {x: viewBox.x / 2, y: viewBox.y / 2};

    const oxoy = `M${viewBoxCenter.x} 0 V${viewBox.y} M0 ${viewBoxCenter.y} H${viewBox.x} `;

    const arrowSize = ((viewBox.y + viewBox.x) / 2) * 0.07;
    const arrowY =
      `M${viewBoxCenter.x - arrowSize / 2} ${arrowSize} ` +
      `l${arrowSize / 2} ${-arrowSize} ` +
      `l${arrowSize / 2} ${arrowSize}`;
    const arrowX =
      `M${viewBox.x - arrowSize} ${viewBoxCenter.y - arrowSize / 2}` +
      `l${arrowSize} ${arrowSize / 2}` +
      `l${-arrowSize} ${arrowSize / 2}`;

    const oneSize = 5;
    const oneY =
      `M${viewBoxCenter.x - oneSize / 2} ${viewBox.y / 8 * 3}` +
      `h${oneSize}`;
    const oneX =
      `M${viewBox.x / 8 * 5} ${viewBoxCenter.y - oneSize / 2}` +
      `v${oneSize}`;

    return oxoy + arrowY + arrowX + oneY + oneX;
  };

  const data = Array(40)
    .fill(undefined)
    .map((_, i) => f(i * 0.1 + 0.018));

  const calcInset = (width, height) => {
    return {
      left: width / 2,
      top: height * 2.7 / 8,
    };
  };
  const [inset, setInset] = React.useState(calcInset(fieldSize.x, fieldSize.y));

  return (
    <View style={styles.graph}>
      <Svg
        style={styles.graphSvg}
        onLayout={(event) => {
          const {width, height} = event.nativeEvent.layout;
          setInset(calcInset(width, height));
        }}
        viewBox={`0 0 ${viewBox.x} ${viewBox.y}`}
      >
        <Path
          style={{
          }}
          d={fieldDraw()}
          stroke="black"
          strokeWidth="0.3"
        />
        <LineChart
          style={styles.graphSvgChart}
          data={data}
          contentInset={inset}
          svg={{stroke: '#2C75DC', strokeWidth: '2'}}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  graph: {
    alignItems: 'center',
    height: 350,
    width: 350,
    maxHeight: '80%',
  },
  graphSvg: {
    width: '100%',
    maxHeight: '100%',
    aspectRatio: 1,
    marginTop: 7,
  },
  graphSvgChart: {
    aspectRatio: 1,
  },
});

export default Graph;
