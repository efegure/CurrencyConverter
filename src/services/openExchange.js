const appId = "9ee46f61ac43429c901a438060279745";
const baseUrl = "https://openexchangerates.org/api/";

export default {
     getCurrencyRate: async (currency)=>{
        const params = new URLSearchParams({
            "app_id": appId,
            base:currency
        });
        const response = await fetch(baseUrl+ "latest.json?" 
            + params.toString())
            
        const data = await response.json();
        return data;
    },

}