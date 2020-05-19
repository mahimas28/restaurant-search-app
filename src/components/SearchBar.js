import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar=({term, onTermChange, onTermSubmit})=>{
  return (
    <View style={style.background}>
      <Feather name="search" size={30} style={style.iconStyle}/>
      <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      style={style.inputStyle}
      placeholder="Search"
      value={term}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const style=StyleSheet.create({
  background:{
    backgroundColor:'#e8e8e8',
    height: 50,
    borderRadius:5,
    margin:15,
    flexDirection:'row',
    alignItems:'center'
  },
  inputStyle:{
    flex: 1,
    fontSize:18
  },
  iconStyle:{
    fontSize: 35,
    alignSelf:'center',
    marginHorizontal:15
  }
});

export default SearchBar;
