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
              <h3 class="mb-0">Categoría: {{ currentCategory.description }}</h3>
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
                  v-model="currentCategory.description"
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
    ...mapGetters(["currentCategory"]),
  },
  mounted() {
    this.getCategoria(this.$route.params.id)
    console.log(this.currentCategory)
  },
  methods: {
    ...mapActions(["updateCategoria", "getCategoria"]),
    guardar() {
      this.updateCategoria(this.currentCategory).then((result) => {
        if (result.data.error == 0) {
          this.$notify({
            type: "success",
            title: "Categoría actualizada correctamente.",
          });
          this.$router.push("/admin/categories");
        } else {
          this.$notify({
            type: "danger",
            title: result.data.msg,
          });
        }
      });
    },
    cancelar() {
      this.$router.push("/admin/categories");
    },
  },
};
</script>
<style></style>
