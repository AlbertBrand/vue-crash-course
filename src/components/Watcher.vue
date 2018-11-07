<template>
  <div>
    <p>My name is {{name}}</p>
    <p>Nested value {{nested.value}}</p>
    <button @click="changeName()">Change my name!</button>
    <button @click="nested.value++">Increase nested value</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: 'Harry',
    nested: {
      value: 1,
    },
  }),
  methods: {
    changeName() {
      this.name = this.name === 'Sally' ? 'Harry' : 'Sally';
    },
  },
  watch: {
    // A watch function is triggered after data has updated.
    name(newValue, oldValue) {
      console.log({ name: this.name, new: newValue, old: oldValue });
      // A watch is useful for triggering asynchronous behavior on data change.
    },
    // Watch can be described with a path expression
    'nested.value'(value) {
      console.log('updated nested value:', value);
    },
  },
};
</script>
