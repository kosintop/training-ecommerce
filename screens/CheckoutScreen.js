import React from 'react'
import {View, Text, FlatList} from 'react-native'
import {StackActions,NavigationActions} from 'react-navigation'
import {observer} from 'mobx-react'
import CartStore from '../datastore/CartStore';
import CartItem from '../components/CartItem';
import Button from '../components/Button';
import { Icon } from 'react-native-elements';
import { localize, LOCALE } from '../utils/locale';
import NavigationTitle from '../components/NavigationTitle';

@observer
export default class CheckoutScreen extends React.Component{

    static navigationOptions = {
        headerTitle:()=><NavigationTitle title={localize(LOCALE.CHECKOUT)}/>,
    }

    componentDidMount(){
        CartStore.ClearProduct()
    }

    render(){
        return <View style={{flex:1}}>
            <View style={{flex:1,justifyContent:'center'}}>
                <Icon containerStyle={{alignSelf:'center'}} name='check' size={60}/>
                <Text style={{textAlign:'center',paddingTop:20, fontSize:30, fontWeight:'bold'}}>{localize(LOCALE.FINISH_CHECKOUT)}</Text>
            </View>
            <Button title={localize(LOCALE.FINISH_CHECKOUT)} onPress={this.finishCheckout}/>
        </View>
    }

    finishCheckout=()=>{
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'CartViewScreen' })],
        }));

        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            key:'ProductStack',
            actions: [NavigationActions.navigate({ routeName: 'ProductListScreen' })],
        }));

    }

    onDelete=(index)=>()=>{
        CartStore.RemoveProduct(index)
    }

    _renderFunction=({item,index})=>{
        return <CartItem name={item.title} imgUrl={item.thumbnailUrl} count={item.count} onDelete={this.onDelete(index)}/>
    }

}