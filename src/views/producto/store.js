import ProductoService from "../../services/ProductoService"


const state = {
    products: [],
    currentProduct: {
        id: null,
        name: null,
        price: null,
        discount: null,
        description: null,
        largeDescription: null,
        tax: null,
        amount: null,
        stock: null,
        image: null,
        accountId: null,
        evaluation: null,
        state:null,
        createdDate: new Date(),
        listNames: [],
        listBytes: []
    },
    loading: false
}

const getters = {
    products: state => {
        return state.products
    },
    currentProduct: state => {
        return state.currentProduct
    },
    loading: state => {
        return state.loading
    }
}

const actions = {
    getProducts(context,params){
        context.commit('showLoading')
        return ProductoService.getProducts(params)
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
    getProduct(context, id){
        context.commit('showLoading')
        console.log(id)
        return ProductoService.getProduct(id)
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
    saveProduct(context, model){
        context.commit('showLoading')        
        return ProductoService.saveProduct(model)
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
    updateProduct(context, model){
        context.commit('showLoading')        
        return ProductoService.updateProduct(model)
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
        state.products = items
    },
    loadDataItem(state, {item}) {
        state.currentProduct = item
    },
}

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}