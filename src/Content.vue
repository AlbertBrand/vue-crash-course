<template>
  <div class="content">
    <route-header :component="component"></route-header>
    <vuep :template="component.code" :key="'preview:' + component.name" :scope="scope" class="preview" />
    <console-logger :key="'log:' + component.name" class="logger" />
  </div>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';
import ConsoleLogger from './ConsoleLogger.vue';
import RouteHeader from './RouteHeader.vue';

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
    RouteHeader,
    ConsoleLogger,
  },
};
</script>

<style scoped>
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
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
