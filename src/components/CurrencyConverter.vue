<template>
  <Converter :rates="store.rates" :inputCurrecies="inputCurrecies"></Converter>
</template>
<script>
import { useStore } from "@/stores/converter";
import Converter from '@/components/Converter.vue'


export default {
  name: "CurrencyConverter",
  setup(props) {
      debugger
    const { inputCurrecies, pollTime } = props;
    const store = useStore();
    store.fetchAllRates(inputCurrecies);
    let interval = setInterval(() => {
      console.warn("Fetching Requests from the API...");
      store.fetchAllRates(inputCurrecies);
    }, pollTime);
    // will be accessible from data()
    return {
      store,
      interval
    };
  },
  components:{
      Converter
  },
  props: {
    inputCurrecies: {
      type: Array,
      default: () => ["USD", "GBP", "EUR"],
    },
    pollTime: {
      type: Number,
      default: 60000000,
    },
  },
  onUnmounted() {
    clearInterval(this.interval);
  }
};
</script>

<style lang="scss">
</style>
