<template>
    <div>
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
