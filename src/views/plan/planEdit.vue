<template>
  <div>
    <div class="container-fluid mt--7">
      <div class="card shadow">
        <div class="card-header border-0">
          <div class="row align-items-center">
            <div class="col">
              <h3 class="mb-0">Plan: {{ currentPlan.description }}</h3>
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
                  v-model="currentPlan.description"
                >
                </base-input>
              </div>
              <div class="col-xl-6 col-lg-6">
                <base-input
                  type="number"
                  class="input-group-alternative mb-3"
                  placeholder="Tiempo"
                  addon-left-icon="ni ni-watch-time"
                  v-model="currentPlan.time"
                >
                </base-input>
              </div>
              <div class="col-xl-6 col-lg-6">
                <base-input
                  class="input-group-alternative mb-3"
                  placeholder="Precio"
                  addon-left-icon="ni ni-money-coins"
                  v-model="currentPlan.price"
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
import { mapGetters, mapActions } from "vuex";
export default {
  name: "plan_edit",
  props: {
    id: String,
  },
  components: {},
  computed: {
    ...mapGetters(["currentPlan"]),
  },
  mounted() {
    this.getPlan(this.$route.params.id)
  },
  methods: {
    ...mapActions(["updatePlan", "getPlan"]),
    guardar() {
      let current = {
        id: this.currentPlan.id,
        description: this.currentPlan.description,
        time: parseInt(this.currentPlan.time),
        price: parseFloat(this.currentPlan.price),
        statePlan: this.currentPlan.statePlan,
      };
      this.updatePlan(current).then((result) => {
        if (result.data.error == 0) {
          this.$notify({
            type: "success",
            title: "Plan actualizado correctamente.",
          });
          this.$router.push("/admin/plans");
        } else {
          this.$notify({
            type: "danger",
            title: result.data.msg,
          });
        }
      });
    },
    cancelar() {
      this.$router.push("/admin/plans");
    },
  },
};
</script>
<style></style>
