<template>
  <div>
    <base-header
      class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center bg-gradient-default"
    >
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
          <div class="card card-profile shadow">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img
                      src="img/theme/team-1-800x800.png"
                      class="rounded-circle"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
            >
              <div class="d-flex justify-content-between">
                <!-- <base-button size="sm" type="info" class="mr-4">Cambiar</base-button>
                                <base-button size="sm" type="default" class="float-right">Renovar</base-button> -->
              </div>
            </div>
            <div class="card-body pt-0 pt-md-4">
              <div class="row">
                <div class="col">
                  <div
                    class="card-profile-stats d-flex justify-content-center mt-md-5"
                  >
                    <div>
                      <span class="heading">22</span>
                      <span class="description">Productos</span>
                    </div>
                    <div>
                      <span class="heading">10</span>
                      <span class="description">Servicios</span>
                    </div>
                    <!-- <div>
                                            <span class="heading">89</span>
                                            <span class="description">Comments</span>
                                        </div> -->
                  </div>
                </div>
              </div>
              <div class="text-center">
                <h3>
                  {{ userProfile.fullName
                  }}<span class="font-weight-light"></span>
                </h3>
                <div class="h5 font-weight-300">
                  <i class="ni location_pin mr-2"></i>{{ userProfile.city }}
                </div>
                <div class="h5 mt-4">
                  <i class="ni business_briefcase-24 mr-2"></i>Solution Manager
                  - Creative Tim Officer
                </div>
                <div>
                  <i class="ni education_hat mr-2"></i>University of Computer
                  Science
                </div>
                <hr class="my-4" />
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-8 order-xl-1">
          <card shadow type="secondary">
            <div slot="header" class="bg-white border-0">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">Mi cuenta</h3>
                </div>
                <div class="col-4 text-right">
                  <base-button
                    class="btn btn-sm btn-primary"
                    @click="enableConfig()"
                    >{{ textButton }}</base-button
                  >
                  <base-button
                    class="btn btn-sm btn-primary"
                    @click="guardar()"
                    v-if="editable"
                    >Guardar</base-button
                  >
                </div>
              </div>
            </div>
            <template>
              <form @submit.prevent>
                <h6 class="heading-small text-muted mb-4">
                  Información personal
                </h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6">
                      <base-input
                        alternative=""
                        label="Nombre Completo"
                        placeholder="Nombre completo"
                        input-classes="form-control-alternative"
                        v-model="userProfile.fullName"
                        :disabled="!editable"
                      />
                    </div>
                    <div class="col-lg-6">
                      <base-input
                        alternative=""
                        label="Correo electrónico"
                        placeholder="dominio@example.com"
                        input-classes="form-control-alternative"
                        v-model="userProfile.email"
                        :disabled="!editable"
                      />
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Address -->
                <h6 class="heading-small text-muted mb-4">
                  Información de Contacto
                </h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-md-12">
                      <base-input
                        alternative=""
                        label="Dirección"
                        placeholder="Dirección"
                        input-classes="form-control-alternative"
                        v-model="userProfile.address"
                        :disabled="!editable"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4">
                      <base-input
                        alternative=""
                        label="Ciudad"
                        placeholder="Ciudad"
                        input-classes="form-control-alternative"
                        v-model="userProfile.city"
                        :disabled="!editable"
                      />
                    </div>
                    <div class="col-lg-4">
                      <base-input
                        alternative=""
                        label="País"
                        placeholder="País"
                        input-classes="form-control-alternative"
                        v-model="userProfile.country"
                        :disabled="!editable"
                      />
                    </div>
                    <div class="col-lg-4">
                      <base-input
                        alternative=""
                        label="Teléfono"
                        placeholder="Teléfono"
                        input-classes="form-control-alternative"
                        v-model="userProfile.phone"
                        :disabled="!editable"
                      />
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Description -->
                <h6 class="heading-small text-muted mb-4">Descripción</h6>
                <div class="pl-lg-4">
                  <div class="form-group">
                    <base-input
                      alternative=""
                      label="Breve descripción de la cuenta"
                    >
                      <textarea
                        rows="4"
                        class="form-control form-control-alternative"
                        placeholder="Breve descripción"
                        :disabled="!editable"
                      >
                        A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.
                    </textarea
                    >
                    </base-input>
                  </div>
                </div>
              </form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  components: {},
  name: "user-profile",
  computed: {
    ...mapGetters(["userProfile"]),
  },
  mounted() {
    this.loadProfile();
  },
  data() {
    return {
      editable: false,
      textButton: "Configurar",
      model: {
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        country: "",
        zipCode: "",
        about: "",
      },
    };
  },
  methods: {
    ...mapActions(["getProfile"]),
    loadProfile() {
      this.getProfile();
    },
    enableConfig() {
      this.editable = !this.editable;
      this.textButton = this.editable ? "Cancelar" : "Configurar";
    },
  },
};
</script>
<style></style>
