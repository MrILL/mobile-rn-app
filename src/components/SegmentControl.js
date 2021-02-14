import React from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const SegmentedTab = ({onSelect, value, selected}) => {
  return (
    <TouchableOpacity style={styles.tab} onPress={onSelect}>
      <Text style={selected && styles.tabTextActive}> {value} </Text>
    </TouchableOpacity>
  );
};

const SegmentedControl = ({onChange, selectedIndex = 0, values}) => {
  const [segmentWidth, setSegmentWidth] = React.useState(0);
  const sliding = React.useRef(new Animated.Value(0)).current;

  const handleChange = (index) => {
    const event = {
      nativeEvent: {
        selectedSegmentIndex: index,
      },
    };
    onChange(event);
  };

  React.useEffect(() => {
    Animated.timing(sliding, {
      toValue: segmentWidth * selectedIndex,
      duration: 250,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [sliding, segmentWidth, selectedIndex]);

  const animatedSliderStyle = {
    ...styles.slider,
    transform: [{translateX: sliding}],
    width: segmentWidth - 4,
  };

  return (
    <View
      style={styles.container}
      onLayout={(event) => {
        const {width} = event.nativeEvent.layout;
        const newSegmentWidth = width / values.length;
        if (newSegmentWidth !== segmentWidth) {
          sliding.setValue(newSegmentWidth * selectedIndex);
          setSegmentWidth(newSegmentWidth);
        }
      }}>
      <View style={styles.tabContainer}>
        {values.map((v, i) => (
          <SegmentedTab
            key={i}
            selected={selectedIndex === i}
            value={v}
            onSelect={() => handleChange(i)}
          />
        ))}
      </View>
      <Animated.View style={animatedSliderStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 200,
    backgroundColor: '#E8E8E8',
    borderRadius: 9,
  },
  tabContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    elevation: 5,
  },
  slider: {
    position: 'absolute',
    borderRadius: 10,
    top: 2,
    bottom: 2,
    right: 2,
    left: 2,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.1)',
    elevation: 3,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  tabTextActive: {
    fontWeight: '700',
  },
});

export default SegmentedControl;
