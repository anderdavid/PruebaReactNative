import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Provider} from 'react-redux'
import Peliculas from './components/Peliculas'
import { store } from './store/configureStore';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text style={styles.algo}>algo</Text>
        <Peliculas/>
      </View>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#860528',
  },
  algo:{
    marginTop:30,
  }
});
