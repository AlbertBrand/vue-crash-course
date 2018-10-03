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
import SimpleList from '!raw-loader!./components/SimpleList.vue';
import UserInput from '!raw-loader!./components/UserInput.vue';
import ComponentProps from '!raw-loader!./components/ComponentProps.vue';
import InstanceLifecycle from '!raw-loader!./components/InstanceLifecycle.vue';
import Interpolation from '!raw-loader!./components/Interpolation.vue';
import Directives from '!raw-loader!./components/Directives.vue';
import ComputedProperties from '!raw-loader!./components/ComputedProperties.vue';
import Watcher from '!raw-loader!./components/Watcher.vue';
import ClassBindings from '!raw-loader!./components/ClassBindings.vue';
import StyleBindings from '!raw-loader!./components/StyleBindings.vue';
import Conditionals from '!raw-loader!./components/Conditionals.vue';
import ExtendedList from '!raw-loader!./components/ExtendedList.vue';

const components = [
  { name: 'Hello World', code: HelloWorld },
  { name: 'Attribute Binding', code: AttributeBinding },
  { name: 'Simple List', code: SimpleList },
  { name: 'User input and reactive binding', code: UserInput },
  { name: 'Component Props', code: ComponentProps },
  { name: 'Instance Lifecycle', code: InstanceLifecycle },
  { name: 'Interpolation', code: Interpolation },
  { name: 'Directives', code: Directives },
  { name: 'Computed Properties', code: ComputedProperties },
  { name: 'Watcher', code: Watcher },
  { name: 'Class Bindings', code: ClassBindings },
  { name: 'Style Bindings', code: StyleBindings },
  { name: 'Conditionals', code: Conditionals },
  { name: 'Extended List', code: ExtendedList },
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
