<template>
  <div class="doughnut">
    <Doughnut
    
    :width="width"
    :height="height"
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
  />
  <div class="donut-inner">
    <span>2%</span>
  </div>
</div>
</template>

<script>
import { Doughnut } from 'vue-chartjs/legacy'

import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale,} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale,)

export default {
  name: 'MercyMainDiargamInfo',
  components: { Doughnut },
  props: {
    chartId: {
      type: String,
      default: 'Doughnut'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 310
    },
    height: {
      type: Number,
      default: 310
    },
    cssClasses: {
      default: 'weight: 10',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    },
    arr: {
      type: Array,
      default: () => {}
    }
  },

  data() {
    return {
      chartData: {
        labels: [ 'Занято', 'Свободно' ],
        datasets: [{
          data: [8, 992],
          backgroundColor: ['#8DCCEC', '#9D9E9E'],
          borderWidth: 0,
          borderColor: "black",
          borderRadius: 2,
          cutout: 100,
          font: {
            size: 15,
          },
      }],
      },
      Tooltips: {
        enabled: true,
      },
      chartOptions: {
        responsive: false,
      },
    };
  },
  // async mounted () {
  //   try {
  //     const res = await this.getChartData();
  //     console.log(res)
  //   } catch (e) {
  //     console.error(e)
  //   }
  // },
  methods: {
    getChartData() {
      const params = new URLSearchParams();
      const headers = new Headers();
      headers.append("Content-Type", "application/x-www-form-urlencoded");
      params.set("action", "metrica");
      fetch('https://api.tiksan.ru/api/products', 
      {
          method: "POST",
          headers: headers,
          body: params,
      }
      )
        .then(function(response) {
          return response.json();
        }).then(function(data) {
          // console.log(data.false)
        });
    }
  },
};
</script>

<style lang="scss" scoped>
.doughnut {
  position: relative;
}
.donut-inner {
  font-size: x-large;
  font-weight: 600;
  position: absolute;
  top: 154px;
  left: 134px;
  pointer-events: none;
}

</style>