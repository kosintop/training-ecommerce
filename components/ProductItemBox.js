import React from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default ({name,imgUrl, onPress})=>{
    return <TouchableOpacity onPress={onPress} style={{width:'50%',height:null,aspectRatio:1}}>
        <Image style={{width:'100%',height:'100%', resizeMode:'cover'}} source={{uri:imgUrl}}/>
        <View style={{position:'absolute',bottom:0,width:'100%',padding:10, backgroundColor:'rgba(255,255,255,0.5)'}}>
            <Text numberOfLines={2}>{name}</Text>
        </View>
    </TouchableOpacity>
}
