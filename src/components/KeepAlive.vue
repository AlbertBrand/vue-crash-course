<template>
  <div>
    <keep-alive>
      <counter name="Counter 1" key="1" v-if="showFirst"></counter>
      <counter name="Counter 2" key="2" v-else></counter>
    </keep-alive>
    <button @click="showFirst = !showFirst">Toggle</button>
  </div>
</template>

<script>
const Counter = {
  data: () => ({
    counter: 0,
  }),
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  template: `<div>
    {{ name }} clicked {{ counter }} times
    <button @click="counter++">Increase</button>
  </div>`,
};

export default {
  components: {
    Counter,
  },
  data: () => ({
    showFirst: true,
  }),
};
</script>
