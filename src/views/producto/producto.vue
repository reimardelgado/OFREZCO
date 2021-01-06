<template>
    <div>
        <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-danger">
            <!-- Card stats -->
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <producto-list title="Productos"></producto-list>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
  import productoList from './productoList'
  export default {
    name: 'tables',
    components: {
      productoList
    }
  };
</script>
<style></style>
