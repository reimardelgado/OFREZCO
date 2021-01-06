<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-danger">
      <!-- Card stats -->
    </base-header>

    <div class="container-fluid mt--7">
      <div class="card shadow">
        <div
          class="card-header border-0"
        >
          <div class="row align-items-center">
            <div class="col">
              <h3 class="mb-0">
                Nuevo servicio
              </h3>
            </div>
          </div>
          <hr />
          <form role="form">
            <div class="row">
              <div class="col-xl-12">
                <base-input
                  class="input-group-alternative mb-3"
                    placeholder="Descripción"
                >
                </base-input>
              </div>
              <div class="col-xl-6">
                <base-input
                  type="email"
                  class="input-group-alternative mb-3"
                  placeholder="Correo electrónico"
                >
                </base-input>
              </div>
              <div class="col-xl-6 col-lg-6">
                <base-input
                  type="password"
                  class="input-group-alternative mb-3"
                  placeholder="Contraseña"
                >
                </base-input>
              </div>
              <div class="col-xl-6 col-lg-6">
                <b-form-select
                  v-model="selected"
                  :options="options"
                  class="input-group-alternative mb-3"
                >
                </b-form-select>
              </div>
              <div class="col-xl-6 col-lg-6">
                <base-input
                  class="input-group-alternative mb-3"
                  placeholder="Ciudad"
                >
                </base-input>
              </div>
              <div class="col-xl-12">
                <base-input
                  class="input-group-alternative mb-3"
                  placeholder="Dirección"
                >
                </base-input>
              </div>
              <div class="col-xl-6">
                <base-input
                  type="phone"
                  class="input-group-alternative mb-3"
                  placeholder="Teléfono"
                >
                </base-input>
              </div>
              <div class="col-xl-6 col-lg-6">
                <base-input
                  class="input-group-alternative mb-3"
                  placeholder="Modalidad"
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
  name: 'servicio_new',
  components: {},
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Provincia" },
        { value: "1", text: "Pichincha" },
      ],
    };
  },
  methods: {
    guardar() {
      this.$router.push("/services");
    },
    cancelar() {
      this.$router.push("/services");
    },
  }
};
</script>
<style></style>
