import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';

const ListScreen = () => {
  const friends = [
    {name: 'Friend #1', age: 20},
    {name: 'Friend #2', age: 21},
    {name: 'Friend #3', age: 22},
    {name: 'Friend #4', age: 23},
    {name: 'Friend #5', age: 24},
    {name: 'Friend #6', age: 25},
    {name: 'Friend #7', age: 26}
  ];
  return (
    <FlatList
    //horizontal will allow user to scoll in horizontally
    //showsHorizontalScrollIndicator = {false}
    keyExtractor = {(friends) => friends.name} //identify the key of each item
    data = {friends} // dataset
    renderItem = {({item}) => {       // element === { item:{ name: 'friend #1'},index: 0 } but item == name:'friend#1'
      return <Text style = {styles.textStyle}>{item.name} - Age {item.age}</Text>;
  }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
