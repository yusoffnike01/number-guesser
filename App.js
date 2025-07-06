import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    console.log('gameOverHandler called!');
    setGameIsOver(true);
  }
  console.log('App render - userNumber:', userNumber, 'gameIsOver:', gameIsOver);
  
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }



  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.appContainer}>
      <ImageBackground source={require('./assets/images/background.png')} resizeMode="cover" style={styles.appContainer} imageStyle={styles.backgroundImage}>
      <SafeAreaView style={styles.appContainer}>
        {screen}
        </SafeAreaView> 
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});


