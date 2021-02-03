import React from 'react';
import {StyleSheet, View,Text, Button} from 'react-native';

const GameOverScreen = props =>{
return(
    <View style={styles.view}>
        <Text style={styles.text}>Congrats!!Game Over!</Text>
        <Text>Number of Rounds to complete:{props.RoundNum}</Text>
        <Text>User's Number was:{props.UserNum}</Text>
        <Button style={styles.button} title='new game' onPress={props.onNewGame}/>
    </View>
)
};

const styles =StyleSheet.create({
view:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
},
button:{
    marginTop:5,
},
text:{
    fontSize:20
}
});
export default GameOverScreen;
