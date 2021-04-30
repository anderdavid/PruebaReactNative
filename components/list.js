import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'

export default function list(props) {
    
    const [peliculas, setPeliculas] = useState([
])

useEffect(() => {
    setPeliculas(props.peliculas);
}, [props])
    return (
        <View style={styles.container}>
        
        <ScrollView>
          {peliculas.map((item,i)=>(
              <View key={i} style={styles.item}>
                <Text>{item.Title}</Text>
              </View>
            ))}
        </ScrollView>
        
       
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      paddingTop:40,
      paddingHorizontal:20
    },
    item:{
      marginTop:24,
      paddingTop:24,
      backgroundColor:'pink',
      fontSize:24,
      padding:20
    }
})
