<template>
  <div class="content">
    <header class="header">
      <h1>{{component.name}}</h1>
      <nav class="quick">
        <router-link v-if="prevPath" :to="prevPath">⇦</router-link>
        <span v-else>⇦</span>
        <router-link v-if="nextPath" :to="nextPath">⇨</router-link>
        <span v-else>⇨</span>
      </nav>
    </header>
    <vuep :template="component.code" :key="'preview:' + component.name" :scope="scope" class="preview" />
    <console-logger :key="'log:' + component.name" class="logger" />
  </div>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';
import ConsoleLogger from './ConsoleLogger.vue';
import routes from './routes';

export default {
  props: {
    component: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    scope: {
      Vue,
      Vuex,
    },
  }),
  components: {
    ConsoleLogger,
  },
  computed: {
    nextPath() {
      return this.currentIdx < routes.length - 2
        ? routes[this.currentIdx + 1].path
        : undefined;
    },
    prevPath() {
      return this.currentIdx > 0 ? routes[this.currentIdx - 1].path : undefined;
    },
    currentIdx() {
      return routes.findIndex(route => route.path === this.$route.path);
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
h1 {
  margin: 0 0 10px;
  flex: 1;
}
.quick * {
  margin-left: 10px;
  font-size: 30px;
}
.quick span {
  color: #ccc;
}
.quick a {
  text-decoration: none;
}
.preview {
  flex: 1;
  height: auto;
  padding-bottom: 10px;
}
.logger {
  height: 200px;
}
</style>
