import React from 'react';
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';
import Colors from '../constants/colors'

const Header = ({headerText}) => {
  return <View style={styles.View}>
   
  <Text style={styles.text}>{headerText}</Text>
 
  </View>
};

const styles =StyleSheet.create({
  text: {
    fontSize: 20,
    marginTop:20,

  },
  View:{
    backgroundColor:Colors.primary,
    justifyContent:'center',
    alignItems:'center',
    height:80,
    paddingTop:12,
    
    // shadowOpacity:,
    elevation:155,
    // position:'relative',
    flexDirection:'row'
  },
  Icon:{
    alignSelf:'center',
    marginLeft:90,
    marginBottom:5
  }
});
export default Header;
