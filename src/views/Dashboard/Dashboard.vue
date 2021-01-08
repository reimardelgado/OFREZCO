<template>
    <div>
        <!--Charts-->
        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Total Productos"
                                type="primary"
                                :sub-title="stadistic.totalProducts"
                                icon="ni ni-active-40"
                                class="mb-4 mb-xl-0"
                    >
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Total Servicios"
                                type="primary"
                                :sub-title="stadistic.totalServices"
                                icon="ni ni-chart-pie-35"
                                class="mb-4 mb-xl-0"
                    >
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Ventas Productos"
                                type="primary"
                                :sub-title="stadistic.salesProducts"
                                icon="ni ni-money-coins"
                                class="mb-4 mb-xl-0"
                    >
                    </stats-card>

                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Órdenes Servicios"
                                type="primary"
                                :sub-title="stadistic.salesServices"
                                icon="ni ni-chart-bar-32"
                                class="mb-4 mb-xl-0"
                    >
                    </stats-card>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-xl-8 mb-5 mb-xl-0">
                    <card type="secondry" header-classes="bg-transparent">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h6 class="text-light text-uppercase ls-1 mb-1">Resumen</h6>
                                <h5 class="h3 mb-0">Ventas</h5>
                            </div>
                            <div class="col">
                                <ul class="nav nav-pills justify-content-end">
                                    <li class="nav-item mr-2 mr-md-0">
                                        <a class="nav-link py-2 px-3"
                                           href="#"
                                           :class="{active: bigLineChart.activeIndex === 0}"
                                           @click.prevent="initBigChart(0)">
                                            <span class="d-none d-md-block">Mensual</span>
                                            <span class="d-md-none">M</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link py-2 px-3"
                                           href="#"
                                           :class="{active: bigLineChart.activeIndex === 1}"
                                           @click.prevent="initBigChart(1)">
                                            <span class="d-none d-md-block">Semanal</span>
                                            <span class="d-md-none">W</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <line-chart
                                :height="350"
                                ref="bigChart"
                                :chart-data="bigLineChart.chartData"
                                :extra-options="bigLineChart.extraOptions"
                        >
                        </line-chart>

                    </card>
                </div>

                <div class="col-xl-4">
                    <card header-classes="bg-transparent">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h6 class="text-uppercase text-muted ls-1 mb-1">Resumen</h6>
                                <h5 class="h3 mb-0">Órdenes de Servicios</h5>
                            </div>
                        </div>

                        <bar-chart
                                :height="350"
                                ref="barChart"
                                :chart-data="redBarChart.chartData"
                        >
                        </bar-chart>
                    </card>
                </div>
            </div>
            <!-- End charts-->

            <!--Tables-->
            <div class="row mt-5">
                <div class="col-xl-12 mb-5 mb-xl-0">
                    <page-visits-table></page-visits-table>
                </div>
            </div>
            <!--End tables-->
        </div>

    </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';
// Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';

  // Tables
  import PageVisitsTable from './PageVisitsTable';
  
  export default {    
    computed: {
      ...mapGetters(["stadistic"])
    },
    components: {
      LineChart,
      BarChart,
      PageVisitsTable,
    },
    data() {
      return {
        bigLineChart: {
          allData: [
            [0, 20, 10, 30, 15, 40, 20, 60, 30, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 20, 25, 10, 30, 15]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [],
            labels: [],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Sales',
              data: [25, 20, 30, 22, 17, 29, 25, 20, 30, 22, 17, 29]
            }]
          }
        }
      };
    },
    methods: {
      ...mapActions(["getStadistic"]),
      reload(){
        this.getStadistic()  
      },
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Performance',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      },
    },
    mounted() {
      this.reload()
      this.initBigChart(0)
    }
  };
</script>
<style></style>
