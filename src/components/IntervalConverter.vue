<template>
  <CurrencyConverter
    :rates="store.rates"
    :inputCurrecies="inputCurrecies"
  ></CurrencyConverter>
</template>
<script>
import { useStore } from "@/stores/converter";
import CurrencyConverter from "@/components/CurrencyConverter.vue";

export default {
  name: "IntervalConverter",
  setup(props) {
    const store = useStore();
    store.fetchAllRates(props.inputCurrecies);
    let interval = setInterval(() => {
      console.warn("Fetching Requests from the API...");
      store.fetchAllRates(props.inputCurrecies);
    }, props.pollTime);
    // will be accessible from data()
    return {
      store,
      interval,
    };
  },
  components: {
    CurrencyConverter,
  },
  props: {
    inputCurrecies: {
      type: Array,
      default: () => ["USD", "GBP", "EUR"],
    },
    pollTime: {
      type: Number,
      default: 60000,
    },
  },
  onUnmounted() {
    clearInterval(this.interval);
  },
};
</script>

<style lang="scss"></style>
