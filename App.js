import React,{useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen'


export default function App() {
 const [userNumber,setUserNumber] = useState();
 const [guessRounds,setGuessRounds] = useState(0);

 const newGameHandler = () =>{
  setGuessRounds(0);
  setUserNumber(null);
 };

 const startGameHandler = (selectedNumber) =>{
   setUserNumber(selectedNumber);
  
 };

 const gameOverHandler = numOfRounds =>{
   setGuessRounds(numOfRounds);
 };

 let content = <StartScreen onStartGame={startGameHandler}/>

 if(userNumber && guessRounds == 0){
   content=<GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
 }else if(guessRounds > 0){
   content = <GameOverScreen UserNum={userNumber} RoundNum={guessRounds} onNewGame={newGameHandler}/>
 }

  return (
    <View style={styles.screen}>
     <Header headerText='Guess a Number'/>
     {content}
    </View>
  );
}

const styles = StyleSheet.create({
 screen:{
   flex:1, 
   
 }
});
