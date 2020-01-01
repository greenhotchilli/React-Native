import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Text,StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
    <Text style={styles.text}>Hello Lermarn</Text>
    <Button
      title = "Go to Component Demo"
      onPress = {() => navigation.navigate('Components')} // Press the button to go to the Components page
    />
    <Button
      title = "Go to List"
      onPress = {()=> navigation.navigate('List')}
    />
    <Button
      title = "Go to Image Screen"
      onPress = {()=> navigation.navigate('Image')}
    />
    <Button
      title = "Go To Counter Screen"
      onPress = {()=> navigation.navigate('Counter')}
    />
    /*<Button
      title = "Go To Color Screen"
      onPress = {()=> navigation.navigate('Color')}
    />*/
    </View>
    //<TouchableOpacity onPress = {() => props.navigation.navigate('List')}>
      //<Text>Go to List Demo</Text>
    //</TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50
  }
});

export default HomeScreen;
