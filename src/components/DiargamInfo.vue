<template>
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
</template>

<script>
import { Doughnut } from 'vue-chartjs/legacy'

import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale} from 'chart.js'

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
      default: 340
    },
    height: {
      type: Number,
      default: 340
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
        datasets: [{data: [60, 40],
            backgroundColor: ['#8DCCEC', '#9D9E9E'],}],
            borderWidth: 0,
            borderColor: '#ddd'
      },
      chartOptions: {
        responsive: false
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