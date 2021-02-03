import React from 'react';
import {TextInput,StyleSheet} from 'react-native';

const Input = props => {
  return <TextInput {...props} style={{...styles.card,...props.style}}/>   
  
};

const styles =StyleSheet.create({
  card:{
    marginBottom:20,
    borderBottomWidth:1,
    borderBottomColor:'grey',
  },
});
export default Input;
