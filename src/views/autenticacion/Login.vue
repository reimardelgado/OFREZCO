<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <small>Entre sus credenciales</small>
          </div>
          <div v-if="mensaje != ''" class="divError">
             <base-alert type="primary">
                  {{mensaje}}
              </base-alert>
          </div>
          <form role="form">
            <base-input
              class="input-group-alternative mb-3"
              placeholder="Correo electrónico"
              addon-left-icon="ni ni-email-83"
              v-model="model.email"
            >
            </base-input>

            <base-input
              class="input-group-alternative"
              placeholder="Contraseña"
              type="password"
              addon-left-icon="ni ni-lock-circle-open"
              v-model="model.password"
            >
            </base-input>
            
            <base-checkbox class="custom-control-alternative">
              <span class="text-muted">Recordar contraseña</span>
            </base-checkbox>
            <div class="text-center">
              <base-button type="primary" @click="loginUser()" class="my-4"
                >Entrar</base-button
              >
            </div>            
          </form>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12 text-center">
          <router-link to="/recover-pass" class="text-light">
            <span>Olvidó su contraseña?</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "login",
  computed: {
    ...mapGetters([
      'profile'
    ])
  },
  mounted() {

  },
  data() {
    return {
      model: {
        email: "",
        password: "",
      },
      mensaje: ''
    };
  },
  methods: {
    loginUser() {
      this.$store
        .dispatch("login", {
          email: this.model.email,
          password: this.model.password,
        })
        .then(result => {          
          if (result.data.error == 0) {
            this.$router.push("/admin/dashboard");
          }else{            
              this.mensaje= result.data.msg
          }
        })
        .catch(() => {
          this.$notify({
              type: "danger",
              title: "Error en validación de datos",
            });
        })
        .finally(() => {});
    },
  },
};
</script>
<style>
.divError {
  font-size: 8px;
  text-align: center;
}
</style>
