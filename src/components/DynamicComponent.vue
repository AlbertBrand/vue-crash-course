<template>
  <div>
    <div>
      <button @click="currentComponent = 'ComponentA'">Switch to A</button>
      <button @click="currentComponent = 'ComponentB'">Switch to B</button>
      <button @click="currentComponent = 'unknown'">Switch to unknown</button>
    </div>
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
const ComponentA = {
  template: `<span>Component A</span>`,
};
const ComponentB = {
  template: `<span>Component B</span>`,
};

export default {
  components: {
    ComponentA,
    ComponentB,
  },
  data: () => ({
    currentComponent: 'ComponentA',
  }),
};
</script>
