<template>
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-body px-lg-5 py-lg-5">
                        <div class="text-center text-muted mb-4">
                            <small>Cambiar contraseña</small>
                        </div>
                        <form role="form">
                            <input type="hidden" v-model="model.email">

                            <base-input class="input-group-alternative"
                                        placeholder="Contraseña actual"
                                        type="password"
                                        addon-left-icon="ni ni-lock-circle-open"
                                        v-model="model.pActual">
                            </base-input>

                            <base-input class="input-group-alternative"
                                        placeholder="Nueva Contraseña"
                                        type="password"
                                        addon-left-icon="ni ni-lock-circle-open"
                                        v-model="model.pNueva">
                            </base-input>

                            <base-input class="input-group-alternative"
                                        placeholder="Confirmar Contraseña"
                                        type="password"
                                        addon-left-icon="ni ni-lock-circle-open"
                                        v-model="model.pConfirma">
                            </base-input>

                            <div class="text-center">
                                <base-button type="primary" @click="cambiar()" class="my-4">Cambiar</base-button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
  export default {
    name: 'login',
    data() {
      return {
        model: {
          email: '',
          pActual: '',
          pNueva: '',
          pConfirma: ''
        }
      }
    },
    methods: {
      cambiar(){
        this.$router.push('/login')
      }
    }
  }
</script>
<style>
</style>
