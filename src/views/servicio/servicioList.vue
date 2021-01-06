<template>
  <div class="card shadow" :class="type === 'dark' ? 'bg-default' : ''">
    <div
      class="card-header border-0"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white' : ''">
            {{ title }}
          </h3>
        </div>
        <div class="col text-right">
          <base-button @click="nuevo()" size="sm">Nuevo</base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table
        class="table align-items-center table-flush"
        :class="type === 'dark' ? 'table-dark' : ''"
        :thead-classes="type === 'dark' ? 'thead-dark' : 'thead-light'"
        tbody-classes="list"
        :data="tableData"
      >
        <template slot="columns">
          <th width="30%">Nombre</th>
          <th width="15%">Usuario</th>
          <th width="15%">Correo</th>
          <th width="15%">Modalidad</th>
          <th width="15%">Estado</th>
          <th width="10%"></th>
        </template>

        <template slot-scope="{ row }">
          <th scope="row">
            <div class="media align-items-center">
              <div class="media-body">
                <span class="name mb-0 text-sm">{{ row.nombre }}</span>
              </div>
            </div>
          </th>
          <td class="budget">
            {{ row.usuario }}
          </td>
          <td class="budget">
            {{ row.correo }}
          </td>
          <td class="budget">
            {{ row.modalidad }}
          </td>

          <td class="budget">
            {{ row.estado }}
          </td>

          <td class="text-right">
            <base-button
              class="btn btn-sm btn-icon-only text-light"
              type="secondary" @click="editar(row.id)"
            >
              <i class="ni ni-settings"></i
            ></base-button>
            <base-button
              class="btn btn-sm btn-icon-only text-light"
              type="secondary"
              v-b-toggle.showrow
            >
              <i class="ni ni-fat-delete"></i
            ></base-button>
          </td>
        </template>
      </base-table>
    </div>

    <div
      class="card-footer d-flex justify-content-end"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
      <!-- <base-pagination total="30"></base-pagination> -->
    </div>

    <!--  -->


  </div>
</template>
<script>
export default {
  name: "servicio-list",
  props: {
    type: {
      type: String,
    },
    title: String,
  },
  computed: {},
  data() {
    return {
      tableData: [
        {
          id: "dfd156",
          nombre: "Cuenta 1",
          usuario: "cuenta1",
          correo: "cuenta@gmail.com",
          modalidad: "Ambos",
          estado: "Activo",
        }
      ],
    };
  },
  methods: {
    nuevo(){
      this.$router.push('/service_new')
    },
    editar(id){
      this.$router.push({path: `/service_edit/${id}`})
    }
  },
};
</script>
<style>
</style>
