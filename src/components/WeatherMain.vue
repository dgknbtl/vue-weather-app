<template>
  <div class="weather-main">
    <div class="weather-feelsLike">
      Feels like
      <strong>
        {{getWeatherMain.feelsLike | round}}
        <sup>&deg;</sup>
      </strong>
    </div>
    <div class="weather-temp">
      <div
        class="weather-icon"
        :style="[getWeatherMain.icon ? {'background-image': 'url(http://openweathermap.org/img/wn/'+getWeatherMain.icon+'d@2x.png)'}: {}]"
      ></div>
      <span>{{getWeatherMain.temp | round}}</span>
      <sup>&deg;</sup>
    </div>
    <div class="weather-description">{{getWeatherMain.description}}</div>
    <p></p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["getWeatherMain"])
  }
};
</script>

<style lang="less" scoped>
.weather {
  &-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
    .weather {
      &-temp {
        position: relative;
        width: 150px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        box-shadow: 0 0 40px fade(black, 20);
        background-color: #fff;
        margin: 40px 0;
        span {
          font-size: 80px;
          font-weight: 800;
          letter-spacing: -2px;
          position: relative;
        }
        sup {
          position: relative;
          top: -21px;
          font-size: 40px;
        }
      }
      &-icon {
        position: absolute;
        top: -35px;
        left: -35px;
        width: 110px;
        height: 110px;
        background-repeat: no-repeat;
        background-size: 100%;
        filter: drop-shadow(1px 1px 0 fade(black, 3))
          drop-shadow(-5px -5px 0 fade(black, 8));
      }
      &-feelsLike,
      &-description {
        font-size: 18px;
        color: var(--darkColor);
        text-transform: capitalize;
        sup {
          position: relative;
          top: 5px;
          left: -2px;
          font-size: 18px;
        }
      }
    }
  }
}

@media (max-height: 767px) {
  .weather-main {
    margin-top: 30px;
    margin-bottom: 30px;
    .weather-temp {
      width: 125px;
      height: 125px;
      margin: 30px 0;
    }
  }
}
</style>