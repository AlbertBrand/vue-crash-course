<template>
  <div>
    <p>{{ message }}</p>
    <button @click="reverseMessage">Reverse Message</button>
    <p><label>Edit message: <input v-model="message"/></label></p>
  </div>
</template>

<script>
export default {
  data: () => ({
    message: 'Hello Vue.js!',
  }),
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split('')
        .reverse()
        .join('');
    },
  },
};
</script>
