import Vue from 'vue';
import App from './App.vue';
import Vuep from 'vuep';
import 'vuep/dist/vuep.css';

Vue.use(Vuep);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App),
});
