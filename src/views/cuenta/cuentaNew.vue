<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-danger">
      <!-- Card stats -->
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
          <div class="card shadow">
            <div class="card-header border-0">
              <div class="row align-items-center">
                <div class="col-xl-12">
                  <h3 class="mb-0">Cargar foto</h3>
                </div>
              </div>
              <hr />
            </div>
            <div class="row justify-content-center">
              <div class="col-xl-12">
                <!-- <div
                    class="imagePreviewWrapper rounded-circle"
                    height="400px"
                    :style="{ 'background-image': `url(${previewImage})` }"
                    @click="selectImage"
                  ></div>

                  <input ref="fileInput" type="file" @input="pickFile" /> -->
                <div height="450px" class="imagePreviewWrapper">
                  <picture-input
                    ref="pictureInput"
                    width="400"
                    height="400"
                    margin="16"
                    accept="image/jpeg,image/png"
                    size="10"
                    button-class="btn"
                    :custom-strings="{
                      upload: '<h1>Avatar!</h1>',
                      drag: 'Drag an image or <br>click here to select a file',
                      change: 'Cambiar', // Text only
                      remove: 'Remove Photo',
                      select: 'Select a Photo', // Text only
                      selected: '<p>Photo successfully selected!</p>', // HTML allowed
                      fileSize: 'El tamaño de la imagen excede el límite', // Text only
                      fileType: 'Archivo no soportado.', // Text only
                      aspect: 'Landscape/Portrait', // Text only
                    }"
                    @change="onChange"
                  >
                  </picture-input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8 order-xl-1">
          <div class="card shadow">
            <div class="card-header border-0">
              <div class="row align-items-center">
                <div class="col">
                  <h3 class="mb-0">Nueva cuenta</h3>
                </div>
              </div>
              <hr />
              <form role="form">
                <div class="row">
                  <div class="col-xl-6 col-lg-6">
                    <base-input
                      class="input-group-alternative mb-3"
                      placeholder="Identificación"
                      v-model="model.identification"
                    >
                    </base-input>
                  </div>
                  <div class="col-xl-6 col-lg-6">
                    <base-input
                      class="input-group-alternative mb-3"
                      placeholder="Nombre complerto"
                      v-model="model.fullName"
                    >
                    </base-input>
                  </div>
                  <div class="col-xl-6 col-lg-6">
                    <base-input
                      type="email"
                      class="input-group-alternative mb-3"
                      placeholder="Correo electrónico"
                      v-model="model.email"
                    >
                    </base-input>
                  </div>
                  <div class="col-xl-6 col-lg-6">
                    <base-input
                      type="password"
                      class="input-group-alternative mb-3"
                      placeholder="Contraseña"
                      v-model="model.password"
                    >
                    </base-input>
                  </div>
                  <div class="col-xl-6 col-lg-6">
                    <b-form-select
                      v-model="selected"
                      :options="paises"
                      class="input-group-alternative mb-3"
                    >
                    </b-form-select>
                  </div>
                  <div class="col-xl-6 col-lg-6">
                    <base-input
                      class="input-group-alternative mb-3"
                      placeholder="Ciudad"
                      v-model="model.city"
                    >
                    </base-input>
                  </div>
                  <div class="col-xl-12">
                    <base-input
                      class="input-group-alternative mb-3"
                      placeholder="Dirección"
                      v-model="model.address"
                    >
                    </base-input>
                  </div>
                  <div class="col-xl-6 col-lg-6">
                    <base-input
                      type="phone"
                      class="input-group-alternative mb-3"
                      placeholder="Teléfono"
                      v-model="model.phone"
                    >
                    </base-input>
                  </div>
                  <div class="col-xl-6 col-lg-6">
                    <b-form-select
                      v-model="selectedM"
                      :options="modalidades"
                      class="input-group-alternative mb-3"
                      placeholder="Modalidad"
                    >
                    </b-form-select>
                  </div>
                  <div class="col-xl-6 col-lg-6">
                    <base-checkbox
                      class="custom-control-alternative"
                      v-model="model.appMovil"
                    >
                      <span class="text-muted">Requiere Aplicación Móvil</span>
                    </base-checkbox>
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
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import PictureInput from "vue-picture-input";
export default {
  components: { PictureInput },
  data() {
    return {
      selected: "0",
      paises: [
        { value: "0", text: "Países" },
        { value: "1", text: "Ecuador" },
      ],
      selectedM: "",
      modalidades: [
        { value: -1, text: "Modalidad" },
        { value: 0, text: "Productos" },
        { value: 1, text: "Servicios" },
        { value: 2, text: "Productos / Servicios" },
      ],
      model: {
        identification: "",
        fullName: "",
        userName: "",
        email: "",
        password: "",
        country: 1,
        city: "",
        address: "",
        phone: "",
        bussinesType: 2,
        appMovil: false,
        accountType: "Admin",
        CreatedTime: new Date(),
        ModifiedTime: new Date(),
      },
      previewImage: null,
    };
  },
  methods: {
    ...mapActions(["saveAccount"]),
    guardar() {
      this.model.userName = this.model.email;
      this.saveAccount(this.model).then((result) => {
        console.log(result);
        if (result.data.error == 0) {
          this.$notify({
            type: "success",
            title: "Cuenta actualizada correctamente.",
          });
          this.$router.push("/admin/accounts");
        } else {
          this.$notify({
            type: "danger",
            title: result.data.msg,
          });
        }
      });
    },
    cancelar() {
      this.$router.push("/admin/accounts");
    },
    onChange(image) {
      this.$notify({
            type: "success",
            title: "New picture selected!.",
          });
      if (image) {
        console.log("Picture loaded.");
        this.image = image;
      } else {
        this.$notify({
            type: "danger",
            title: image.fileType,
          });
      }
    },
  },
};
</script>
<style>
.imagePreviewWrapper {
  width: 250px;
  height: 250px;
  display: block;
  cursor: pointer;
  margin: 0 auto 30px;
  background-size: cover;
  background-position: center center;
}
</style>