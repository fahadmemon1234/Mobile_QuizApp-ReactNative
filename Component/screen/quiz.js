import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
} from 'react-native';
import Gif from 'react-native-gif';

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Quiz = ({navigation}) => {
  const [question, setquestion] = useState('');
  const [ques, setques] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setscore] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const getQuiz = async () => {
    setIsLoading(true);
    const url =
      'https://opentdb.com/api.php?amount=30&category=9&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    setquestion(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const handleNext = () => {
    setques(ques + 1);
    setOptions(generateOptionsAndShuffle(question[ques + 1]));
  };

  const generateOptionsAndShuffle = _question => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);
    console.log(options);
    shuffleArray(options);
    return options;
  };

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const handleSelectOption = _option => {
    if (_option === question[ques].correct_answer) {
      setscore(score + 10);
    }
    if (ques !== 29) {
      setques(ques + 1);
      setOptions(generateOptionsAndShuffle(question[ques + 1]));
    }

    if (ques === 29) {
      handleShowResult();
    }
    // console.log(_option === question[ques].correct_answer)
  };

  const handleShowResult = () => {
    navigation.navigate('Result', {
      score: score,
    });
  };

  return (
    <>
      <View style={styles.container}>
        {isLoading ? (
          <View>
            <Gif
              source={require('../../Assets/Img/loader.gif')}
              style={styles.Loaderimg}
              resizeMode="contain"
            />
          </View>
        ) : (
          question && (
            <View style={styles.parent}>
              <View style={styles.top}>
                <Text style={styles.questions}>
                  {/* Q. Imagine this is a really cool question */}
                  <Text style={{fontSize:27}}>Q). </Text>
                  <Text style={{color: 'white'}}>
                    {decodeURIComponent(question[ques].question)}
                  </Text>
                </Text>
              </View>

              <View style={styles.options}>
                <TouchableHighlight
                  style={styles.optionButton}
                  onPressIn={() => setIsHovered1(true)}
                  onPressOut={() => setIsHovered1(false)}
                  onPress={() => handleSelectOption(options[0])}
                  underlayColor="#37eabb" // Set the underlay color for the "hover" effect
                >
                  <Text style={styles.option}>
                    <View style={styles.btnoptions}>
                      <Text style={styles.optionNum}>01</Text>
                    </View>
                    <View style={styles.optionclick}>
                      <Text
                        style={{
                          color: isHovered1 ? '#20164f' : 'white',
                          fontSize: 15,
                          fontWeight: '700',
                        }}>
                        {decodeURIComponent(options[0])}
                      </Text>
                    </View>
                  </Text>
                </TouchableHighlight>

                <TouchableHighlight
                  style={styles.optionButton}
                  onPressIn={() => setIsHovered2(true)}
                  onPressOut={() => setIsHovered2(false)}
                  onPress={() => handleSelectOption(options[1])}
                  underlayColor="#37eabb">
                  <Text style={styles.option}>
                    <View style={styles.btnoptions}>
                      <Text style={styles.optionNum}>02</Text>
                    </View>
                    <View style={styles.optionclick}>
                      <Text
                        style={{
                          color: isHovered2 ? '#20164f' : 'white',
                          fontSize: 15,
                          fontWeight: '700',
                        }}>
                        {decodeURIComponent(options[1])}
                      </Text>
                    </View>
                  </Text>
                </TouchableHighlight>

                <TouchableHighlight
                  style={styles.optionButton}
                  onPressIn={() => setIsHovered3(true)}
                  onPressOut={() => setIsHovered3(false)}
                  onPress={() => handleSelectOption(options[2])}
                  underlayColor="#37eabb">
                  <Text style={styles.option}>
                    <View style={styles.btnoptions}>
                      <Text style={styles.optionNum}>03</Text>
                    </View>
                    <View style={styles.optionclick}>
                      <Text
                        style={{
                          color: isHovered3 ? '#20164f' : 'white',
                          fontSize: 15,
                          fontWeight: '700',
                        }}>
                        {decodeURIComponent(options[2])}
                      </Text>
                    </View>
                  </Text>
                </TouchableHighlight>

                <TouchableHighlight
                  style={styles.optionButton}
                  onPressIn={() => setIsHovered4(true)}
                  onPressOut={() => setIsHovered4(false)}
                  onPress={() => handleSelectOption(options[3])}
                  underlayColor="#37eabb">
                  <Text style={styles.option}>
                    <View style={styles.btnoptions}>
                      <Text style={styles.optionNum}>04</Text>
                    </View>
                    <View style={styles.optionclick}>
                      <Text
                        style={{
                          color: isHovered4 ? '#20164f' : 'white',
                          fontSize: 15,
                          fontWeight: '700',
                        }}>
                        {decodeURIComponent(options[3])}
                      </Text>
                    </View>
                  </Text>
                </TouchableHighlight>
              </View>

              <View style={styles.bottom}>
                {/* <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>PREV</Text>
              </TouchableOpacity> */}
                {ques !== 29 && (
                  <TouchableOpacity style={styles.button} onPress={handleNext}>
                    <Text style={styles.buttonText}>SKIP</Text>
                  </TouchableOpacity>
                )}

                {ques === 29 && (
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleShowResult()}>
                    <Text style={styles.buttonText}>SHOW RESULT</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          )
        )}
      </View>
    </>
  );
};

export default Quiz;

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 20,
//   },
//   top: {
//     marginVertical: 16,
//   },
//   options: {
//     marginVertical: 16,
//     flex: 0,
//   },
//   bottom: {
//     marginBottom: 12,
//     paddingVertical: 300,
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//   },
//   button: {
//     backgroundColor: '#1A759F',
//     padding: 12,
//     paddingHorizontal: 16,
//     borderRadius: 16,
//     alignItems: 'center',
//     marginBottom: 40,
//   },
//   buttonText: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: 'white',
//   },
//   questions: {
//     fontSize: 28,
//     color: 'black',
//   },
//   option: {
//     fontSize: 18,
//     color: 'white',
//     fontWeight: '500',
//   },
//   optionButton: {
//     paddingVertical: 12,
//     marginVertical: 6,
//     backgroundColor: '#34A0A4',
//     paddingHorizontal: 12,
//     borderRadius: 12,
//   },
// //   parent:{
// //     height:'100%',
// //   }
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#20164f',
  },
  parent: {
    flex: 1,
    width: '90%',
  },
  top: {
    flex: 1,
    justifyContent: 'center',
  },
  options: {
    flex: 2,
  },
  optionNum: {
    color: 'white',
    fontWeight: '800',
    textAlign: 'center',
    alignItems: 'center',
  },
  btnoptions: {
    backgroundColor: '#7554fe',
    borderRadius: 30,
    padding: 5,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  optionclick: {
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: 5,
    color: 'white',
    fontSize: 16,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#7554fe',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight:'700'
  },
  optionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 8,
  },
  option: {
    color: 'white',
    fontSize: 15,
  },
  questions: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#30d2c1',
  },
  Loaderimg: {
    height: 400,
    width: 400,
  },
});
