import React from 'react'
import {View} from 'react-native'
import {observer} from 'mobx-react'
import MenuItem from '../components/MenuItem';
import { localize, LOCALE } from '../utils/locale';
import UserStore from '../datastore/UserStore';
import NavigationTitle from '../components/NavigationTitle';

@observer
export default class SettingScreen extends React.Component{

    static navigationOptions = {
        headerTitle:()=><NavigationTitle title={localize(LOCALE.SETTING)}/>,
    }

    state = {

    }

    componentDidMount(){

    }

    SetLanguage=(locale)=>()=>{
        UserStore.SetLocale(locale)
    }

    render(){
        UserStore.locale
        return <View style={{flex:1}}>
            <MenuItem title={'ภาษาไทย'} onPress={this.SetLanguage('th')} isActive={UserStore.locale==='th'} />
            <MenuItem title={'English'} onPress={this.SetLanguage('en')} isActive={UserStore.locale==='en'}/>
        </View>
    }
}