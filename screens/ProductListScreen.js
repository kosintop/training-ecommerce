import React from 'react'
import {View,FlatList,TextInput} from 'react-native'
import ProductItemBox from '../components/ProductItemBox';
import {GetProductList} from '../API/product';
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorIndicator from '../components/ErrorIndicator';
import {observer} from 'mobx-react'
import { Icon } from 'react-native-elements';
import { localize, LOCALE } from '../utils/locale';
import NavigationTitle from '../components/NavigationTitle';
import UserStore from '../datastore/UserStore';

@observer
export default class ProductListScreen extends React.Component{

    static navigationOptions = {
        headerTitle:()=><NavigationTitle title={localize(LOCALE.PRODUCT_LIST)}/>,
    }

    state = {
        isLoading:true,
        isError:false,
        errMsg:'',
        productList:[],
        filteredProductList:[],
        searchString:''
    }

    componentDidMount(){
        this.reload()
    }

    reload=async()=>{
        this.setState({isLoading:true,isError:false})
        try{
            let data = await GetProductList() //'https://jsonplaceholder.typicode.com/photos'
            this.setState({productList:data,isLoading:false,searchString:'',filteredProductList:data})
        }catch(e){
            this.setState({isLoading:false,isError:true,errMsg:e.message||e})
        }
    }

    render(){
        UserStore.locale
        if(this.state.isLoading) return <LoadingIndicator/>
        if(this.state.isError) return <ErrorIndicator errMsg={this.state.errMsg} onRetry={this.reload.bind(this)}/>
        return <View style={{flex:1}}>
            <View style={{width:'100%',padding:5,flexDirection:'row'}}>
                <Icon name='search' containerStyle={{paddingRight:5,alignSelf:'center'}}/>
                <TextInput style={{flex:1}} value={this.state.searchString} onChangeText={this.onChangeSearchString}/>
            </View>
            <FlatList style={{flex:1}} numColumns={2} contentContainerStyle={{width:'100%'}} data={this.state.filteredProductList} renderItem={this._renderFunction.bind(this)}/>
        </View>
    }

    onChangeSearchString=(text)=>{
        let filteredProductList = this.state.productList.filter(e=>e.title.toLowerCase().includes(text.toLowerCase()))
        this.setState({searchString:text,filteredProductList:filteredProductList})
    }

    onSelectProduct=(item)=>()=>{
        this.props.navigation.navigate('ProductDetailScreen',{item:item})
    }

    _renderFunction=({item,index})=>{
        return <ProductItemBox name={item.title} imgUrl={item.thumbnailUrl} onPress={this.onSelectProduct(item)}/>
    }

}