import DashboardService from "../../services/DashboardService"


const state = {
    stadistic: {
        totalProducts: "",
        totalServices: "",
        salesProducts: "",
        salesServices: ""
    },
    loading: false
}

const getters = {
    stadistic: state => {
        return state.stadistic
    },
    loading: state => {
        return state.loading
    }
}

const actions = {
    getStadistic(context){
        context.commit('showLoading')
        return DashboardService.getStadistic()
        .then((result) => {
            if (result.data.error == 0) {                  
                const item = result.data.data
                context.commit('loadData', {item}) 
            }
        })
        .catch(() =>{

        })
        .finally(() => {
            context.commit('hideLoading')
        })
    },
}

const mutations = {
    showLoading(state) {
        state.loading = true
    },
    hideLoading(state) {
        state.loading = false
    },
    loadData(state, {item}) {
        state.stadistic = item
    }
}

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}