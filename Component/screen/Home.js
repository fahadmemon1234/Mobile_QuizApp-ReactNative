import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from '../title';

const Home = ({navigation}) => {
  return (
    <>
      <View style={styles.Container}>
        <Title titleText='Quizzler' />

        <View style={styles.bannerContainer}>
          <Image
            source={require('../../Assets/Img/Home.png')}
            style={styles.banner}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Quiz')}
          style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
  },
  Container:{
    paddingHorizontal:20,
    alignItems:'center',
    height:'100%',
  },
  button: {
    width:'90%',
    backgroundColor:'#1A759F',
    padding:16,
    borderRadius:16,
    alignItems:'center',
    marginBottom:30,
  },
  buttonText:{
    fontSize:24,
    fontWeight:'600',
    color:'white'
  }
});
