<template>
  <div>
    <button @click="updateTime">Update props</button>
    <button @click="shown = !shown">Toggle component</button>
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
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
  },
  methods: {},
  template: `<p>Time: {{ time }}</p>`,
};

const Root = {
  components: {
    Lifecycle,
  },
  data: () => ({
    shown: true,
    time: undefined,
  }),
  methods: {
    updateTime() {
      this.time = Date.now();
    },
  },
};

export default Root;
</script>
