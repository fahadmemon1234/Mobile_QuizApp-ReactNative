import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Title({ titleText }) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{titleText}</Text>
      </View>
    </>
  );
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: 'black',
    fontWeight: '700',
    color: '#30d2c1',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
});
