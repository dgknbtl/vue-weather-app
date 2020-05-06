import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    apiBase: "https://api.openweathermap.org/data/2.5/",
    apiKey: "a710476318e3c53b3b47da86204ca0d7",           // Your API Key
    defaultSearch: "istanbul",
    search: "",
    isError: false,
    weatherData: {},
  },
  getters: {
    getWeatherMain(state) {
      const { temp, feelsLike, description, icon, info } = state.weatherData;
      return {
        temp,
        feelsLike,
        description,
        info,
        icon,
      };
    },
    getWeatherInfo(state) {
      const { wind, clouds, humidity } = state.weatherData;
      return {
        wind,
        clouds,
        humidity,
      };
    },
    getWeatherCountry(state) {
      return state.weatherData.country;
    },
    isSearched(state) {
      return state.search !== "";
    },
    getError(state) {
      return state.isError;
    },
  },
  mutations: {
    ["SET_SEARCH"](state, search) {
      state.search = search.toLowerCase();
    },
    ["SET_WEATHER_DATA"](state, data) {
      state.weatherData = data;
    },
    ["SET_ERROR"](state, value) {
      state.isError = value;
    },
  },
  actions: {
    async fetchWeatherData({ commit, state }, search) {
      try {
        commit("SET_SEARCH", search);
        const response = await axios.get(
          `${state.apiBase}weather?q=${search}&units=metric&APPID=${state.apiKey}`
        );
        const newWeatherData = {
          name: response.data.name,
          temp: response.data.main.temp,
          tempMin: response.data.main.temp_min,
          tempMax: response.data.main.temp_max,
          feelsLike: response.data.main.feels_like,
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon.substring(0, 2),
          info: response.data.weather[0].main,
          wind: response.data.wind.speed,
          humidity: response.data.main.humidity,
          clouds: response.data.clouds.all,
          country: response.data.sys.country,
        };
        commit("SET_WEATHER_DATA", newWeatherData);
        commit("SET_ERROR", false);
      } catch (error) {
        console.log(error);
        commit("SET_ERROR", true);
        commit("SET_WEATHER_DATA", {});
      }
    },
  },
});

export default store;
