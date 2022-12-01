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
    <span>34%</span>
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
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      chartData: {
        labels: [ 'Занято', 'Свободно' ],
        datasets: [{
          data: [257, 743],
          backgroundColor: ['#8DCCEC', '#9D9E9E'],
          borderWidth: 0,
          borderColor: "black",
      }],
      },
      Tooltips: {
        enabled: false
      },
      chartOptions: {
        responsive: false,
      }, 
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.doughnut {
  position: relative;
}
.donut-inner {
  position: absolute;
  top: 160px;
  left: 140px;
}

</style>