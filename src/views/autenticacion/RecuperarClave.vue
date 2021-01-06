<template>
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-body px-lg-5 py-lg-5">
                        <div class="text-center text-muted mb-4">
                            <small>Recuperar contraseña</small>
                        </div>
                        <form role="form">
                            <base-input class="input-group-alternative mb-3"
                                        placeholder="Correo electrónico"
                                        addon-left-icon="ni ni-email-83"
                                        v-model="model.email">
                            </base-input>
                            <div style="font-size: 11px; text-align: center">
                              <small class="text-muted">A este correo electrónico se enviará la contraseña temporal para proceder con el cambio.</small>
                            </div>

                            <div class="text-center">
                                <base-button type="primary" @click="enviar()" class="my-4">Enviar</base-button>
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
          email: ''
        }
      }
    },
    methods: {
      enviar(){
          let id = '11111111111111111111'
          this.$router.push('/change-pass/'+id)
      }
    }
  }
</script>
<style>
</style>
