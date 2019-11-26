import React from 'react';

import { TouchableOpacity, StyleSheet, Text, Dimensions }  from 'react-native';

let screenWidth = Dimensions.get("window").width;

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
    width: screenWidth - 30,
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