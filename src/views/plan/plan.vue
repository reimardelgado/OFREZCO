<template>
  <div>
    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col">
          <plan-list title="Planes" type="" :items="plans"></plan-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import planList from "./planList";
export default {
  name: "planes",
  components: {
    planList,
  },
  computed: {
    ...mapGetters(["plans"]),
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
