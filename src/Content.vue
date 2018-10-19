<template>
  <div class="content">
    <route-header :component="component" @resetCode="resetCode"></route-header>
    <vuep v-model="code" :key="'preview:' + component.name" :scope="scope" ref="preview" class="preview" />
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
  computed: {
    code: {
      get() {
        const localCode = localStorage.getItem(this.component.name);
        const providedCode = this.component.code;
        return localCode !== null ? localCode : providedCode;
      },
      set(code) {
        localStorage.setItem(this.component.name, code);
      },
    },
  },
  methods: {
    resetCode() {
      localStorage.removeItem(this.component.name);
      // small hack to trigger component re-rendering
      this.component.code += ' ';
    },
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
