import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const ComponentsScreen = function() {
  const myname = <Text> Lermarn </Text>;
  return (
  <View>
  <Text style={styles.HeaderStyle}>Getting Started with React Native !</Text>
  <Text style={styles.textStyle}> My name is {myname} </Text>
  </View>
);
};
const styles = StyleSheet.create({   //This is to change the font size of "This is what... "
  textStyle: {
    fontSize: 20 // Change the fontsize
  },
  HeaderStyle:{
    fontSize: 45
  }

});

export default ComponentsScreen;
