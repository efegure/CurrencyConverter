import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Converter from "../Converter.vue";

describe("Converter.vue", () => {
  const rates = {
    USD: {
      AED: 3.673025,
      AFN: 86.232559,
      ALL: 113.785432,
      AMD: 455.297996,
      ANG: 1.804823,
      AOA: 405.538,
      ARS: 115.961117,
      AUD: 1.391794,
      AWG: 1.795,
      AZN: 1.7,
      BAM: 1.848226,
      BBD: 2,
      BDT: 86.600387,
      BGN: 1.850085,
      BHD: 0.376974,
      BIF: 2056.961356,
      BMD: 1,
      BND: 1.3786,
      BOB: 6.874941,
      BRL: 4.9795,
      BSD: 1,
      BTC: 0.000025309582,
      BTN: 76.336014,
      BWP: 12.051086,
      BYN: 3.379448,
      BZD: 2.018578,
      CAD: 1.276747,
      CDF: 2003.022005,
      CHF: 0.982639,
      CLF: 0.03103,
      CLP: 858.05,
      CNH: 6.650506,
      CNY: 6.6188,
      COP: 4084.682677,
      CRC: 665.192293,
      CUC: 1,
      CUP: 25.75,
      CVE: 105.05,
      CZK: 23.276999,
      DJF: 178.280528,
      DKK: 7.04992,
      DOP: 54.989509,
      DZD: 144.994847,
      EGP: 18.4828,
      ERN: 15.000001,
      ETB: 51.940899,
      EUR: 0.947554,
      FJD: 2.152,
      FKP: 0.807133,
      GBP: 0.807133,
      GEL: 3.04,
      GGP: 0.807133,
      GHS: 7.53604,
      GIP: 0.807133,
      GMD: 53.975,
      GNF: 8870.001619,
      GTQ: 7.678482,
      GYD: 209.512235,
      HKD: 7.84909,
      HNL: 24.582559,
      HRK: 7.1454,
      HTG: 110.659417,
      HUF: 359.550858,
      IDR: 14419.66836,
      ILS: 3.400523,
      IMP: 0.807133,
      INR: 76.279546,
      IQD: 1461.607131,
      IRR: 42250,
      ISK: 130.77,
      JEP: 0.807133,
      JMD: 154.723009,
      JOD: 0.709,
      JPY: 129.90275,
      KES: 115.96,
      KGS: 82.3007,
      KHR: 4057.996651,
      KMF: 466.025341,
      KPW: 900,
      KRW: 1260.597936,
      KWD: 0.306709,
      KYD: 0.834515,
      KZT: 434.684728,
      LAK: 12442.968732,
      LBP: 1514.146501,
      LKR: 349.708865,
      LRD: 151.000001,
      LSL: 15.682414,
      LYD: 4.797396,
      MAD: 9.969004,
      MDL: 18.777003,
      MGA: 4048.571557,
      MKD: 58.226514,
      MMK: 1854.230068,
      MNT: 3041.051599,
      MOP: 8.096127,
      MRU: 36.504014,
      MUR: 43.004742,
      MVR: 15.45,
      MWK: 817.818514,
      MXN: 20.080075,
      MYR: 4.3485,
      MZN: 63.849999,
      NAD: 15.78,
      NGN: 415.60439,
      NIO: 35.866834,
      NOK: 9.341521,
      NPR: 122.141186,
      NZD: 1.542479,
      OMR: 0.38498,
      PAB: 1,
      PEN: 3.775964,
      PGK: 3.529356,
      PHP: 52.662995,
      PKR: 185.96591,
      PLN: 4.417021,
      PYG: 6832.076412,
      QAR: 3.641,
      RON: 4.6887,
      RSD: 111.489219,
      RUB: 65.171994,
      RWF: 1020.129883,
      SAR: 3.750959,
      SBD: 8.051788,
      SCR: 13.188698,
      SDG: 447,
      SEK: 9.84395,
      SGD: 1.378679,
      SHP: 0.807133,
      SLL: 12556.35014,
      SOS: 579.369926,
      SRD: 20.742,
      SSP: 130.26,
      STD: 21973.540504,
      STN: 23.55,
      SVC: 8.761883,
      SYP: 2512.45,
      SZL: 15.682413,
      THB: 34.06,
      TJS: 12.473339,
      TMT: 3.5,
      TND: 3.05475,
      TOP: 2.316317,
      TRY: 14.84944,
      TTD: 6.801705,
      TWD: 29.555499,
      TZS: 2324,
      UAH: 29.442366,
      UGX: 3550.09134,
      USD: 1,
      UYU: 41.173855,
      UZS: 11178.658544,
      VES: 4.5015,
      VND: 22956,
      VUV: 113.695826,
      WST: 2.613371,
      XAF: 621.55457,
      XAG: 0.04304871,
      XAU: 0.0005244,
      XCD: 2.70255,
      XDR: 0.726157,
      XOF: 621.55457,
      XPD: 0.00044628,
      XPF: 113.07325,
      XPT: 0.00100605,
      YER: 250.249992,
      ZAR: 15.666786,
      ZMW: 17.024532,
      ZWL: 322,
    },
  };
  const inputCurrecies = ["USD", "GBP", "EUR", "EUR2"];
  const outputCurrencies = ["USD", "GBP"];

  const wrapper = mount(Converter, {
    name: "Converter",
    props: {
      rates: rates,
      inputCurrecies: inputCurrecies,
      outputCurrencies: outputCurrencies,
      filterOutputCurrencies: false,
    },
  });
  describe("the component received given props correctly.", () => {
    it(`initial value taken from rates is equal to: ${rates}.`, () => {
      expect(wrapper.props().rates).to.equal(rates);
    });

    it(`initial value taken from inputCurrecies is equal to: ${inputCurrecies}.`, () => {
      expect(wrapper.props().inputCurrecies).to.equal(inputCurrecies);
    });
    it(`initial value taken from outputCurrencies is equal to: ${outputCurrencies}.`, () => {
      expect(wrapper.props().outputCurrencies).to.equal(outputCurrencies);
    });
  });
  describe("calculates computed values correctly", () => {
    const inputArray = [
      { value: "USD", text: "USD" },
      { value: "GBP", text: "GBP" },
      { value: "EUR", text: "EUR" },
      { value: "EUR2", text: "EUR2" },
    ];
    it(`computed value inputArray should be equal to: ${inputArray}.`, () => {
      expect(wrapper.vm.inputArray).to.eql(inputArray);
    });
    const outputArray = [
      {
        value: "AED",
        text: "AED",
      },
      {
        value: "AFN",
        text: "AFN",
      },
      {
        value: "ALL",
        text: "ALL",
      },
      {
        value: "AMD",
        text: "AMD",
      },
      {
        value: "ANG",
        text: "ANG",
      },
      {
        value: "AOA",
        text: "AOA",
      },
      {
        value: "ARS",
        text: "ARS",
      },
      {
        value: "AUD",
        text: "AUD",
      },
      {
        value: "AWG",
        text: "AWG",
      },
      {
        value: "AZN",
        text: "AZN",
      },
      {
        value: "BAM",
        text: "BAM",
      },
      {
        value: "BBD",
        text: "BBD",
      },
      {
        value: "BDT",
        text: "BDT",
      },
      {
        value: "BGN",
        text: "BGN",
      },
      {
        value: "BHD",
        text: "BHD",
      },
      {
        value: "BIF",
        text: "BIF",
      },
      {
        value: "BMD",
        text: "BMD",
      },
      {
        value: "BND",
        text: "BND",
      },
      {
        value: "BOB",
        text: "BOB",
      },
      {
        value: "BRL",
        text: "BRL",
      },
      {
        value: "BSD",
        text: "BSD",
      },
      {
        value: "BTC",
        text: "BTC",
      },
      {
        value: "BTN",
        text: "BTN",
      },
      {
        value: "BWP",
        text: "BWP",
      },
      {
        value: "BYN",
        text: "BYN",
      },
      {
        value: "BZD",
        text: "BZD",
      },
      {
        value: "CAD",
        text: "CAD",
      },
      {
        value: "CDF",
        text: "CDF",
      },
      {
        value: "CHF",
        text: "CHF",
      },
      {
        value: "CLF",
        text: "CLF",
      },
      {
        value: "CLP",
        text: "CLP",
      },
      {
        value: "CNH",
        text: "CNH",
      },
      {
        value: "CNY",
        text: "CNY",
      },
      {
        value: "COP",
        text: "COP",
      },
      {
        value: "CRC",
        text: "CRC",
      },
      {
        value: "CUC",
        text: "CUC",
      },
      {
        value: "CUP",
        text: "CUP",
      },
      {
        value: "CVE",
        text: "CVE",
      },
      {
        value: "CZK",
        text: "CZK",
      },
      {
        value: "DJF",
        text: "DJF",
      },
      {
        value: "DKK",
        text: "DKK",
      },
      {
        value: "DOP",
        text: "DOP",
      },
      {
        value: "DZD",
        text: "DZD",
      },
      {
        value: "EGP",
        text: "EGP",
      },
      {
        value: "ERN",
        text: "ERN",
      },
      {
        value: "ETB",
        text: "ETB",
      },
      {
        value: "EUR",
        text: "EUR",
      },
      {
        value: "FJD",
        text: "FJD",
      },
      {
        value: "FKP",
        text: "FKP",
      },
      {
        value: "GBP",
        text: "GBP",
      },
      {
        value: "GEL",
        text: "GEL",
      },
      {
        value: "GGP",
        text: "GGP",
      },
      {
        value: "GHS",
        text: "GHS",
      },
      {
        value: "GIP",
        text: "GIP",
      },
      {
        value: "GMD",
        text: "GMD",
      },
      {
        value: "GNF",
        text: "GNF",
      },
      {
        value: "GTQ",
        text: "GTQ",
      },
      {
        value: "GYD",
        text: "GYD",
      },
      {
        value: "HKD",
        text: "HKD",
      },
      {
        value: "HNL",
        text: "HNL",
      },
      {
        value: "HRK",
        text: "HRK",
      },
      {
        value: "HTG",
        text: "HTG",
      },
      {
        value: "HUF",
        text: "HUF",
      },
      {
        value: "IDR",
        text: "IDR",
      },
      {
        value: "ILS",
        text: "ILS",
      },
      {
        value: "IMP",
        text: "IMP",
      },
      {
        value: "INR",
        text: "INR",
      },
      {
        value: "IQD",
        text: "IQD",
      },
      {
        value: "IRR",
        text: "IRR",
      },
      {
        value: "ISK",
        text: "ISK",
      },
      {
        value: "JEP",
        text: "JEP",
      },
      {
        value: "JMD",
        text: "JMD",
      },
      {
        value: "JOD",
        text: "JOD",
      },
      {
        value: "JPY",
        text: "JPY",
      },
      {
        value: "KES",
        text: "KES",
      },
      {
        value: "KGS",
        text: "KGS",
      },
      {
        value: "KHR",
        text: "KHR",
      },
      {
        value: "KMF",
        text: "KMF",
      },
      {
        value: "KPW",
        text: "KPW",
      },
      {
        value: "KRW",
        text: "KRW",
      },
      {
        value: "KWD",
        text: "KWD",
      },
      {
        value: "KYD",
        text: "KYD",
      },
      {
        value: "KZT",
        text: "KZT",
      },
      {
        value: "LAK",
        text: "LAK",
      },
      {
        value: "LBP",
        text: "LBP",
      },
      {
        value: "LKR",
        text: "LKR",
      },
      {
        value: "LRD",
        text: "LRD",
      },
      {
        value: "LSL",
        text: "LSL",
      },
      {
        value: "LYD",
        text: "LYD",
      },
      {
        value: "MAD",
        text: "MAD",
      },
      {
        value: "MDL",
        text: "MDL",
      },
      {
        value: "MGA",
        text: "MGA",
      },
      {
        value: "MKD",
        text: "MKD",
      },
      {
        value: "MMK",
        text: "MMK",
      },
      {
        value: "MNT",
        text: "MNT",
      },
      {
        value: "MOP",
        text: "MOP",
      },
      {
        value: "MRU",
        text: "MRU",
      },
      {
        value: "MUR",
        text: "MUR",
      },
      {
        value: "MVR",
        text: "MVR",
      },
      {
        value: "MWK",
        text: "MWK",
      },
      {
        value: "MXN",
        text: "MXN",
      },
      {
        value: "MYR",
        text: "MYR",
      },
      {
        value: "MZN",
        text: "MZN",
      },
      {
        value: "NAD",
        text: "NAD",
      },
      {
        value: "NGN",
        text: "NGN",
      },
      {
        value: "NIO",
        text: "NIO",
      },
      {
        value: "NOK",
        text: "NOK",
      },
      {
        value: "NPR",
        text: "NPR",
      },
      {
        value: "NZD",
        text: "NZD",
      },
      {
        value: "OMR",
        text: "OMR",
      },
      {
        value: "PAB",
        text: "PAB",
      },
      {
        value: "PEN",
        text: "PEN",
      },
      {
        value: "PGK",
        text: "PGK",
      },
      {
        value: "PHP",
        text: "PHP",
      },
      {
        value: "PKR",
        text: "PKR",
      },
      {
        value: "PLN",
        text: "PLN",
      },
      {
        value: "PYG",
        text: "PYG",
      },
      {
        value: "QAR",
        text: "QAR",
      },
      {
        value: "RON",
        text: "RON",
      },
      {
        value: "RSD",
        text: "RSD",
      },
      {
        value: "RUB",
        text: "RUB",
      },
      {
        value: "RWF",
        text: "RWF",
      },
      {
        value: "SAR",
        text: "SAR",
      },
      {
        value: "SBD",
        text: "SBD",
      },
      {
        value: "SCR",
        text: "SCR",
      },
      {
        value: "SDG",
        text: "SDG",
      },
      {
        value: "SEK",
        text: "SEK",
      },
      {
        value: "SGD",
        text: "SGD",
      },
      {
        value: "SHP",
        text: "SHP",
      },
      {
        value: "SLL",
        text: "SLL",
      },
      {
        value: "SOS",
        text: "SOS",
      },
      {
        value: "SRD",
        text: "SRD",
      },
      {
        value: "SSP",
        text: "SSP",
      },
      {
        value: "STD",
        text: "STD",
      },
      {
        value: "STN",
        text: "STN",
      },
      {
        value: "SVC",
        text: "SVC",
      },
      {
        value: "SYP",
        text: "SYP",
      },
      {
        value: "SZL",
        text: "SZL",
      },
      {
        value: "THB",
        text: "THB",
      },
      {
        value: "TJS",
        text: "TJS",
      },
      {
        value: "TMT",
        text: "TMT",
      },
      {
        value: "TND",
        text: "TND",
      },
      {
        value: "TOP",
        text: "TOP",
      },
      {
        value: "TRY",
        text: "TRY",
      },
      {
        value: "TTD",
        text: "TTD",
      },
      {
        value: "TWD",
        text: "TWD",
      },
      {
        value: "TZS",
        text: "TZS",
      },
      {
        value: "UAH",
        text: "UAH",
      },
      {
        value: "UGX",
        text: "UGX",
      },
      {
        value: "USD",
        text: "USD",
      },
      {
        value: "UYU",
        text: "UYU",
      },
      {
        value: "UZS",
        text: "UZS",
      },
      {
        value: "VES",
        text: "VES",
      },
      {
        value: "VND",
        text: "VND",
      },
      {
        value: "VUV",
        text: "VUV",
      },
      {
        value: "WST",
        text: "WST",
      },
      {
        value: "XAF",
        text: "XAF",
      },
      {
        value: "XAG",
        text: "XAG",
      },
      {
        value: "XAU",
        text: "XAU",
      },
      {
        value: "XCD",
        text: "XCD",
      },
      {
        value: "XDR",
        text: "XDR",
      },
      {
        value: "XOF",
        text: "XOF",
      },
      {
        value: "XPD",
        text: "XPD",
      },
      {
        value: "XPF",
        text: "XPF",
      },
      {
        value: "XPT",
        text: "XPT",
      },
      {
        value: "YER",
        text: "YER",
      },
      {
        value: "ZAR",
        text: "ZAR",
      },
      {
        value: "ZMW",
        text: "ZMW",
      },
      {
        value: "ZWL",
        text: "ZWL",
      },
    ];
    it(`computed value outputArray should be equal to: ${outputArray}.`, () => {
      expect(wrapper.vm.outputArray).to.eql(outputArray);
    });

    it(`computed value outputArray should be filtered when filter is enabled }.`, async () => {
      await wrapper.setProps({ filterOutputCurrencies: true });
      const filteredOutputArray = [
        {
          value: "GBP",
          text: "GBP",
        },
        {
          value: "USD",
          text: "USD",
        },
      ];
      expect(wrapper.vm.outputArray).to.eql(filteredOutputArray);
    });
  });

  describe("component should calculate correct output amount.", () => {
    it(`1 USD should be equal to 14.84944 TRY.`, () => {
      wrapper.setData({
        selectedInput: "USD",
        selectedOutput: "TRY",
        amount: "1",
      });
      expect(wrapper.vm.calculatedAmount).to.eql(14.84944);
    });

    it(`1 USD should be equal to 0.000025309582 BTC.`, () => {
      wrapper.setData({
        selectedInput: "USD",
        selectedOutput: "BTC",
        amount: "1",
      });
      expect(wrapper.vm.calculatedAmount).to.eql(0.000025309582);
    });

    it(`Output should be - if no output currency is selected`, () => {
      wrapper.setData({ selectedInput: "GBP", amount: "1" });
      expect(wrapper.vm.calculatedAmount).to.eql("-");
    });

    it(`1.2 USD should be equal to 17.819328 TRY`, () => {
      wrapper.setData({
        selectedInput: "USD",
        selectedOutput: "TRY",
        amount: "1.2",
      });
      expect(wrapper.vm.calculatedAmount).to.eql(17.819328);
    });

    it(`1.205 input should be parsed to 1.20`, () => {
      wrapper.setData({ selectedInput: "USD", amount: "1.205" });
      console.log(wrapper.find("b-form-input").value);
      expect(wrapper.find("b-form-input").attributes().modelvalue).to.equal(
        "1.20"
      );
    });
  });
});
