<template>
  <textarea v-model="message"></textarea>
</template>

<script>
export default {
  data: () => ({
    message: '',
  }),
  beforeCreate: function() {
    function wrap(vm, original) {
      return function() {
        const args = [];
        for (let i = 0; i < arguments.length; i++) {
          const arg = arguments[i];
          if (arg === Object(arg)) {
            args.push(JSON.stringify(arg, null, 2));
          } else {
            args.push(arg);
          }
        }
        vm.message += args.join(' ') + '\n';
        original(...arguments);
      };
    }
    console.log = wrap(this, console.log);
    console.error = wrap(this, console.error);
  },
};
</script>
