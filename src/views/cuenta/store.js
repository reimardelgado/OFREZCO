import CuentaService from "../../services/CuentaService"


const state = {
    accounts: [],
    currentAccount: {
        id: null,
        identification: null,
        fullName: null,
        userName: null,
        email: null,
        password: null,
        country: null,
        city: null,
        address: null,
        phone: null,
        bussinesType: null,
        appMovil: false,
        accountType: null,
        CreatedTime: null,
        ModifiedTime: null
    },
    loading: false
}

const getters = {
    accounts: state => {
        return state.accounts
    },
    currentAccount: state => {
        return state.currentAccount
    },
    loading: state => {
        return state.loading
    }
}

const actions = {
    getAccounts(context,params){
        context.commit('showLoading')
        return CuentaService.getAccounts(params)
        .then((result) => {
            if (result.data.error == 0) {                  
                const items = result.data.data
                context.commit('loadData', {items}) 
                return result.headers["pagination"] ?? {} 
            } else {
                const items = []
                context.commit('loadData', {items})
            }
        })
        .catch(() =>{

        })
        .finally(() => {
            context.commit('hideLoading')
        })
    },
    getAccount(context, id){
        context.commit('showLoading')
        console.log(id)
        return CuentaService.getAccount(id)
        .then((result) => {
            if (result.data.error == 0) {
                const item = result.data.data
                context.commit('loadDataItem', {item})
            } else {
                const item = {}
                context.commit('loadDataItem', {item})
            }
        })
        .finally(() => {
            context.commit('hideLoading')
        })
    },
    saveAccount(context, model){
        console.log(model)
        context.commit('showLoading')        
        return CuentaService.saveAccount(model)
        .then((result) => {
            if (result.data.error == 0) {                
                context.commit('hideLoading')
            } else {
                context.commit('hideLoading')
            }
            return result
        })
        .catch(() =>{

        })
        .finally(() => {
            context.commit('hideLoading')
        })
    },
    updateAccount(context, model){
        context.commit('showLoading')        
        return CuentaService.updateAccount(model)
        .then((result) => {
            if (result.data.error == 0) {                
                context.commit('hideLoading')
            } else {
                context.commit('hideLoading')
            }
            return result
        })
        .catch(() =>{

        })
        .finally(() => {
            context.commit('hideLoading')
        })
    }

}

const mutations = {
    showLoading(state) {
        state.loading = true
    },
    hideLoading(state) {
        state.loading = false
    },
    loadData(state, {items}) {
        state.accounts = items
    },
    loadDataItem(state, {item}) {
        state.currentAccount = item
    },
}

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}