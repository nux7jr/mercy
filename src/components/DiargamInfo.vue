<template>
  <div>
    <Doughnut
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs/legacy'

import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, Arc} from 'chart.js'

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
      default: 400
    },
    height: {
      type: Number,
      default: 400
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
        labels: [ 'Свободно', 'Занято' ],
        datasets: [ { data: [40, 60] } ],
        backgroundColor: ['#8DCCEC', '#9D9E9E'],
        borderWidth: 0,
      },
      chartOptions: {
        responsive: true
      }
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>