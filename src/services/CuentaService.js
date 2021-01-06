import Axios from "axios"

export default {
    getAccounts(params){   
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken')     
        return Axios.get('/account/accounts', {
            params
        });      
    },
    getAccount(id){        
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken')
        return Axios.get('/account/'+id);      
    },    
    getAccountByEmail(email){        
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken')
        return Axios.get('/account/email/'+ email);      
    },
    saveAccount(model){
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken')
        return Axios.post('/authenticate/register-admin', model);      
    },
    updateAccount(model){
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken')
        return Axios.put('/account/update', model);      
    }
}