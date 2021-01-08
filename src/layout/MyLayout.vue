<template>
  <div class="main-content bg-default" style="min-height: 100vh">
    <!-- Navbar -->
    <!-- <base-nav class="navbar-top navbar-horizontal navbar-dark"
                  containerClasses="px-4 container"
                  expand>
        </base-nav> -->
    <!-- Header -->
    <div class="header bg-danger py-7 py-lg-8">
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            class="fill-default"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <div class="container mt--9 pb-5">
      <tabs class="flex-column flex-md-row">
        <card shadow>
            <tab-pane v-for="item in items" :key="item">
                <span>
                   <i :class="item.icon">
                    {{item.name}}
                   </i>
                </span>
                <p class="description">
                  <router-view></router-view>
                </p>
            </tab-pane>
        </card>
    </tabs>
      <!-- <slide-y-up-transition mode="out-in" origin="center top"> -->
        <!-- <router-view></router-view> -->
      <!-- </slide-y-up-transition> -->
    </div>
    <footer class="py-5">
      <div class="container">
        <div class="row align-items-center justify-content-xl-between">
          <div class="col-xl-12 text-center">
            <div class="copyright text-center text-xl-center text-muted">
              &copy; {{ year }}
              <a
                href="https://www.creative-tim.com"
                class="font-weight-bold ml-1"
                target="_blank"
                ><small>Digital Creation</small></a
              >
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
//import { SlideYUpTransition } from "vue2-transitions";

export default {
  name: "my-layout",
  components: {
    //  SlideYUpTransition,
  },
  data() {
    return {
      year: new Date().getFullYear(),
      showMenu: false,
      tab: null,
      items: [
        { 
          name: 'Home',
            icon: 'ni ni-tv-2 text-red',
            path: '/admin/dashboard'
        }, 
        {name: 'Productos', icon: 'ni ni-shop text-red', path: '/admin/products'},
        {name: 'Servicios', icon: 'ni ni-delivery-fast text-red', path: '/admin/services'},
        {name: 'Categorías', icon: 'ni ni-archive-2 text-red', path: '/admin/categories'},
        {name: 'Cuentas', icon: 'ni ni-key-25 text-red', path: '/admin/accounts'},
        {name: 'Planes', icon: 'ni ni-bullet-list-67 text-red', path: '/admin/plans'},
        {name: 'Mi Perfil', icon: 'ni ni-single-02 text-red', path: '/admin/account/profile'},
        {name: 'Icons', icon: 'ni ni-planet text-red', path: '/icons'}
      ]
    };
  },
};
</script>
<style>
</style>
