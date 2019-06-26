import React from 'react'
import {ScrollView,SafeAreaView,View,TouchableOpacity,Text} from 'react-native'
import {DrawerItems} from 'react-navigation'
import { localize, LOCALE } from '../utils/locale';
import UserStore from '../datastore/UserStore';

export default ({...props})=>(
    <ScrollView>
        <SafeAreaView style={{flex:1}} forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerItems {...props} />
            <View style={{flex:1}}/>
            <TouchableOpacity style={{borderTopWidth:1,borderColor:'lightgrey'}} onPress={()=>UserStore.SignOut(props.navigation)}>
                <Text style={{padding:16, color:'red',fontWeight:'bold'}}>{localize(LOCALE.SIGN_OUT)}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    </ScrollView>
)
