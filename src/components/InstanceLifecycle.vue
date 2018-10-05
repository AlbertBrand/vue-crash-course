<template>
  <div>
    <button @click="updateTime">Update props</button>
    <button @click="toggle">Toggle component</button>
    <lifecycle v-if="shown" :time="time"></lifecycle>
  </div>
</template>

<script>
const Lifecycle = {
  props: {
    time: {
      type: Number,
    },
  },
  beforeCreate: function() {
    console.log('beforeCreate');
  },
  created: function() {
    console.log('created');
  },
  beforeMount: function() {
    console.log('beforeMount');
  },
  mounted: function() {
    console.log('mounted');
  },
  beforeUpdate: function() {
    console.log('beforeUpdate');
  },
  updated: function() {
    console.log('updated');
  },
  beforeDestroy: function() {
    console.log('beforeDestroy');
  },
  destroyed: function() {
    console.log('destroyed');
  },
  methods: {},
  template: `<p>Time: {{ time }}</p>`,
};

const Wrapper = {
  components: {
    Lifecycle,
  },
  data: () => ({
    shown: true,
    time: undefined,
  }),
  methods: {
    updateTime: function() {
      this.time = Date.now();
    },
    toggle: function() {
      this.shown = !this.shown;
    },
  },
};

export default Wrapper;
</script>
