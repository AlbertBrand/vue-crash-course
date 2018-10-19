<template>
  <header class="header">
    <h1>{{component.name}}</h1>
    <nav class="quick">
      <a href="#" id="reset" @click.prevent="$emit('resetCode')" title="Reset editor">⎌</a>
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
  display: flex;
  flex: 1;
}
.quick #reset {
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
</style>
