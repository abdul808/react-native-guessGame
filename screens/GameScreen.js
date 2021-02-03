import React,{useState,useRef,useEffect} from 'react';
import {View,Text,StyleSheet,Button, Alert} from 'react-native'
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import Colors from '../constants/colors'

const betweenNumber = (min,max,exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const RnNm = Math.floor(Math.random() *(max -min)) + min;
    if(RnNm === exclude){
        return betweenNumber(min,max,exclude);
    } else{
        return RnNm;
    }
};

const GameScreen = props =>{
    const [currentGuess,setCurrentGuess] = useState(betweenNumber(1,100,props.userChoice));
    const [rounds,setRounds] = useState(0);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const {userChoice,onGameOver} = props;

    useEffect(() =>{
        if (currentGuess === userChoice){
            onGameOver(rounds)
        }
    },[currentGuess,onGameOver,userChoice])

    const nextGuessHandler = direction =>{
        if(
            (
                direction === 'lower' && currentGuess < props.userChoice ||
                direction === 'greater' && currentGuess > props.userChoice
            )
        ) {
             Alert.alert('Wrong Choice','You know that this is wrong...',
             [{text:'Soory',style:'cancel'}]);
             return;
        }
        if(direction ==='lower'){
         currentHigh.current = currentGuess;
        }
        else{
        currentLow.current = currentGuess;
        }
        const nextNumber = betweenNumber(currentLow.current,currentHigh.current,currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
    }     

    return(
      <View style={styles.screen}>
          <Card style={styles.card1}>
              <Text>Opponent's Guess</Text>
          <NumberContainer>
              {currentGuess}
              </NumberContainer>
          </Card>
          <Card style={styles.buttonContainer}>
             <View style={styles.button}>
                 <Button title='LOWER' onPress={nextGuessHandler.bind(this,'lower')}/>
                 </View> 
             <View style={styles.button}>
                 <Button title='GREATER' onPress={nextGuessHandler.bind(this,'greater')}/>
                 </View>
          </Card>
      </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    card1:{
     width:'50%',
     alignItems:'center',
     height:150,
    },
      screen:{
        flex:1,
        padding:10,
        alignItems:'center'

    },
    buttonContainer:{
        flexDirection:'row',
        width:400,
        maxWidth:'80%',
        marginTop:20,
        height:100,
        alignContent:'center',
        justifyContent:'space-around'
    },
    button:{
        width:'40%',
       alignContent:'center',
       alignSelf:'center',
       
    }
}) 