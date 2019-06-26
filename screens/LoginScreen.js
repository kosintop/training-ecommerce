import React from 'react'
import {View,ScrollView, StyleSheet, Image} from 'react-native'
import TextInputForm from '../components/TextInputForm';
import Button from '../components/Button';
import { localize, LOCALE } from '../utils/locale';
import LoadingOverlay from '../components/LoadingOverlay';
import CartStore from '../datastore/CartStore';
import UserStore from '../datastore/UserStore';

export default class LoginScreen extends React.Component{

    state={
        username:'',
        password:'',
        isLoading:false,
    }

    render(){
        return <ScrollView style={styles.container} contentContainerStyle={{width:'100%',alignItems:'center',flexGrow:1,justifyContent:'center'}}>
            <Image style={{width:'50%', height:null, aspectRatio:1}} resizeMode='contain'  source={require('../assets/logo.png')}/>
            <View style={{width:'100%',paddingHorizontal:50}}>
                <TextInputForm placeholder={localize(LOCALE.USERNAME)} isSensitive={false} value={this.state.username} onChange={this.onUsernameChange}/>
                <TextInputForm placeholder={localize(LOCALE.PASSWORD)} isSensitive={true} value={this.state.password} onChange={this.onPassworChange}/>
                <Button title={localize(LOCALE.LOGIN)} onPress={this.onSubmit.bind(this)}/>
            </View>
            {this.state.isLoading && <LoadingOverlay/>}
        </ScrollView>
    }

    onUsernameChange=(text)=>{
        this.setState({username:text})
    }

    onPassworChange=(text)=>{
        this.setState({password:text})
    }

    onSubmit=async()=>{
        this.setState({isLoading:true})
        if(this.state.username==='123' && this.state.password==='123'){
            await CartStore.LoadProductList()
            await UserStore.LoadLocale()
            this.setState({isLoading:false})
            this.props.navigation.navigate('MainStack')
        }else{
            this.setState({isLoading:false})
            this.setState({password:''})
            alert(localize(LOCALE.INCORRECT_LOGIN))
        }

    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eee'
    }
})