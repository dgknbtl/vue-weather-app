<template>
  <div id="app" class="app">
    <transition name="fade" mode="out-in" appear>
      <div class="card">
        <WeatherSearch />
        <WeatherMain />
        <WeatherInfo />
      </div>
    </transition>
    <WeatherAnimate />
    <div class="footer-text">
      <a href="https://github.com/dogukanbatal/vue-weather-app" target="_blank" class="link">
        <GithubIcon size="1x"></GithubIcon>
        <span>Github Repository</span>
      </a>
    </div>
  </div>
</template>

<script>
import { GithubIcon } from "vue-feather-icons";
import WeatherSearch from "@/components/WeatherSearch";
import WeatherMain from "@/components/WeatherMain";
import WeatherInfo from "@/components/WeatherInfo";
import WeatherAnimate from "@/components/WeatherAnimate";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    WeatherSearch,
    WeatherMain,
    WeatherInfo,
    WeatherAnimate,
    GithubIcon
  },
  computed: {
    ...mapGetters(["isSearched"])
  },
  methods: {
    ...mapActions(["fetchWeatherData"]),
    initData() {
      this.fetchWeatherData(this.$store.state.defaultSearch);
    }
  },
  created() {
    this.initData();
  }
};
</script>

<style lang="less">
@import url("https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,700;0,800;0,900;1,300;1,500&display=swap");
:root {
  --cardWidth: 360px;
  --darkColor: #666;
  --grayColor: #999;
  --cardBgColor: #f1f1f1;
  --cloudAnimateTime: 150s;
  --clearAnimationTime: 120s;
  --snowAnimateTime: 15s;
  --rainAnimateTime: 70s;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Jost", sans-serif;
}
body {
  background-color: fade(#000, 30);
  overflow: hidden;
}
.app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.card {
  max-width: var(--cardWidth);
  width: 100%;
  padding: 40px;
  margin: 20px;
  border-radius: 20px;
  box-shadow: 0 0 70px fade(black, 30);
  z-index: 9999;
  background-color: var(--cardBgColor);

  @media (max-height: 767px) {
    padding: 30px;
  } 
}

@media (max-width: 480px) {
  .card {
    padding: 30px;
  }
}

.footer-text {
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    text-shadow: 0 2px 3px fade(black, 20);
    span {
      font-size: 18px;
      margin-left: 5px;
    }
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
