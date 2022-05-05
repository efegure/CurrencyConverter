import { defineStore } from 'pinia'
import rateService from "@/services/exchangeRates.js"
import openExhangeService from "@/services/openExchange.js"

export const useStore = defineStore({
  id: 'counter',
  state: () => ({
    rates: {} 
  }),
  getters: {
    getRate: (currency) => (state) =>{
      return state.rates
    },
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
    async fetchRate(rate, altAPI=false) {
      try{
        let rates = {}
        if(!altAPI){
          rates = await rateService.getCurrencyRate(rate);
        } else {
          rates = await openExhangeService.getCurrencyRate(rate);
        }
        this.rates[rate] = rates.rates;

      } catch(err) {
        if(!altAPI) {
          console.warn("Trying alternative API...")
          this.fetchRate(rate, true);
        } else{
          console.warn("ERROR while fetching rates!")
        }
      }
    }
  }
})
