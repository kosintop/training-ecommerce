import React from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements';

export default ({name,imgUrl,count, onDelete})=>{
    return <View style={{width:'100%',paddingHorizontal:10}}>
        <View style={{width:'100%',flexDirection:'row',borderBottomWidth:1,borderColor:'grey',paddingVertical:10}}>
            <Image style={{width:'20%',height:null, aspectRatio:1, resizeMode:'contain'}} source={{uri:imgUrl}}/>
            <View style={{flex:1, padding:10, alignSelf:'center'}}>
                <Text numberOfLines={2}>{name}</Text>
            </View>
            <View style={{width:'20%',flexDirection:'column'}}>
                <Text style={{textAlign:'center'}}>x{count}</Text>
                <TouchableOpacity style={{alignSelf:'center',padding:5, backgroundColor:'red'}} onPress={onDelete}>
                    <Icon name='delete' color='white'/>
                </TouchableOpacity>
            </View>

        </View>
    </View>
}