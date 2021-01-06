/*!

=========================================================
* Vue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'
import './registerServiceWorker'
import {
  store
} from './store'
import ArgonDashboard from './plugins/argon-dashboard'
import BootstrapVue from "bootstrap-vue"
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(require('vue-moment'));

Vue.config.productionTip = false

import axios from 'axios'
import appConfig from '@/config/appConfig'
axios.defaults.baseURL = appConfig.baseUrl
axios.interceptors.response.use((response) => {
  //console.log(response.headers["pagination"])
  if (response.headers["pagination"] !== undefined && response.headers["pagination"] !== null) {
    response.headers["pagination"] = JSON.parse(response.headers["pagination"]);
  }
  return response;
});

Nprogress.configure({
  showSpinner: false
})

router.beforeEach((to, from, next) => {  
  console.log(to)
   if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log(localStorage.getItem('expirationTime'))
    console.log(new Date())
    if (localStorage.getItem('accessToken') && localStorage.getItem('expirationTime') > new Date()) {
       next()
    }else{
      localStorage.clear()
      sessionStorage.clear()
      next({
        path: '/authenticate/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
   }else{
     next()
   }
})

router.afterEach(() => {
  Nprogress.done()
})

Vue.use(Vuetify, {
  theme: {
    primary: "#005CAE",
    secondary: "#424242"
  }
})
Vue.use(ArgonDashboard)

Vue.mixin({
  methods: {
    formatPrice: function (value) {
      let val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  }
})

Vue.use(BootstrapVue)

Vue.use(VueToast, {
  position: 'bottom',
  duration: 5000,
  dismissible: true
})
let instance = Vue.$toast.open('You did it!');
instance.dismiss();
Vue.$toast.clear();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')