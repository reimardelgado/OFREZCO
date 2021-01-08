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
        :data="accounts"
      >
        <template slot="columns">
          <th width="10%">identificación</th>
          <th width="30%">Nombre Completo</th>
          <th width="10%">Correo</th>
          <th width="10%">Modalidad</th>
          <th width="10%">App?</th>
          <th width="10%">Fecha</th>
          <th width="10%">Estado</th>
          <th width="10%"></th>
        </template>

        <template slot-scope="{ row }">
          <td class="budget">
            {{ row.identification }}
          </td>
          <th scope="row">
            <div class="media align-items-center">
              <div class="media-body">
                <span class="name mb-0 text-sm">{{ row.fullName }}</span>
              </div>
            </div>
          </th>
          <td class="budget">
            {{ row.email }}
          </td>
          <td class="budget">
            {{ row.bussinesType }}
          </td>
          <td class="budget">
            {{ row.appMovil ? "S" : "N" }}
          </td>
          <td class="budget">
            {{ row.createdTime | moment("DD/MM/YYYY") }}
          </td>
          <td class="budget">
            {{ row.modalidad }}
          </td>

          <td class="text-right">
            <base-button
              class="btn btn-sm btn-icon-only text-light"
              type="secondary"
              @click="editar(row.id)"
            >
              <i class="ni ni-settings"></i
            ></base-button>
            <base-button
              class="btn btn-sm btn-icon-only text-light"
              type="secondary"
              @click="suscripciones(row.id)"
            >
              <i class="ni ni-world-2"></i
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
      <base-pagination
        :page-count="pageCount"
        :per-page="pagination.perPage"
        size="sm"
        v-model="pagination.page"
        @input="paginar"
      ></base-pagination>
    </div>

    <!--  -->
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "cuenta-list",
  props: {
    type: {
      type: String,
    },
    title: String,
  },
  computed: {
    ...mapGetters(["accounts"]),
  },
  mounted() {
    this.reload();
  },
  data() {
    return {
      pagination: {
        page: 1,
        perPage: 5,
      },
      pageCount: 0,
    };
  },
  methods: {
    ...mapActions(["getAccounts", "getAccount"]),
    nuevo() {
      this.$router.push({ name: "nuevaCuenta" });
    },
    editar(id) {
      this.getAccount(id);
      this.$router.push({
        name: "editarCuenta",
        params: {
          id,
        },
      });
    },
    suscripciones(id){
      this.getAccount(id);
      this.$router.push({
        name: "editarCuenta",
        params: {
          id,
        },
      });
    },
    reload() {
      this.getAccounts({
        page: this.pagination.page,
        pageSize: this.pagination.perPage,
      }).then((res) => {
        this.pageCount = res.totalPages;
        this.pagination.page = res.currentPage;
        this.pagination.perPage = res.itemsPerPage;
      });
    },
    paginar() {
      this.reload();
    },
  },
};
</script>
<style>
</style>
