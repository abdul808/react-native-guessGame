import React from 'react';
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';

const Card = ({children,style}) => {
  return <View style={{...styles.card,...style}}>   
 {children}
  </View>
};

const styles =StyleSheet.create({
  card:{
    elevation:6,
    shadowColor:'black',
    shadowOffset:{width:0,height:2},
    shadowRadius:6,
    shadowOpacity:0.26,
    paddingTop:12,
    borderRadius:20
  },
});
export default Card;
