import Vue from 'vue';
import App from './App.vue';
import Vuep from 'vuep';
import 'vuep/dist/vuep.css';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuex from 'vuex';
import routes from './routes';

Vue.use(Vuep);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
