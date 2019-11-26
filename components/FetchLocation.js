import React from 'react';

import { TouchableOpacity, StyleSheet, Text }  from 'react-native';



const fetchLocation = props => {
    return (
        <TouchableOpacity
         style={styles.button}
         onPress={props.onGetLocation}>
         <Text style={styles.buttonText}> Send location </Text>
       </TouchableOpacity>
    
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#26855c',
    width: 360,
    color: '#fff',
    height: 70,
    justifyContent: 'center',
    borderRadius: 10,
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
  }
})



export default fetchLocation;