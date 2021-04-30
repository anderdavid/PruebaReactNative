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
      console.log('useEffect()');
      if(props.status ==='loaded'){
        console.log('loaded');
      }else{
        console.log('loading...');
        getPeliculas();
      }
    }, []);

    return (
        <View style={styles.container}>
          
          <Header/>
          <View style={styles.content}>
            
           <View style={styles.list}>
             <Text>{status}</Text>
             {status==='loaded'&&(
               <View>
                  <Text>Loaddddded</Text>

                  {peliculas.Search &&(
                    <>
                      {peliculas.Search.map(
                        (item,i)=>(
                          <Text key={i}>{item.Title}</Text>
                        )
                      )}
                    </>
                  )}
                 
               </View>
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
