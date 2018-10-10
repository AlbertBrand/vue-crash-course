<template>
  <section class="console" ref="log">
    <div v-for="log in logs" :key="log.id" :class="log.type">{{log.line}}</div>
  </section>
</template>

<script>
export default {
  data: () => ({
    logs: [],
    nextId: 1,
  }),
  beforeCreate: function() {
    function wrap(vm, type, original) {
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
        vm.logs.push({
          id: vm.nextId++,
          line: args.join(' '),
          type,
        });
        original(...arguments);
      };
    }
    console.log = wrap(this, 'log', console.log);
    console.error = wrap(this, 'error', console.error);
  },
  updated() {
    const elem = this.$refs.log;
    elem.scrollTop = elem.scrollHeight;
  },
};
</script>

<style scoped>
.console {
  overflow: scroll;
  border: 1px solid #eee;
  padding: 5px;
  font-family: monospace;
}
.error {
  color: red;
}
</style>
