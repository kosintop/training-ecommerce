import { observable, computed } from "mobx";
import { AsyncStorage } from 'react-native'

class CartStore{
    @observable productList = []
    @observable productCount = {}
    @observable randomString = null

    AddProduct=async(item,count)=>{
        //check whether there is an existing product with same id
        let index = this.productList.findIndex(i=>i.id===item.id)

        //if index>=0 (there's an existing product), add count
        if(index>=0){
            this.productList[index].count += count
        }else{
            //else insert new item
            item.count = count
            this.productList.unshift(item)
        }

        await this.SaveProductList()
    }

    RemoveProduct=async(index)=>{
        //copy product list
        let productList = this.productList.slice()

        //remove one item
        productList[index].count -= 1

        //if 0, remove from list
        if(productList[index].count<=0){
            productList.splice(index,1)
        }

        //replace original list with new modified list
        this.productList = productList
        await this.SaveProductList()
    }

    ClearProduct=()=>{
        this.productList = []
    }

    SaveProductList=async()=>{
        AsyncStorage.setItem(PRODUCTLIST,JSON.stringify(this.productList.slice()))
    }

    LoadProductList=async()=>{
        let _productList = await AsyncStorage.getItem(PRODUCTLIST)
        if(__DEV__) console.log(_productList)
        if(_productList){
            this.productList = JSON.parse(_productList)
        }
    }

    GetTotalItems=()=>{
        let count = 0
        this.productList.map(item=>{
            count += item.count
        })
        return count
    }

}

const PRODUCTLIST = 'productList'

export default new CartStore()