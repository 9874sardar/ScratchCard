import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {ScratchCard} from './src/screens/ScratchCard';
import ScratchImage from './src/assets/scratchBackground.png';
import openGift from './src/assets/openGift.png';
import {useImage} from '@shopify/react-native-skia';

const getRandomNumber = () => {
  return Math.floor(Math.random() * 100);
};

const App = () => {
  const [randomNumber, setRandomNumber] = useState(getRandomNumber());
  const image = useImage(ScratchImage);

  if (!image) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.loading}>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ScratchCard key={randomNumber} style={{borderRadius: 16}} image={image}>
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderWidth: 3,
            borderRadius: 16,
            borderColor: 'black',
          }}>
          {randomNumber < 30 ? (
            <View style={{}}>
              <Image source={openGift} style={{height: 150, width: 150}} />
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  fontWeight: '800',
                  color: 'black',
                }}>
                Cashback
              </Text>
              <Text
                style={{
                  fontSize: 45,
                  textAlign: 'center',
                  fontWeight: '800',
                  color: 'black',
                }}>
                $ 10
              </Text>
            </View>
          ) : (
            <View>
              <Text
                style={{
                  fontSize: 25,
                  textAlign: 'center',
                  fontWeight: '800',
                  color: 'black',
                }}>
                Better Luck Next Time
              </Text>
            </View>
          )}
        </View>
      </ScratchCard>
      <TouchableOpacity
        style={{
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: 'lightblue',
          borderWidth: 2,
          borderRadius: 10,
          marginTop: 32,
        }}
        onPress={() => {
          setRandomNumber(getRandomNumber());
        }}>
        <Text style={{fontWeight: 700, fontSize: 20}}>Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
