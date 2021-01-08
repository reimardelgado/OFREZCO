import Vue from "vue"
import Vuex from "vuex"

import dashboardStore from '@/views/Dashboard/store'
import authStore from '@/views/autenticacion/store'
import planStore from '@/views/plan/store'
import cuentaStore from '@/views/cuenta/store'
import categoriaStore from '@/views/categoria/store'
import productoStore from '@/views/producto/store'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        dashboardStore,
        authStore,
        planStore,
        cuentaStore,
        categoriaStore,
        productoStore
    }
})