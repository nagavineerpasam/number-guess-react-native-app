import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const image = { uri: ''}
  
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameStatus] = useState(true);
  
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameStatus(false);
  };

  const gameOverHandler = () => {
    setGameStatus(true);
  };

  const startAgain = () => {
    setUserNumber(null);
  }

  let displayScreen = <StartGameScreen onNumberPick = {pickedNumberHandler}/>
  
  if (userNumber) {
    displayScreen = <GameScreen userNumber = {userNumber} onGameOver = {gameOverHandler}/>
  };

  if (gameIsOver && userNumber) {
    displayScreen = <GameOverScreen startAgain = {startAgain}/>
  };
  
  return (
    <LinearGradient colors = {['#4e0329','#ddb52f']} style = {styles.rootScreen}>
      {/* <ImageBackground style = {styles.rootScreen} 
          source={image} 
          resizeMode = 'cover'
          imageStyle = {styles.backgroundImage}>
      </ImageBackground> */}
      <SafeAreaView style = {styles.rootScreen}>{displayScreen}</SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
