<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
    >
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'ni ni-tv-2 text-red',
            path: '/admin/dashboard'
          }"
        />

        <sidebar-item :link="{name: 'Productos', icon: 'ni ni-shop text-red', path: '/admin/products'}"/>
        <sidebar-item :link="{name: 'Servicios', icon: 'ni ni-delivery-fast text-red', path: '/admin/services'}"/>
        <sidebar-item :link="{name: 'Categorías', icon: 'ni ni-archive-2 text-red', path: '/admin/categories'}"/>
        <sidebar-item :link="{name: 'Cuentas', icon: 'ni ni-key-25 text-red', path: '/admin/accounts'}"/>
        <sidebar-item :link="{name: 'Planes', icon: 'ni ni-bullet-list-67 text-red', path: '/admin/plans'}"/>
        <sidebar-item :link="{name: 'Mi Perfil', icon: 'ni ni-single-02 text-red', path: '/admin/account/profile'}"/>                
        <sidebar-item :link="{name: 'Icons', icon: 'ni ni-planet text-red', path: '/icons'}"/>

      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <!-- <fade-transition :duration="100" origin="center top" mode="out-in"> -->
          <!-- your content here -->
          <router-view></router-view>
        <!-- </fade-transition> -->
        <!-- <content-footer v-if="!$route.meta.hideFooter"></content-footer> -->
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  // import ContentFooter from './ContentFooter.vue';
  // import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      // ContentFooter,
      //FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style lang="scss">
</style>
