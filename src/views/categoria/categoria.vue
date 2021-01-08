<template>
  <div>
    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col">
          <categoria-list title="Categorías" type="" :items="categories"></categoria-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import categoriaList from "./categoriaList";
export default {
  name: "categorias",
  components: {
    categoriaList,
  },
  computed: {
    ...mapGetters(["categories"]),
  },
  mounted() {
    
  },
  data() {
    return {
    };
  },
  methods: {
    
  }
};
</script>
<style></style>
