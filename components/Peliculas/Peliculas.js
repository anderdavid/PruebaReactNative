import React,{ useEffect, useState } from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native'
import Header from '../header';

const Peliculas =(props)=>{
  const {
      status,
      getPeliculas
    } = props;

    useEffect(() => {
      getPeliculas();
    }, []);

    const [todos,setTodos]=useState([
      {text:'buy coffe',key:'1'},
      {text:'create an app',key:'2'},
      {text:'play on the switch',key:'3'}
    ]);

    return (
        <View style={styles.container}>
          {/* Header */}
          <Header/>
          <View style={styles.content}>
            {/* To Form */}
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({item})=>(
                  <Text>{item.text}</Text>
                )}
              />
            </View>
          </View>
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
