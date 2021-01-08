import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
//import MyLayout from '@/layout/MyLayout'
Vue.use(Router)

import { LoginRoute, RecuperarRoute, CambiarRoute } from '@/views/autenticacion/router'
const routerAuthLayout = {
  path: '/',
  component: AuthLayout,
  children: [
    LoginRoute,
    RecuperarRoute,
    CambiarRoute
  ]
}

import { PrincipalRoute } from '@/views/Dashboard/router'
import { PlanListRoute, PlanEditarRoute, PlanNuevoRoute } from '@/views/plan/router'
import { CategoriaRoute, CategoriaNuevaRoute, CategoriaEditarRoute } from '@/views/categoria/router'
import { CuentaRoute, CuentaNuevaRoute, CuentaEditarRoute, CuentaProfileRoute } from '@/views/cuenta/router'
import { ProductoEditarRoute, ProductoNuevaRoute, ProductoRoute } from './views/producto/router'
import { ServicioEditarRoute, ServicioNuevaRoute, ServicioRoute } from './views/servicio/router'

const routerDashLayout = {
  path: '/',
  component: DashboardLayout,
  children: [
    PrincipalRoute,

    PlanListRoute,
    PlanNuevoRoute,
    PlanEditarRoute,

    CuentaRoute,
    CuentaNuevaRoute,
    CuentaEditarRoute,
    CuentaProfileRoute,

    CategoriaRoute,
    CategoriaEditarRoute,
    CategoriaNuevaRoute,

    ProductoRoute,
    ProductoNuevaRoute,
    ProductoEditarRoute,

    ServicioRoute,
    ServicioNuevaRoute,
    ServicioEditarRoute
  ]
}

export default new Router({
  linkExactActiveClass: 'active',
  mode: "history",
  routes: [
    routerAuthLayout,
    routerDashLayout,
    {
      path: '/',
      redirect: 'dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '/icons',
          name: 'icons',
          component: () => import( /* webpackChunkName: "demo" */ './views/Icons.vue')
        },
        {
          path: '/maps',
          name: 'maps',
          component: () => import( /* webpackChunkName: "demo" */ './views/Maps.vue')
        },
        {
          path: '/tables',
          name: 'tables',
          component: () => import( /* webpackChunkName: "demo" */ './views/Tables.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/register',
          name: 'register',
          component: () => import( /* webpackChunkName: "demo" */ './views/Register.vue')
        }
      ]
    }
  ]
})