import { observable, computed } from "mobx";
import { AsyncStorage } from 'react-native'

const LOCALE = 'locale'

class UserStore{
    @observable locale = 'en'

    SetLocale=async(loc)=>{
        this.locale = loc
        await AsyncStorage.setItem(LOCALE,loc)
    }

    LoadLocale=async()=>{
        let _loc = await AsyncStorage.getItem(LOCALE)
        if(_loc) this.locale = _loc
    }

    SignOut=(navigation)=>{
        navigation.navigate('LoginScreen')
    }

}



export default new UserStore()