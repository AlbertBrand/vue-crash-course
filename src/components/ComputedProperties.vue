<template>
  <div>
    <h2>Computed properties</h2>

    <p>Original message: {{ message }}</p>

    <!-- Every time the template is rendered, inlined expressions are evaluated. -->
    <p>Inlined reversed message: {{ message.split('').reverse().join('') }}</p>

    <!-- Computed properties are only updated and cached when dependencies change. -->
    <p>Computed reversed message: {{ reversedMessage }}</p>

    <!-- Computed properties can use other computed properties -->
    <p>Computed capitalized reversed message: {{ capitalizedReversedMessage }}</p>

    <h2>Computed setter</h2>

    <!-- Computed property can also be used as a model, this requires a setter. -->
    <p>Message: <input type="text" v-model="message" /></p>
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
      // Any reactive property that is read is a dependency.
      return this.message
        .split('')
        .reverse()
        .join('');
    },
    capitalizedReversedMessage() {
      return this.reversedMessage.toUpperCase();
    },
    messageLength: {
      // If needed, separate property in a getter and setter method.
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
