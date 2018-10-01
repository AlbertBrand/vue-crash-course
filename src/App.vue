<template>
  <div>
    <vuep :template="component.code" :key="component.name"></vuep>
    <ul>
      <li v-for="cmp in components" :key="cmp.name">
        <a href="#" @click="load(cmp)">{{ cmp.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from '!raw-loader!./components/HelloWorld.vue';
import AttributeBinding from '!raw-loader!./components/AttributeBinding.vue';
import LoopConditionals from '!raw-loader!./components/LoopConditionals.vue';

const components = [
  { name: 'Hello World', code: HelloWorld },
  { name: 'Attribute Binding', code: AttributeBinding },
  { name: 'Loop Conditionals', code: LoopConditionals },
];

export default {
  name: 'app',
  data: () => ({
    component: components[0],
    components,
  }),
  methods: {
    load(cmp) {
      this.component = cmp;
    },
  },
};
</script>
