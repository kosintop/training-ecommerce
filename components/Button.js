import React from 'react'
import {TouchableOpacity, StyleSheet,Text} from 'react-native'

export default ({title,onPress})=>{
    return <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button:{
        width:'100%',
        padding:10,
        backgroundColor:'blue',
    },
    text:{
        textAlign:'center',
        color:'white'
    }
})