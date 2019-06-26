import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default ({title,onPress,isActive})=>{
    return <TouchableOpacity onPress={onPress} style={{width:'100%',paddingHorizontal:20,paddingVertical:10,borderBottomWidth:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={{fontWeight:isActive?'bold':'normal',paddingVertical:10}}>{title}</Text>
        {
            isActive
            ? <Icon name='check'/>
            : null
        }
    </TouchableOpacity>
}