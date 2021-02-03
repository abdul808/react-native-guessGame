import React,{useState} from 'react';
import {Text,StyleSheet,View,TextInput,
   Button, TouchableWithoutFeedback, Keyboard, Alert, ImagePropTypes} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors'
import NumberContainer from '../components/NumberContainer'

const StartScreen = props => {
  const [enteredValue,setEnteredVlaue] = useState('')
  const [confirm,setConfirm] = useState(false);
  const[selectedNumber,setSelectedNumber] = useState();

  
  const InputHandler = inputText =>{
    setEnteredVlaue(inputText.replace(/[^0-9]/g,''));
  };
  const resetInputHandler = () =>{
    setEnteredVlaue('');
    setConfirm(false);
  };
  const confirmInputHandler = () =>{
    const chosenNumber = parseInt(enteredValue);
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
      Alert.alert('Invalid no.!','Number has to be a number between 1 and 99',[{text:'Okey',style:'destructive',onPress:resetInputHandler}])
      return;
    }
   setConfirm(true);
   setSelectedNumber(chosenNumber );
   setEnteredVlaue('');
   Keyboard.dismiss();
  };
  
  let confirmOutput;

  if(confirm){
    confirmOutput=(
      <Card style={styles.summary}>
    <Text style={{marginTop:10,}}>Chosen Number</Text>
    <NumberContainer>{selectedNumber}</NumberContainer>
    <Button title='Start Game' color={Colors.primary} onPress={() => props.onStartGame(selectedNumber)}/>
    </Card>
    )};
  return(  
  <TouchableWithoutFeedback onPress ={ () =>{
    Keyboard.dismiss();
  }}>
    <View style={{flex:1,marginTop:10}}>
  <Card style={styles.viewContainer}>
  <View style={styles.text}>
      <Text style={{fontSize:25,}}>Start the Game</Text>
  </View>
  <View style={styles.inputContainer}>
      <Input 
      style={styles.input} 
      blurOnSubmit
      keyboardType='number-pad'
      maxLength={2}
      onChangeText={InputHandler}
      value={enteredValue}
      />
  </View>
  <View style={styles.buttonContainer}>
      <View style={styles.button}>
          <Button color={Colors.accent} title='Reset' onPress={resetInputHandler}/>
          </View>
      <View>
           <Button title='Confirm' onPress={confirmInputHandler}/>
           </View>
  </View>
  </Card>
  {confirmOutput}
  </View>
  </TouchableWithoutFeedback>

  )
};

const styles =StyleSheet.create({
  text: {
    marginVertical:20,
    flexDirection:'row',
   
  },
  viewContainer:{
    alignItems:'center',
    marginHorizontal:20,   
  },
  buttonContainer:{
   marginVertical:20,
   flexDirection:'row',
   width:'60%',
   justifyContent:'space-between',
  },
  button:{
      width:'40%',
  },
  inputContainer:{
  
    },
    input:{
      fontSize:20,
      textAlign:'center',
      width:30
    },
    summary:{
      alignItems:'center',
      width:'60%',
      alignSelf:'center',
      height:200,
      marginTop:20,
    }
});
export default StartScreen;
