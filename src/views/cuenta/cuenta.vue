<template>
    <div>
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
