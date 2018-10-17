<template>
  <section class="console" ref="log">
    <div v-for="log in logs" :key="log.id" :class="log.type">{{log.line}}</div>
  </section>
</template>

<script>
const consoleLog = console.log;
const consoleError = console.error;

export default {
  data: () => ({
    logs: [],
    nextId: 1,
  }),
  beforeCreate() {
    console.log = function() {
      this.addToLog(arguments, 'log');
      consoleLog(...arguments);
    }.bind(this);
    console.error = function() {
      this.addToLog(arguments, 'error');
      consoleError(...arguments);
    }.bind(this);
  },
  updated() {
    const elem = this.$refs.log;
    elem.scrollTop = elem.scrollHeight;
  },
  methods: {
    addToLog(origArgs, type) {
      const args = [];
      for (let i = 0; i < origArgs.length; i++) {
        const arg = origArgs[i];
        if (arg.constructor === Object) {
          args.push(JSON.stringify(arg, null, 2));
        } else {
          args.push(arg);
        }
      }
      this.$nextTick(() => {
        this.logs.push({
          id: this.nextId++,
          line: args.join(' '),
          type,
        });
      });
    },
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
