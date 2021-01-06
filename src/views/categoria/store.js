import CategoriaService from "../../services/CategoriaService"


const state = {
    categories: [],
    currentCategory: {
        id: null,
        description: null,
        accountId: undefined,
        state: null
    },
    currentCategoryId:null,
    loading: false
}

const getters = {
    categories: state => {
        return state.categories
    },
    currentCategoryId: state => {
        return state.currentCategoryId
    },
    currentCategory: state => {
        return state.currentCategory
    },
    loading: state => {
        return state.loading
    }
}

const actions = {
    setCurrentCategoriaId(context, id){
        context.commit("setCurrentCategoriaId", id)
    },
    getCategorias(context,params){
        context.commit('showLoading')
        return CategoriaService.getCategories(params)
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
    getCategoria(context, id){
        context.commit('showLoading')
        console.log(id)
        return CategoriaService.getCategory(id)
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
    saveCategoria(context, model){
        context.commit('showLoading')        
        return CategoriaService.saveCategory(model)
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
    updateCategoria(context, model){
        context.commit('showLoading')        
        return CategoriaService.updateCategory(model)
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
        state.categories = items
    },
    loadDataItem(state, {item}) {
        state.currentCategory = item
    },
    setCurrentCategoriaId(state, id) {
        state.currentCategoryId = id
    },
}

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}