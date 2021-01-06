<template>
    <div>
        <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-danger">
            <!-- Card stats -->
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <servicio-list title="Servicios"></servicio-list>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
  import servicioList from './servicioList'
  export default {
    name: 'servicios',
    components: {
      servicioList
    }
  };
</script>
<style></style>
