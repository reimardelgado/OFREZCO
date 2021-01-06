<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-danger">
      <!-- Card stats -->
    </base-header>

    <div class="container-fluid mt--7">
      <div class="card shadow">
        <div class="card-header border-0">
          <div class="row align-items-center">
            <div class="col">
              <h3 class="mb-0">Nuevo plan</h3>
            </div>
          </div>
          <hr />
          <form role="form">
            <div class="row">
              <div class="col-xl-12">
                <base-input
                  class="input-group-alternative mb-3"
                  placeholder="Descripción"
                  addon-left-icon="ni ni-bold-right"
                  v-model="model.description"
                >
                </base-input>
              </div>
              <div class="col-xl-6 col-lg-6">
                <base-input
                  type="number"
                  class="input-group-alternative mb-3"
                  placeholder="Tiempo"
                  addon-left-icon="ni ni-watch-time"
                  v-model="model.time"
                >
                </base-input>
              </div>
              <div class="col-xl-6 col-lg-6">
                <base-input
                  class="input-group-alternative mb-3"
                  placeholder="Precio"
                  addon-left-icon="ni ni-money-coins"
                  v-model="model.price"
                >
                </base-input>
              </div>
            </div>
            <div class="text-center">
              <base-button
                type="secondry"
                @click="cancelar()"
                class="my-4"
                size="sm"
                >Cancelar</base-button
              >
              <base-button
                type="secondary"
                @click="guardar()"
                class="my-4"
                size="sm"
                >Guardar</base-button
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "plan_new",
  components: {},
  methods: {
    guardar() {
      let data = {
        description: this.model.description,
        time: parseInt(this.model.time),
        price: parseFloat(this.model.price)
      }
      this.$store.dispatch('savePlan', data)
      .then(result => {
        if (result.data.error == 0) {
          this.$notify({
            type: "success",
            title: "Plan registrado correctamente.",
          });
            this.$router.push("/admin/plans");    
        }else{
          this.$notify({
            type: "danger",
            title: result.data.msg,
          });
        }
      })
    },
    cancelar() {
      this.$router.push("/admin/plans");
    },
  },
  data(){
    return {
      model: {
        description: '',
        time: 0,
        price: 0.0
      }
    }
  }
};
</script>
<style></style>
