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
        :data="products"
      >
        <template slot="columns">
          <th width="30%">Nombre</th>
          <th width="15%">Cantidad</th>
          <th width="15%">Precio</th>
          <th width="15%">Descripción</th>
          <th width="15%">Estado</th>
          <th width="10%"></th>
        </template>

        <template slot-scope="{ row }">
          <th scope="row">
            <div class="media align-items-center">
              <div class="media-body">
                <span class="name mb-0 text-sm">{{ row.name }}</span>
              </div>
            </div>
          </th>
          <td class="budget">
            <span>
              Total: {{ row.amount }}
            </span>
            <span> 
              Quedan: {{ row.stock }} 
            </span>
          </td>
          <td class="budget">
            <span> ${{ formatPrice(row.price) }} USD </span>
            <div v-if="row.discount > 0">
              <span style="text-decoration:line-through">${{ formatPrice(row.price) }} USD </span>
              <span>${{ formatPrice(row.price) - formatPrice(row.discount) }} USD </span>
            </div>            
            <div>
              <span>${{ formatPrice(row.price) }} USD </span>
            </div>
          </td>
          <td class="budget">
            {{ row.description }}
          </td>

          <td class="budget">
            {{ row.state }}
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
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "producto-list",
  props: {
    type: {
      type: String,
    },
    title: String,
  },
  computed: {
    ...mapGetters(["products"])
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
    ...mapActions(["getProducts", "getProduct"]),    
    nuevo(){
      this.$router.push('/admin/product_new')
    },
    editar(id){
      this.$router.push({path: `/product_edit/${id}`})
    },
    reload() {
      this.getProducts({
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
