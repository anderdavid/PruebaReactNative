import React,{ useEffect, useState } from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native'
import Header from '../header';
import TodoItem from '../todoItem';

const Peliculas =(props)=>{
  const {
      status,
      peliculas,
      getPeliculas
    } = props;

    useEffect(() => {
      getPeliculas();
    }, []);

    return (
        <View style={styles.container}>
          
          <Header/>
          <View style={styles.content}>
          
           <View style={styles.list}>
             {status==='loaded' &&(
               <FlatList
                data={peliculas?.Search}
                renderItem={({item})=>(
                <TodoItem item={item}/>
               )}
             />
             )}
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
