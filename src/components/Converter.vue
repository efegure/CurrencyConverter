<template>
  <div class="row">
    <b-card no-body class="col-sm-5 p-0">
      <b-card-body>
        <b-form-input
          size="lg"
          class="border-0 converter__input"
          ref="input"
          type="number"
          v-model="amount"
        ></b-form-input>
      </b-card-body>
      <b-card-footer class="p-0">
        <b-form-select
        class="converter__select"
          v-model="selectedInput"
          :options="inputArray"
        ></b-form-select>
      </b-card-footer>
    </b-card>

    <!-- icons dont work on bootstrap vue 3, an image is added instead  -->
    <b-avatar
      src="https://us.123rf.com/450wm/alekseyvanin/alekseyvanin1901/alekseyvanin190100613/115377527-left-and-right-arrows-line-icon-linear-style-sign-for-mobile-concept-and-web-design-2-side-arrow-out.jpg?ver=6"
      class="col-sm-2 p-0 converter__icon"
    >
    </b-avatar>

    <b-card no-body class="col-sm-5 p-0">
      <b-card-body class="p-0 converter__cont">
        <div class="converter__cont__output">{{ calculatedAmount }}</div>
      </b-card-body>
      <b-card-footer class="p-0">
        <b-form-select
        class="converter__select"
          v-model="selectedOutput"
          :options="outputArray"
        ></b-form-select>
      </b-card-footer>
    </b-card>
  </div>
</template>
<script>
import { useStore } from "@/stores/converter";

export default {
  name: "Converter",
  setup(props) {
    const { inputCurrecies, pollTime } = props;
    const store = useStore();
    store.fetchAllRates(inputCurrecies);
    let interval = setInterval(() => {
      console.warn("haloooo imma poll ");
      store.fetchAllRates(inputCurrecies);
    }, pollTime);
    return {
      store,
    };
  },
  data() {
    return {
      selectedInput: "USD",
      selectedOutput: false,
      amount: 0.0,
    };
  },
  props: {
    inputCurrecies: {
      type: Array,
      default: () => ["USD", "GBP", "EUR"],
    },
    outputCurrencies: {
      type: Array,
      default: () => [],
    },
    pollTime: {
      type: Number,
      default: 60000,
    },
  },
  computed: {
    temp() {
      return this.store.rates;
    },
    inputArray() {
      const temp = this.inputCurrecies.map((curr) => {
        return { value: curr, text: curr };
      });
      return temp;
    },
    outputArray() {
      if (
        this.selectedInput &&
        this.store.rates &&
        this.store.rates[this.selectedInput]
      ) {
        let temp = Object.keys(this.store.rates[this.selectedInput]).map(
          (key) => {
            return { value: key, text: key };
          }
        );
        temp.push({ value: false, text: "Please select a currency" });
        return temp;
      }
      return [{ value: false, text: "Please select a currency" }];
    },
    calculatedAmount() {
      if (
        this.amount &&
        this.amount !== "NaN" &&
        this.selectedInput &&
        this.selectedOutput
      ) {
        return (
          this.amount *
          this.store.rates[this.selectedInput][this.selectedOutput]
        );
      }
      return "-";
    },
  },
  methods: {
    // formatInput(value){
    //   let temp = parseFloat(value).toFixed(2)
    //   console.warn(temp);
    //   this.amount = temp;
    //   this.$refs.input.$el.value = temp
    //   debugger;
    //   console.log(this.$refs.input.$el.value)
    //   // setTimeout(()=>{
    //   //   this.amount = temp
    //   // },500)
    //   // return temp;
    // },
    // change(value){
    //   console.log("value")
    // }
  },
  watch: {
    amount(newVal, old) {
      console.warn("TO FIXED", parseFloat(newVal).toFixed(2));
      this.amount = parseFloat(newVal).toFixed(2);
      this.$refs.input.$el.value = parseFloat(newVal).toFixed(2);
      console.warn("WATCHER", newVal, old);
    },
  },
};
</script>

<style lang="scss">
.converter {
  &__input {
    padding: 0.75rem;
    :deep(.form-control:focus) {
      box-shadow: none;
    }
  }
  &__cont {
    align-self: center;
    &__output {
      padding: 0.75rem;
      font-size: 1.25rem;
      line-height: 3.75rem;
    }
  }
  &__icon {
    margin: auto;
  }
  &__select{
    padding:1rem!important;
  }
}
</style>
