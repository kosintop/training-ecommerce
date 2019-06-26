import React from 'react'
import {View, Text, FlatList} from 'react-native'
import {StackActions,NavigationActions} from 'react-navigation'
import {observer} from 'mobx-react'
import CartStore from '../datastore/CartStore';
import CartItem from '../components/CartItem';
import Button from '../components/Button';
import { localize, LOCALE } from '../utils/locale';
import NavigationTitle from '../components/NavigationTitle';
import UserStore from '../datastore/UserStore';

@observer
export default class CartViewScreen extends React.Component{

    static navigationOptions = {
        headerTitle:()=><NavigationTitle title={localize(LOCALE.CART)}/>,
    }

    render(){
        UserStore.locale
        return <View style={{flex:1}}>
            <FlatList 
                style={{flex:1}} 
                numColumns={1} 
                contentContainerStyle={{width:'100%'}} 
                data={CartStore.productList.slice()} 
                renderItem={this._renderFunction.bind(this)} 
                ListEmptyComponent={<Text style={{textAlign:'center',paddingTop:10}}>{localize(LOCALE.EMPTY_CART)}</Text>}/>
            <View style={{width:'100%',flexDirection:'row', justifyContent:'space-between',padding:10}}>
                <Text>{localize(LOCALE.TOTAL)}</Text>
                <Text>{CartStore.GetTotalItems()} {localize(LOCALE.ITEMS)}</Text>
            </View>
            <Button title={localize(LOCALE.CHECKOUT)} onPress={this.onCheckout}/>
        </View>
    }

    onCheckout=()=>{
        if(CartStore.productList.length===0){
            alert(localize(LOCALE.EMPTY_CART))
            return
        }
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'CheckoutScreen' })],
          });
        this.props.navigation.dispatch(resetAction);
    }

    onDelete=(index)=>()=>{
        CartStore.RemoveProduct(index)
    }

    _renderFunction=({item,index})=>{
        return <CartItem name={item.title} imgUrl={item.thumbnailUrl} count={item.count} onDelete={this.onDelete(index)}/>
    }

}