/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SegmentedControl from '../components/SegmentControl';
import Graph from '../components/Graph';
import Diagram from '../components/Diagram';


const DrawingScreen = () => {
  const fieldSize = {x: 300, y: 300};

  const [activeScreen, setActiveScreen] = useState(0);
  return (
    <View style={styles.container}>
      <SegmentedControl
        values={['Graph', 'Diagram']}
        selectedIndex={activeScreen}
        onChange={(event) => {
          const screenIndex = event.nativeEvent.selectedSegmentIndex;
          setActiveScreen(screenIndex);
        }}
      />
      {
        [
          <Graph fieldSize={fieldSize} />,
          <Diagram fieldSize={fieldSize} />,
        ][activeScreen]
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DrawingScreen;
