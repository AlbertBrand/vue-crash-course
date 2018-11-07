import Vue from 'vue';
import App from './App.vue';
import Vuep from 'vuep';
import 'vuep/dist/vuep.css';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuex from 'vuex';
import routes from './routes';
import * as Babel from 'babel-standalone';
import 'regenerator-runtime/runtime';

// expose babel on window for Vuep
window.Babel = Babel;

Vue.use(Vuep);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
});

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App),
});

// dev helper
window.cmp = () => {
  return app.$children[0].$children[1].$children[1].$children[1].$children[0];
};
