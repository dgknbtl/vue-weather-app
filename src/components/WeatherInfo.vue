<template>
  <div class="weather-info">
    <div class="weather-item" title="Wind">
      <windIcon size="1.1x"></windIcon>
      <span class="value">{{getWeatherInfo.wind}}</span>
    </div>
    <div class="weather-item" title="Humidity">
      <DropletIcon size="1.1x"></DropletIcon>
      <span class="value">%{{getWeatherInfo.humidity}}</span>
    </div>
    <div class="weather-item" title="Cloud">
      <CloudIcon size="1.1x"></CloudIcon>
      <span class="value">%{{getWeatherInfo.clouds}}</span>
    </div>
  </div>
</template>

<script>
import { DropletIcon, WindIcon, CloudIcon } from "vue-feather-icons";
import { mapGetters } from "vuex";

export default {
  components: {
    WindIcon,
    DropletIcon,
    CloudIcon
  },
  computed:{
    ...mapGetters(["getWeatherInfo"])
  }
};
</script>

<style lang="less" scoped>
.weather-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid fade(black, 10);
  padding-top: 20px;
  .weather-item {
    display: flex;
    align-items: center;
    color: var(--darkColor);
    .value {
      margin-left: 5px;
      font-weight: 500;
    }
  }
}
</style>
