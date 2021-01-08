import Axios from "axios"

export default {
    getStadistic(){   
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken')     
        return Axios.get('/dashboard/stadistic');      
    },
}