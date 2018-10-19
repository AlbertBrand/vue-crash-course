<template>
  <header class="header">
    <h1>{{component.name}}</h1>
    <a href="#" class="reset" @click.prevent="$emit('resetCode')" title="Reset editor">⎌</a>
    <nav class="quick">
      <router-link v-if="prevPath" :to="prevPath" title="Previous example">⇦</router-link>
      <span v-else>⇦</span>
      <router-link v-if="nextPath" :to="nextPath" title="Next example">⇨</router-link>
      <span v-else>⇨</span>
    </nav>
  </header>
</template>

<script>
import routes from './routes';

export default {
  props: {
    component: {
      type: Object,
      required: true,
    },
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

<style>
.header {
  display: flex;
}
h1 {
  margin: 0 0 10px;
}
.quick {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.reset,
.quick * {
  margin-left: 10px;
  font-size: 30px;
}
.quick span {
  color: #ccc;
}
a.reset,
.quick a {
  text-decoration: none;
}
</style>
