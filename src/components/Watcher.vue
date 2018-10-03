<template>
  <div>
    <p>My name is {{name}}</p>
    <button @click="changeName()">Change my name!</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: 'Harry',
  }),
  methods: {
    changeName: function() {
      this.name = this.name === 'Sally' ? 'Harry' : 'Sally';
    },
  },
  watch: {
    name: function(newValue, oldValue) {
      console.log({ name: this.name, new: newValue, old: oldValue });
    },
  },
};
</script>
