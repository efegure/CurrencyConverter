<template>
  <div class="row">
    <span class="converter__header"> Currency converter </span>
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
          class="converter__select border-0"
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
          class="converter__select border-0"
          v-model="selectedOutput"
          :options="outputArray"
        ></b-form-select>
      </b-card-footer>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "Converter",
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
      default: () => ["USD", "GBP", "EUR"],
    },
    filterOutputCurrencies: {
      type: Boolean,
      default: false,
    },
    rates: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    temp() {
      return this.rates;
    },
    inputArray() {
      const temp = this.inputCurrecies.map((curr) => {
        return { value: curr, text: curr };
      });
      return temp;
    },
    outputArray() {
      if (this.selectedInput && this.rates && this.rates[this.selectedInput]) {
        let temp = Object.keys(this.rates[this.selectedInput]).map((key) => {
          return { value: key, text: key };
        });
        if (this.filterOutputCurrencies) {
          temp = temp.filter((el) => {
            return this.outputCurrencies.includes(el.value);
          });
        }
        console.log("OUTPUT", temp);
        return temp;
      }
      return [{ value: false, text: "Please select a currency" }];
    },
    calculatedAmount() {
      if (
        this.amount &&
        this.amount !== "NaN" &&
        this.selectedInput &&
        this.selectedOutput &&
        this.rates[this.selectedInput]
      ) {
        return (
          parseFloat(this.amount).toFixed(2) *
          this.rates[this.selectedInput][this.selectedOutput]
        );
      }
      return "-";
    },
  },
  watch: {
    amount(newVal) {
      this.$nextTick(() => {
        this.amount = parseFloat(newVal).toFixed(2);
        this.$refs.input.$el.value = parseFloat(newVal).toFixed(2);
      });
    },
  },
};
</script>

<style lang="scss">
.converter {
  &__header {
    font-size: 1.25rem;
    padding: 0.75rem;
  }
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
  &__select {
    padding: 1rem !important;
  }
}
</style>
