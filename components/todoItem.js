import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native'

export default function todoItem(props) {
    const {item}=props;
    return (
        <TouchableOpacity>
            <Text style={styles.item}>{item.Title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    }
})
