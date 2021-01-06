<template>
    <div>
        <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-danger">
            <!-- Card stats -->
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <cuenta-list title="Cuentas"></cuenta-list>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
  import cuentaList from './cuentaList'
  export default {
    name: 'tables',
    components: {
      cuentaList
    }
  };
</script>
<style></style>
