import React from 'react'
import {View,Text} from 'react-native'

export default ({title})=>{
    return <View style={{paddingLeft:20}}>
        <Text numberOfLines={1} style={{textAlign:'center',color:'white', fontSize:24,fontWeight:'bold'}}>{title}</Text>
    </View>
}
