<template>
  <div class="weather-search">
    <input
      type="text"
      placeholder="Search City"
      class="search-control"
      v-model.trim="search"
      @keydown.enter="getData"
    />
    <span class="country" v-if="isSearched">({{getWeatherCountry}})</span>
    <div class="error" v-if="getError">No results found! fix it try again.</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      search: this.$store.state.search
    };
  },
  computed: {
    ...mapGetters(["isSearched", "getWeatherCountry", "getError"])
  },
  methods: {
    ...mapActions(["fetchWeatherData"]),
    getData() {
      this.fetchWeatherData(this.search);
    }
  }
};
</script>

<style lang="less" scoped>
.weather-search {
  position: relative;
  .search-control {
    width: 100%;
    height: 50px;
    border: 2px solid fade(black, 10);
    border-radius: 100px;
    outline: none;
    background-color: transparent;
    font-size: 16px;
    padding-left: 25px;
    padding-right: 25px;
    transition: all 0.4s;
    &::placeholder {
      color: fade(black, 60);
    }
    &:focus {
      background-color: #fff;
      box-shadow: 0 8px 16px fade(black, 25);
      border-color: fade(black, 5);
      font-weight: 600;
      &::placeholder {
        font-weight: 400;
      }
    }
  }
  .error {
    position: absolute;
    color: red;
    text-align: center;
    bottom: -35px;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 14px;
  }
  .country {
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    color: var(--grayColor);
  }
}
</style>