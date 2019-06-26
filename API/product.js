import axios from 'axios'


exports.GetProductList = async()=>{
    let response = await axios.get('https://jsonplaceholder.typicode.com/photos')
    if(__DEV__) console.log(response)
    return response.data
}