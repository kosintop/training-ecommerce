import React from 'react'
import {Text,View,TextInput, StyleSheet} from 'react-native'

export default ({placeholder,value,onChange,isSensitive})=>{
    return <View style={styles.container}>
        <TextInput style={styles.textInput} value={value} placeholder={placeholder} onChangeText={onChange} secureTextEntry={isSensitive}/>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'100%',
        borderWidth:1,
        marginBottom:10,
        backgroundColor:'white',
    },
    textInput:{
        width:'100%',
    }
})