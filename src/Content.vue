<template>
  <div class="content">
    <header>
      <h1>{{component.name}}</h1>
    </header>
    <vuep :template="component.code" :key="'preview:' + component.name" :scope="scope" class="preview" />
    <console-logger :key="'log:' + component.name" class="logger" />
  </div>
</template>

<script>
import Vue from 'vue';
import ConsoleLogger from './ConsoleLogger.vue';

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
    },
  }),
  components: {
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
h1 {
  margin: 0 0 10px;
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
