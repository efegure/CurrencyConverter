import { defineStore } from 'pinia'
import rateService from "@/services/openExchange.js"

export const useStore = defineStore({
  id: 'counter',
  state: () => ({
    rates: {} 
  }),
  getters: {
    getRate: (currency) => (state) =>{
      return state.rates
    },
    getRate: (currency) => (state) =>{
      return state.rates
    } 
  },
  actions: {
    async fetchAllRates(array) {
      try{
        array.forEach((rate)=>{
          this.fetchRate(rate);
        })
      } catch(err) {
        console.warn("ERROR while fetching rates!")
      }
    },
    async fetchRate(rate) {
      try{
        const rates = await rateService.getCurrencyRate(rate);
        debugger
        this.rates[rate] = rates.rates;
      } catch(err) {
        console.warn("ERROR while fetching rates!")
      }
    }
  }
})
