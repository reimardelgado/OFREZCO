<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-default">
      <!-- Card stats -->
    </base-header>

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
