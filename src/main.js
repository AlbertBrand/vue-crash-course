import Vue from 'vue';
import App from './App.vue';
import Vuep from 'vuep';
import 'vuep/dist/vuep.css';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(Vuep);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
