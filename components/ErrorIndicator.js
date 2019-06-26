import React from 'react'
import {View, Text} from 'react-native'
import Button from './Button';

export default ({errMsg,onRetry})=>{
    return <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={{padding:10}}>{errMsg}</Text>
        <Button title={'Retry'} onPress={onRetry}/>
    </View>
}