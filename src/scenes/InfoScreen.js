import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const InfoScreen = () => {
  const styleTextCenter = {textAlign: 'center'};
  return (
    <View style={styles.View__alignCenter}>
      <Text style={styleTextCenter}>Стародубець Ілля</Text>
      <Text style={styleTextCenter}>ІП-83</Text>
      <Text style={styleTextCenter}>ЗК ІП-8522</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  View__alignCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InfoScreen;
