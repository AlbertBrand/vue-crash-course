<template>
  <div>
    <h2>Computed properties</h2>
    <p>Original message: {{ message }}</p>
    <p>Inlined reversed message: {{ message.split('').reverse().join('') }}</p>
    <p>Computed reversed message: {{ reversedMessage }}</p>

    <h2>Computed setter</h2>
    <p>Message length: <input type="number" v-model="messageLength" /></p>
  </div>
</template>

<script>
export default {
  data: () => ({
    message: 'This is a message',
  }),
  computed: {
    reversedMessage() {
      return this.message
        .split('')
        .reverse()
        .join('');
    },
    messageLength: {
      get() {
        return this.message.length;
      },
      set(length) {
        this.message = this.message.substring(0, length);
      },
    },
  },
};
</script>
