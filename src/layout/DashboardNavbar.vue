<template>
    <base-nav class="navbar-top navbar-dark"
              id="navbar-main"
              :show-toggle-button="false"
              expand>
        <!-- <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <div class="form-group mb-0">
                <base-input placeholder="Search"
                            class="input-group-alternative"
                            alternative=""
                            addon-right-icon="fas fa-search">
                </base-input>
            </div>
        </form> -->
        <ul class="navbar-nav align-items-center form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <li class="nav-item dropdown">
                <base-dropdown class="nav-link pr-0">
                    <div class="media align-items-center" slot="title">
                <span class="avatar avatar-sm rounded-circle">
                  <img alt="Image placeholder" src="/img/theme/team-4-800x800.jpg">
                </span>
                        <div class="media-body ml-2 d-none d-lg-block">
                            <span class="mb-0 text-sm  font-weight-bold">{{userProfile.fullName}}</span>
                        </div>
                    </div>

                    <template>
                        <div class=" dropdown-header noti-title">
                            <h6 class="text-overflow m-0">Welcome!</h6>
                        </div>
                        <span to="/admin/account/profile" class="dropdown-item">
                            <i class="ni ni-single-02"></i>
                            <span>Mi Perfil</span>
                        </span>
                        <router-link to="{ name: 'cambiarPass', params: { id: userProfile.fullName }}"  class="dropdown-item">
                            <i class="ni ni-settings-gear-65"></i>
                            <span>Cambiar contraseña</span>
                        </router-link>
                        <!-- <router-link to="/profile" class="dropdown-item">
                            <i class="ni ni-calendar-grid-58"></i>
                            <span>Activity</span>
                        </router-link> -->
                        <div class="dropdown-divider"></div>
                        <span @click="logout" class="dropdown-item">
                            <i class="ni ni-user-run"></i>
                            <span>Cerrar Sesión</span>
                        </span>
                    </template>
                </base-dropdown>
            </li>
        </ul>
          
      
    </base-nav>  
</template>
<script>
import { mapGetters, mapActions } from "vuex";
  export default {    
    computed: {
    ...mapGetters(['userProfile'])
    },
    mounted(){
      this.getProfile()
    },
    data() {
      return {
        activeNotifications: false,
        showMenu: false,
        searchQuery: ''
      };
    },
    methods: {
      ...mapActions(['getProfile','logoutUser']),
      toggleSidebar() {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
      },
      hideSidebar() {
        this.$sidebar.displaySidebar(false);
      },
      toggleMenu() {
        this.showMenu = !this.showMenu;
      },
      logout(){
        this.logoutUser()
        this.$router.push('/authenticate/login')
      }
    }
  };
</script>
