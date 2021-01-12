<template>
  <v-layout>
    <div class="flex items-center justify-center w-full h-screen text-center">
    <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
      <!-- <img :src="imageUrl" height="100" v-if="imageUrl!=''"> -->
      <div class="p-12 bg-gray-100 border border-gray-300" @dragover="dragover" @dragleave="dragleave" @drop="drop">
    <input type="file" multiple name="fields[assetsFieldHandle][]" id="assetsFieldHandle" 
      class="w-px h-px opacity-0 overflow-hidden absolute" @change="onChange" ref="file" accept=".pdf,.jpg,.jpeg,.png,.txt,.doc,.docx,.xls,.xlsx" />
  
  
    <label for="assetsFieldHandle" class="block cursor-pointer">
      <img src="/static/img/folder.png" height="150px" width="150px" >
      <div>
        Pegue una imagen, arrastre y suelte archivos, 
        o bien <span class="underline">pulse aquí</span> para cargar.
      </div>
    </label>
    <ul class="mt-4" v-if="this.filelist.length" v-cloak>
      <li class="text-sm p-1" v-for="file in filelist">
        <span v-if="verifySize(file.size) > 2" style="color: red">
        {{ file.name }} - {{verifySize(file.size)}}Mb Archivo no permitido
        </span>
        <span v-if="verifySize(file.size) <= 2">
        {{ file.name }} 
        </span>
        <button class="ml-2" type="button" @click="remove(filelist.indexOf(file))" title="Eliminar"> Eliminar</button>
      </li>
    </ul>
  </div>
    </v-flex>
    </div>
  </v-layout>
</template>
<script>
export default {
  //props: [ "errorMessages", "hint"],
  delimiters: ["${", "}"],
  data() {
    return {
      filelist: [],
      fileFiles: [],
      archive: {
        nameFile: "",
        fileFile: "",
        urlFile: "",
      },
      cantidad: 0,
    }; // Store our uploaded files
  },
  methods: {
    onChange() {
      let archivos = [...this.$refs.file.files];
      let cant = archivos.length;
      if (cant + this.cantidad > 12) {
        this.$root.$emit(
          "showSnackBar",
          "Solo se permiten hasta 12 imágenes",
          "error"
        );
      } else {
        if (archivos.length > 0) {
          this.cantidad += cant;
          archivos.forEach((element) => {
            if (!this.verifyType(element.type)) {
              this.$root.$emit(
                "showSnackBar",
                "Adjunto con formato no permitido",
                "error"
              );
              this.filelist.push(element);
            } else if (this.verifySize(element.size) > 2) {
              this.$root.$emit(
                "showSnackBar",
                "Tamaño máximo de imagen es de 2Mb",
                "error"
              );
              this.filelist.push(element);
            } else {
              this.filelist.push(element);

              const fr = new FileReader();
              fr.readAsDataURL(element);
              fr.addEventListener(
                "load",
                () => {
                  let arch = {
                    nameFile: element.name,
                    fileFile: element,
                    urlFile: fr.result
                  }
                  this.fileFiles.push(arch); // this is an image file that can be sent to server...
                  this.$emit("input", {
                    files: this.fileFiles
                  });
                },
                { passive: true }
              );
              
            }
          });
        }
      }
    },
    remove(i) {
      this.filelist.splice(i, 1);
      this.cantidad = this.cantidad - 1;
    },
    dragover(event) {
      event.preventDefault();
      // Add some visual fluff to show the user can drop its files
      if (!event.currentTarget.classList.contains("bg-green-300")) {
        event.currentTarget.classList.remove("bg-gray-100");
        event.currentTarget.classList.add("bg-green-300");
      }
    },
    dragleave(event) {
      // Clean up
      event.currentTarget.classList.add("bg-gray-100");
      event.currentTarget.classList.remove("bg-green-300");
    },
    drop(event) {
      event.preventDefault();
      this.$refs.file.files = event.dataTransfer.files;
      this.onChange(); // Trigger the onChange event manually
      // Clean up
      event.currentTarget.classList.add("bg-gray-100");
      event.currentTarget.classList.remove("bg-green-300");
    },
    verifyType: function(item) {
      const tipos = [
        "image/png",
        "image/jpeg",
      ];
      return tipos.indexOf(item) > -1;
    },
    verifySize: function(val) {
      return Math.floor(val / 1024 / 1024);
    },
  },
};
</script>
<style>
.w-full {
  width: 100%;
}
.p-12 {
  padding: 3rem;
}
.border {
  border-width: 1px;
}
.border-gray-300 {
  border-color: #e2e8f0;
}
.bg-gray-100 {
  background-color: #f7fafc;
}
*,
::after,
::before {
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
}
*,
::after,
::before {
  box-sizing: inherit;
}
.w-px {
  width: 1px;
}
.absolute {
  position: absolute;
}
.overflow-hidden {
  overflow: hidden;
}
.opacity-0 {
  opacity: 0;
}
.h-px {
  height: 1px;
}
.block {
  display: block;
  font-size: 14px;
}
.cursor-pointer {
  cursor: pointer;
}
.mt-4 {
  margin-top: 1rem;
}
ol,
ul {
  list-style: none;
  margin: 0;
  margin-top: 0px;
  padding: 0;
}
[v-cloak] {
  display: none;
}
.ml-2 {
  margin-left: 0.5rem;
}
.underline {
  text-decoration: underline;
  color: #005cae;
}
</style>
