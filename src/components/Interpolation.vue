<template>
  <div>
    <p>Message: {{ msg }}</p>
    <p>Message reversed: {{ msg.split('').reverse().join('') }}</p>
    <p v-once>Message rendered once: {{ msg }}</p>
    <button @click="updateMsg">Update message</button>

    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>

    <button :disabled="isButtonDisabled">Button</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    msg: 'Hi there!',
    rawHtml: '<span style="color: red">HTML</span>',
    isButtonDisabled: true,
  }),
  methods: {
    updateMsg: function() {
      this.msg = 'Bye bye';
    },
  },
};
</script>
