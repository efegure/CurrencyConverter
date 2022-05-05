const appId = "jFVlVCuPJQiC9qonPy8aiSuq8z7vNud7";
const baseUrl = "https://api.apilayer.com/exchangerates_data/";

// IMPORTANT NOTE: This API only supports 250 requests per month for the free plan.
//(Some of them are already used for development)
// Keep in mind that the api request limit might be reached and requests may fail.

export default {
  getCurrencyRate: async (currency) => {
    const params = new URLSearchParams({
      base: currency,
    });

    const response = await fetch(baseUrl + "latest?" + params.toString(), {
      headers: {
        apiKey: appId,
      },
    });

    const data = await response.json();
    return data;
  },
};
