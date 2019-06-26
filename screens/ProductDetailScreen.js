import React from 'react'
import {ScrollView,Image,View,Text,Alert,TextInput} from 'react-native'
import ProductInfoLine from '../components/ProductInfoLine';
import Button from '../components/Button';
import {observer} from 'mobx-react'
import CartStore from '../datastore/CartStore';
import { localize, LOCALE } from '../utils/locale';
import NavigationTitle from '../components/NavigationTitle';
import UserStore from '../datastore/UserStore';

@observer
export default class ProductDetailScreen extends React.Component{

    static navigationOptions = {
        headerTitle:()=><NavigationTitle title={localize(LOCALE.PRODUCT_DETAIL)}/>,
    }

    state = {
        id: null,
        img: null,
        title: null,
        count:'1',
    }

    componentDidMount(){
        let item = this.props.navigation.state.params.item
        this.setState({
            id: item.id,
            img: item.url,
            title: item.title,
        })
    }

    render(){
        UserStore
        return <View style={{flex:1,justifyContent:'space-between'}}>
            <ScrollView style={{flex:1}}>
                <Image source={{uri:this.state.img}} style={{width:'100%',height:null,aspectRatio:1,resizeMode:'contain'}}/>
                <Text style={{fontSize:24, color:'black',paddingHorizontal:20,paddingVertical:10}}>{localize(LOCALE.PRODUCT_DETAIL)}</Text>
                <ProductInfoLine label={'Id'} value={this.state.id}/>
                <ProductInfoLine label={'Title'} value={this.state.title}/>
            </ScrollView>
            <View style={{flexDirection:'row',width:'100%'}}>
                <TextInput style={{borderWidth:1,width:'20%',height:40}} keyboardType='numeric' value={this.state.count} onChangeText={this.onChangeQty}/>
                <View style={{width:'80%'}}>
                    <Button title={localize(LOCALE.ADD_TO_CART)} onPress={this.AddToCart}/>
                </View>
            </View>
            
        </View>
    }

    onChangeQty=(num)=>{
        this.setState({count:num})
    }

    AddToCart=async()=>{
        let num
        try{
            num = parseInt(this.state.count)
            if(num<1) throw 'Error'
        }catch{
            alert(localize(LOCALE.WARN_NEGATIVE))
            return
        }

        await CartStore.AddProduct(this.props.navigation.state.params.item,num)
        Alert.alert('',localize(LOCALE.ADD_TO_CART_SUCCESS),[
            {text:'OK',onPress:()=>this.props.navigation.goBack()}
        ])
    }

}