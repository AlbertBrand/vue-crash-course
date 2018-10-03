<template>
    <textarea v-model="message"></textarea>
</template>

<script>
export default {
  data: () => ({
    message: '',
  }),
  beforeCreate: function() {
    const log = console.log;
    const self = this;
    console.log = function() {
      const args = [];
      for (let i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      self.message += args.join(' ') + '\n';
      log(...arguments);
    };
  },
};
</script>
