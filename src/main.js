import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";


Vue.config.productionTip = false;
Vue.filter("round", function(value, decimals) {
  if (!value) {
    value = 0;
  }

  if (!decimals) {
    decimals = 0;
  }

  value = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
  return value;
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
