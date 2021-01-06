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
        :data="categories"
      >
        <template slot="columns">
          <th width="80%">Descripción</th>
          <th width="15%">Estado</th>
          <th width="10%"></th>
        </template>

        <template slot-scope="{ row }">
          <th scope="row">
            <div class="media align-items-center">
              <div class="media-body">
                <span class="name mb-0 text-sm">{{ row.description }}</span>
              </div>
            </div>
          </th>
          <td>
            <div class="d-flex align-items-center">
              <span class="completion mr-2">{{ row.state }}</span>
            </div>
          </td>

          <td class="text-right">
            <base-button
              class="btn btn-sm btn-icon-only text-light"
              size="sm"
              type="secondary"
              @click="editar(row.id.toString())"
            >
              <i class="ni ni-settings"></i
            ></base-button>
            <base-button
              class="btn btn-sm btn-icon-only text-light"
              size="sm"
              type="secondary"
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
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "categoria-list",
  props: {
    type: {
      type: String,
    },
    title: String,
    items: {
      type: Array,
    },
  },
  computed: {
    ...mapGetters(["categories"]),
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
    ...mapActions(["getCategorias", "getCategoria", "setCurrentCategoriaId"]),
    nuevo() {
      this.$router.push({name: 'nuevaCategoria'});
    },
    editar(id) {
      this.setCurrentCategoriaId(id);
      this.getCategoria(id);
      this.$router.push({
        name: "editarCategoria",
        params: {
          id: id,
        },
      });
    },
    reload() {
      this.getCategorias({
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
