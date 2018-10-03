<template>
  <div class="app">
    <component-menu :components="components" :onClick="setComponent" class="menu" />
    <div class="content">
      <vuep :template="component.code" :key="'preview:' + component.name" class="preview" />
      <console-logger :key="'log:' + component.name" class="logger" />
    </div>
  </div>
</template>

<script>
import ComponentMenu from './ComponentMenu.vue';
import ConsoleLogger from './ConsoleLogger.vue';

import HelloWorld from '!raw-loader!./components/HelloWorld.vue';
import AttributeBinding from '!raw-loader!./components/AttributeBinding.vue';
import LoopConditionals from '!raw-loader!./components/LoopConditionals.vue';
import UserInput from '!raw-loader!./components/UserInput.vue';
import ComponentProps from '!raw-loader!./components/ComponentProps.vue';
import InstanceLifecycle from '!raw-loader!./components/InstanceLifecycle.vue';

const components = [
  { name: 'Hello World', code: HelloWorld },
  { name: 'Attribute Binding', code: AttributeBinding },
  { name: 'Loop and Conditionals', code: LoopConditionals },
  { name: 'User input and reactive binding', code: UserInput },
  { name: 'Component Props', code: ComponentProps },
  { name: 'Instance Lifecycle', code: InstanceLifecycle },
];

export default {
  components: {
    ComponentMenu,
    ConsoleLogger,
  },
  data: () => ({
    component: components[0],
    components,
  }),
  methods: {
    setComponent(cmp) {
      this.component = cmp;
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
.app {
  display: flex;
  height: 100%;
}
.menu {
  width: 200px;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.app .preview {
  flex: 1;
  height: auto;
  padding-bottom: 10px;
}
.logger {
  height: 200px;
}
.preview .vuep-editor .CodeMirror {
  height: 100%;
}
</style>
