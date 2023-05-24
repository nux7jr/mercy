<template>
  <div class="doughnut" v-if="loaded">
    <!-- <p class="doughnut__text">{{ this.result.true }} логотипов из 1000</p> -->
    <Doughnut
      class="cavans"
      :width="width"
      :height="height"
      :chart-options="chartOptions"
      :chart-data="chartdata"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
    />
    <div class="donut-inner">
      <span>
        {{ getProcent + "%" }}
      </span>
    </div>
  </div>
</template>

<script>
import { Doughnut } from "vue-chartjs/legacy";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "MercyMainDiargamInfo",
  components: { Doughnut },
  props: {
    // places: {
    //   type: Object,
    //   default: {},
    // },
    chartId: {
      type: String,
      default: "Doughnut",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 250,
    },
    height: {
      type: Number,
      default: 250,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Object,
      default: () => {},
    },
    arr: {
      type: Array,
      default: () => {},
    },
  },
  data: () => ({
    loaded: false,
    result: {},
    chartdata: {
      labels: ["Занято", "Свободно"],
      datasets: [
        {
          data: [0, 1000],
          backgroundColor: ["#ffffff", "#9D9E9E"],
          borderWidth: 0,
          borderColor: "black",
          borderRadius: 3,
          cutout: 80,
          font: {
            size: 15,
          },
        },
      ],
    },
    Tooltips: {
      enabled: true,
    },
    chartOptions: {
      responsive: false,
    },
  }),
  async mounted() {
    this.loaded = false;

    try {
      const params = new URLSearchParams();
      const headers = new Headers();
      headers.append("Content-Type", "application/x-www-form-urlencoded");
      headers.append(
        "Accept",
        "application/json;text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
      );
      params.set("action", "metrica");
      const res = await fetch("https://api.tiksan.ru/api/products", {
        method: "POST",
        headers: headers,
        body: params,
      });
      const result = await res.json();
      this.result = result;
      this.chartdata.datasets[0].data[0] = result.true;
      this.chartdata.datasets[0].data[1] = result.false;
      this.loaded = true;
    } catch (e) {
      console.error(e);
    }
  },
  computed: {
    getProcent() {
      if (this.loaded === true) {
        const procent = (this.result.true * 100) / 1000;
        return procent;
      }
    },
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
  top: 125px;
  left: 105px;
  pointer-events: none;
}
.doughnut__text {
  text-align: center;
}
.cavans {
  margin-bottom: 20px;
}
@media (min-width: 1199.98px) {
  .cavans {
    margin-bottom: 0px;
  }
}
</style>
