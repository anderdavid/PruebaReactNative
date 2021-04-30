import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'

export default function list(props) {
    
    const [peliculas, setPeliculas] = useState([
])

useEffect(() => {
    setPeliculas(props.peliculas);
}, [props])
    return (
        <View style={styles.container}>
        
        <ScrollView style={styles.scroll}>
          {peliculas.map((item,i)=>(
              <View key={i} style={styles.item}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                        uri: item.Poster,
                        }}
                    />
                    <View style ={styles.cont}>
                        <Text style={styles.title}>{item.Title}</Text>
                        <Text style={styles.descripcion}>{item.Type}</Text>
                    </View>
                
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
      backgroundColor:'#bbb',
      fontSize:24,
      padding:20,
      flexDirection:'row'
    },
    tinyLogo:{
        flex:1,
        width: 50,
        height: 50,
        borderRadius:5
    },
    cont:{
        flex:2
    },
    title:{
        fontWeight:'bold',
        paddingStart:10
    },
   
    descripcion:{
        paddingStart:10
    },
    scroll:{
        marginBottom:200
    }

})
