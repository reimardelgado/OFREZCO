import Vue from "vue"
import Vuex from "vuex"

import authStore from '@/views/autenticacion/store'
import planStore from '@/views/plan/store'
import cuentaStore from '@/views/cuenta/store'
import categoriaStore from '@/views/categoria/store'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        authStore,
        planStore,
        cuentaStore,
        categoriaStore
    }
})