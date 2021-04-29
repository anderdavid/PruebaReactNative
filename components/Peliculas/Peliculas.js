import React,{ useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'

const Peliculas =(props)=>{
    const {
        status,
        getPeliculas
      } = props;

      useEffect(() => {
        getPeliculas();
      }, []);

    return (
        <View>
            <Text>Hello componente react native</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default Peliculas;
