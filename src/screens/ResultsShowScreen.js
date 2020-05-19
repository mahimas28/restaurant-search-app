import React ,{useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image, ScrollView} from 'react-native';
import zomato from '../api/zomato';

const ResultsShowScreen= ({ navigation})=>{
  const [result, setResult]=useState(null);
  const id=navigation.getParam('id');

  const getResult=async id=>{
    const response =await zomato.get(`/restaurant?res_id=${id}`);
    setResult(response.data);
  };
  useEffect(()=>{
    getResult(id);
  }, []);

  if(!result){
    return null;
  }
  return (
    <>
    <View style={style.container}>
    <ScrollView>
      <Image style={style.image} source={{uri:result.thumb}}/>
      <Text style={style.title}>{result.name}</Text>
      <Text style={style.name}>Average cost for two</Text>
      <Text>{result.currency} {result.average_cost_for_two}</Text>
      <Text style={style.name}>Cuisines</Text>
      <Text>{result.cuisines}</Text>
      <Text style={style.name}>Timings</Text>
      <Text>{result.timings}</Text>
      <Text style={style.name}>Highlights</Text>
      <FlatList
        data={result.highlights}
        keyExtractor={it=>it}
        renderItem={({item})=>{
          return <Text>{item}</Text>;
        }}
        />
    </ScrollView>
    </View>
    </>
  );
};

const style=StyleSheet.create({
  title:{
    fontSize:16,
    fontWeight:'bold',
    color:'blue'
  },
  container:{
    marginHorizontal:15
  },
  name:{
    fontWeight:'bold',
    marginTop:5
  },
  image:{
    width:'auto',
    height:120,
    borderRadius:4,
    marginVertical:5
  }
});

export default ResultsShowScreen;
