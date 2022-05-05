const appId = "9ee46f61ac43429c901a438060279745";
const baseUrl = "https://openexchangerates.org/api/";

// IMPORTANT NOTE: This API does not support changing the base currency for free plans.
// Which means that only USD base is available for free plan.
// Currently using the other api because of this but the other API has limitaions as well.

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