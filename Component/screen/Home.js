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
import LinearGradient from 'react-native-linear-gradient';

const Home = ({navigation}) => {
  return (
    <>
      <View style={styles.Container}>
        <View style={styles.bannerContainer}>
          <View style={styles.bannerImg}>
            <Image
              source={require('../../Assets/Img/back.png')}
              style={styles.banner}
              resizeMode="contain"
            />

            <View style={styles.overlayContainer}>
              <Title titleText="Quizzler" style={{fontSize: 50}} />
            </View>
          </View>

          <View style={{marginTop:-15, alignItems:'center'}}>
            <Text style={styles.TextPlay}>Let's Play!</Text>
            <Text style={styles.TextNow}>Play now and Level up</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Quiz')}
          style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonsCloseText}>
          <Text style={styles.buttonClose}>Close</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  bannerContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    height: 400,
    width: 400,
  },
  overlayContainer: {
    position: 'absolute',
    top: 200,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Container: {
    paddingHorizontal: 20,
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#20164f',
    justifyContent: 'space-between',
  },
  button: {
    width: '90%',
    backgroundColor: '#7554fe',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: -110,
  },
  buttonsCloseText:{
    width: '90%',
    borderWidth: 2,
    borderColor:'#7554fe',
    alignItems:'center',
    padding: 16,
    borderRadius: 16,
    marginBottom: 30,
  },
  buttonClose:{
    fontSize: 23,
    fontWeight: '600',
    color: '#7554fe',
  },
  buttonText: {
    fontSize: 23,
    fontWeight: '600',
    color: 'white',
  },
  TextPlay: {
    fontSize: 30,
    color: 'white',
    fontWeight: '600',
  },
  TextNow: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
  },
});
