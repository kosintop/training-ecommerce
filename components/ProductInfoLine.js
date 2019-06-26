import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'

export default ({label,value})=>{
    return <View style={{width:'100%',paddingHorizontal:20}}>
        <View style={{width:'100%',flexDirection:'row',borderBottomWidth:1,borderColor:'lightgrey',paddingVertical:5}}>
            <View style={{width:'30%'}}>
                <Text>{label}</Text>
            </View>
            <View style={{width:'70%'}}>
                <Text>{value}</Text>
            </View>
        </View>
    </View>
}
