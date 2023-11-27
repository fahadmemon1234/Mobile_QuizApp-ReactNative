import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Title from '../title';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Result = ({navigation, route}) => {
  const {score} = route.params;
  const {totalCorrectAnswers} = route.params;

  return (
    <>
      <View style={styles.Container}>
        <Title titleText="Results" />

        <Text style={styles.TotalText}>Total correct answers</Text>
        <Text style={styles.TotalCorrect}>
          {totalCorrectAnswers} out of 30 Questions
        </Text>

        <View style={styles.bannerContainer}>
          <LinearGradient
            colors={['#7554fe', '#5106a4']} // Light purple to dark purple gradient
            style={styles.gradientContainer}>
            {/* Your content goes here */}
            <Text style={styles.boxText}>Your final score is</Text>

            <View style={{paddingTop: 30}}>
              <LinearGradient
                colors={['#FEDD00', '#FFB81C']} // Light purple to dark purple gradient
                style={styles.Circle}>
                <Text style={styles.ScoreValue}>{score}</Text>
              </LinearGradient>
            </View>
          </LinearGradient>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}>
          <Text style={[styles.buttonText, { alignSelf: 'center' }]}>
            <Icon
              name="sync-alt"
              size={20}
              style={{color: 'white', marginRight: 5}}
            />
            <Text>  </Text>
            <Text style={{marginLeft: 5}}>Try Again</Text>
          </Text>
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
    height: 370,
  },
  Container: {
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: '#20164f',
  },
  button: {
    position: 'absolute',
    bottom: 20, // Adjust this value as needed
    width: '90%',
    backgroundColor: '#7554fe',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 23,
    fontWeight: '600',
    color: 'white',
    justifyContent:'space-between',
  },
  ScoreValue: {
    color: 'white',
    fontSize: 80,
    fontWeight: '800',
    alignSelf: 'center',
    textShadowColor: 'black',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 2,
  },
  TotalText: {
    fontSize: 18,
    fontWeight: '700',
    paddingTop: 33,
    color: 'white',
  },
  TotalCorrect: {
    fontSize: 18,
    fontWeight: '700',
    paddingTop: 7,
    color: '#30d2c1',
    paddingBottom: 65,
  },

  gradientContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    borderRadius: 50,
  },
  boxText: {
    fontSize: 30,
    fontWeight: '700',
    color: 'white',
    marginTop: -5,
    marginBottom: 20,
  },
  Circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
