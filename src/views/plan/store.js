import PlanService from "../../services/PlanService"


const state = {
    planes: [],
    currentPlan: {
        id: null,
        description: null,
        time: 0,
        price: 0.0,
        statePlan: null
    },
    currentPlanId:null,
    loading: false
}

const getters = {
    plans: state => {
        return state.planes
    },
    currentPlanId: state => {
        return state.currentPlanId
    },
    currentPlan: state => {
        return state.currentPlan
    },
    loading: state => {
        return state.loading
    }
}

const actions = {
    setCurrentPlanId(context, id){
        context.commit("setCurrentPlanId", id)
    },
    getPlans(context,params){
        context.commit('showLoading')
        return PlanService.getPlans(params)
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
    getPlan(context, id){
        context.commit('showLoading')
        return PlanService.getPlan(id)
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
    savePlan(context, model){
        context.commit('showLoading')        
        return PlanService.savePlan(model)
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
    updatePlan(context, model){
        context.commit('showLoading')        
        return PlanService.updatePlan(model)
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
        state.planes = items
    },
    loadDataItem(state, {item}) {
        state.currentPlan = item
    },
    setCurrentPlanId(state, id) {
        state.currentPlanId = id
    },
}

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}