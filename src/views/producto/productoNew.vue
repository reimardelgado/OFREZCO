<template>
  <div>
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
                
                <div height="450px" class="imagePreviewWrapper">
                  <!-- <picture-input
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
                  </picture-input> -->
                  <file-drag-drop v-model="filelist">
                  </file-drag-drop>
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
                  <h3 class="mb-0">Nuevo producto</h3>
                </div>
              </div>
              <hr />
              <form role="form">
                <div class="row">
                  <div class="col-xl-6 col-lg-6">
                    <base-input
                      class="input-group-alternative mb-3"
                      placeholder="Nombre"
                      v-model="model.name"
                    >
                    </base-input>
                  </div>
                  <div class="col-xl-6 col-lg-6">
                    <base-input
                      type="number"
                      class="input-group-alternative mb-3"
                      placeholder="Cantidad"
                      v-model="model.amount"
                    >
                    </base-input>
                  </div>
                  <div class="col-xl-6 col-lg-6">
                    <base-input
                      class="input-group-alternative mb-3"
                      placeholder="Precio"
                      v-model="model.price"
                    >
                    </base-input>
                  </div>
                  <div class="col-xl-6 col-lg-6">
                    <base-input
                      class="input-group-alternative mb-3"
                      placeholder="Descuento (%)"
                      v-model="model.discount"
                    >
                    </base-input>
                  </div>
                  <div class="col-xl-6 col-lg-6">
                    <base-input
                      class="input-group-alternative mb-3"
                      placeholder="Impuesto"
                      v-model="model.tax"
                    >
                    </base-input>
                  </div>
                  <div class="col-xl-6 col-lg-6">
                    <base-input
                      class="input-group-alternative mb-3"
                      placeholder="Descripción corta"
                      v-model="model.description"
                    >
                    </base-input>
                  </div>
                  <div class="col-xl-12">
                    <textarea
                        rows="6"
                        class="form-control form-control-alternative"
                        placeholder="Descripción"
                        v-model="model.largeDescription"
                      >
                        
                    </textarea>
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
import FileDragDrop from '../../components/FileDragDrop.vue';
export default {
  components: {
    PictureInput    
  },
  data() {
    FileDragDrop
    return {
      model: {
        id: null,
        name: null,
        price: null,
        discount: null,
        description: null,
        largeDescription: null,
        tax: null,
        amount: null,
        stock: null,
        image: null,
        accountId: null,
        evaluation: null,
        state:null,
        createdDate: new Date(),
        listNames: [],
        listBytes: []
      },
      previewImage: null,
      filelist: [],
      adjuntosFile: [],
      adjuntosName: [],
    };
  },
  methods: {
    ...mapActions(["saveProduct"]),
    guardar() {

      let attachement = this.filelist.filelist //this.file ? this.file.imageFile : null;  
      
      this.adjuntosFile = attachement.map(function(item) {
        return convertDataURIToBinary(item.urlFile)
      });
      this.adjuntosName = attachement.map(function(item) {
          return item.nameFile
      });

      this.model.userName = this.model.email
      this.listNames = this.adjuntosName
      this.listBytes = this.adjuntosFile
      this.saveProduct(this.model).then((result) => {
        console.log(result);
        if (result.data.error == 0) {
          this.$notify({
            type: "success",
            title: "Producto creado correctamente.",
          });
          this.$router.push("/admin/products");
        } else {
          this.$notify({
            type: "danger",
            title: result.data.msg,
          });
        }
      });
    },
    cancelar() {
      this.$router.push("/admin/products");
    },
    onChange(image) {
      this.$notify({
            type: "success",
            title: "Imagen cargada correctamente!.",
          });
      if (image) {
        this.image = image;
      } else {
        this.$notify({
            type: "danger",
            title: image.fileType,
          });
      }
    },
  }
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
