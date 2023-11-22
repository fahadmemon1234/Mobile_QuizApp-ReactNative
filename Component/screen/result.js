import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Title from '../title';

const Result = ({navigation, route}) => {
  const {score} = route.params;
  // console.log(params);

  const resultBanner = score > 20 ? require("../../Assets/Img/Home.png") : require("../../Assets/Img/Home.png");

  return (
    <>
      <View style={styles.Container}>
        <Title titleText="Results" />

        <Text style={styles.ScoreValue}>{score}</Text>

        <View style={styles.bannerContainer}>
          <Image
            source={resultBanner}
            style={styles.banner}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}>
          <Text style={styles.buttonText}>Go To Home</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  Container: {
    paddingHorizontal: 20,
    alignItems: 'center',
    height: '100%',
  },
  button: {
    width: '90%',
    backgroundColor: '#1A759F',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  ScoreValue: {
    color: 'black',
    fontSize: 24,
    fontWeight: '800',
    alignSelf: 'center',
  },
});
