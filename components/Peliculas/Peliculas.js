import React,{ useEffect, useState } from 'react';
import { StyleSheet, Text, View} from 'react-native'
import { RadioButton } from 'react-native-paper';
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

    const [checked, setChecked] = React.useState('');

    return (
        
        <View>
          <Header/>
          <View>
            <Text>Movies</Text>
            <RadioButton
            
              value="first"
              status={ checked === 'first' ? 'checked' : 'unchecked' }
              onPress={() =>{
                setChecked('first');
                getPeliculas({
                  s:'love',
                  y:'2020',
                  apikey:'5eec5adc',
                  type:'movie'
                });
              } }
            />
            <Text>Series</Text>
            <RadioButton
              value="second"
              status={ checked === 'second' ? 'checked' : 'unchecked' }
              onPress={() => {
                setChecked('second');
                getPeliculas({
                  s:'love',
                  y:'2020',
                  apikey:'5eec5adc',
                  type:'series'
                });
              }}
            />
          </View>
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
