import Axios from "axios"

export default {
    getCategories(params){   
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken')     
        return Axios.get('/category/categories', {
            params
        });      
    },
    getCategory(id){        
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken')
        return Axios.get('/category/'+id);      
    },
    saveCategory(model){
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken')
        return Axios.post('/category/create', model);      
    },
    updateCategory(model){
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken')
        return Axios.put('/category/update', model);      
    }
}