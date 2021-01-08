import Axios from "axios"

export default {
    getProducts(params){   
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken')     
        return Axios.get('/product/products', {
            params
        });      
    },
    getProduct(id){        
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken')
        return Axios.get('/product/'+id);      
    },    
    saveProduct(model){
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken')
        return Axios.post('/product/create', model);      
    },
    updateProduct(model){
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken')
        return Axios.put('/product/update', model);      
    }
}