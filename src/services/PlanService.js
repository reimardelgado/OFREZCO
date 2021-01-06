import Axios from "axios"

export default {
    getPlans(params){        
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken')
        return Axios.get('/plan/plans', {
            params
        })   
    },
    getPlan(id){        
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken')
        return Axios.get('/plan/plan/'+id);      
    },
    savePlan(model){
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken')
        return Axios.post('/plan/create', model);      
    },
    updatePlan(model){
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken')
        return Axios.put('/plan/update', model);      
    }
}