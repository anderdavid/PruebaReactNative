import React,{ useEffect, useState } from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native'
import Header from '../header';
import TodoItem from '../todoItem';
import List from '../list';

const Peliculas =(props)=>{
  const {
      status,
      peliculas,
      getPeliculas
    } = props;

    useEffect(() => {
      console.log('useEffect()');
      getPeliculas({
        s:'love',
        y:'2020',
        apikey:'5eec5adc'
      });
      
    }, []);

    

    return (
        
        <View>
          <Header/>
          {peliculas&&(
            <List peliculas={peliculas.Search}/>
          )}
        </View> 
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  content:{
    padding:40,
  },
  list:{
    marginTop:20,
  }
})

export default Peliculas;
