<template>
  <div>
    <div
      class="weather-animate"
      :class="[
      {'weather-rain': getWeatherMain.info == 'Rain'},
      {'weather-snow': getWeatherMain.info == 'Snow'},
      {'weather-clear': getWeatherMain.info == 'Clear' || getWeatherMain.info == 'Mist'},
      {'weather-clouds': getWeatherMain.info == 'Clouds' || getWeatherMain.info == 'Haze'},
      {'error': getError}]"
    ></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getWeatherMain", "getError"])
  }
};
</script>

<style lang="less" scoped>
.weather-animate {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  transition: background-image 2s;
  background-size: cover;
  background-position: center;
}
&.weather-default {
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(
      -45deg,
      var(--grayColor),
      var(--darkColor)
    );
  }
}
// clear weather
&.weather-clear {
  background-image: url("../assets/images/clear.jpg");
  &::after,
  &::before {
    content: "";
    background-image: url("../assets/images/fog.png");
    height: 810px;
    position: absolute;
    width: 100%;
    background-repeat: repeat-x;
  }
  &::after {
    top: -50px;
    animation: animateCloud var(--cloudAnimateTime) linear infinite
      alternate-reverse;
  }
  &::before {
    top: 200px;
    animation: animateCloud calc(var(--clearAnimationTime) / 2) linear infinite
      alternate;
  }
}

// cloudy weather
&.weather-clouds {
  background-image: url("../assets/images/clouds.jpg");
  &::after,
  &::before {
    content: "";
    background-image: url("../assets/images/fog.png");
    height: 810px;
    position: absolute;
    width: 100%;
    background-repeat: repeat-x;
  }
  &::after {
    top: -50px;
    animation: animateCloud var(--cloudAnimateTime) linear infinite
      alternate-reverse;
  }
  &::before {
    top: 300px;
    animation: animateCloud calc(var(--cloudAnimateTime) / 2) linear infinite
      alternate;
  }
}
@keyframes animateCloud {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 100% 0;
  }
}

// snow weather
&.weather-snow {
  background-image: url("../assets/images/snow.jpg");
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    animation: animateSnow var(--snowAnimateTime)
      cubic-bezier(0.28, 0.54, 0.47, 0.56) infinite normal;
    background-image: url("../assets/images/snow2.png"),
      url("../assets/images/snow3.png"), url("../assets/images/snow4.png"),
      url("../assets/images/snow3.png");
  }
}
@keyframes animateSnow {
  0% {
    background-position: 0px 0px, 0px 0px, 0px 0px;
  }
  100% {
    background-position: 400px 1100px, 400px 400px, 600px 600px;
  }
}

// snow weather
&.weather-rain {
  background-image: url("../assets/images/rain-bg.jpg");
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: repeat;
    animation: animateRain var(--rainAnimateTime)
      cubic-bezier(0.28, 0.54, 0.47, 0.56) infinite normal;
    background-image: url("../assets/images/rain-1.png"),
      url("../assets/images/rain-2.png");
    opacity: 0.8;
  }
}
@keyframes animateRain {
  0% {
    background-position: 0px 0px, 0px 0px, 0px 0px;
  }
  100% {
    background-position: 400px 1100px, 400px 400px, 600px 600px;
  }
}

&.error {
  background-image: url("../assets/images/error.jpg");
}
</style>