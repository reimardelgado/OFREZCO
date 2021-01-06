import Axios from "axios"

export default {
    login(email, password){
        let model = {
            Username: email,
            password: password
        }
        return Axios.post('/authenticate/login',model);
    },
    getProfile(){        
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken')
        return Axios.get('/account/profile');      
    },
}