<template>
  <div>
    <button @click="updateTime">Update props</button>
    <!-- Expressions can have side-effects, write complex logic in a separate method. -->
    <button @click="shown = !shown">Toggle component</button>
    <!-- The v-if directive adds or removes the component based on its expression. -->
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
  // Called after the instance has been initialized, before setup of data and others.
  beforeCreate() {
    console.log('beforeCreate');
  },
  // Called after all properties on the instance are setup, before element is mounted.
  created() {
    console.log('created');
  },
  // Called before element is mounted, render function is not called yet.
  beforeMount() {
    console.log('beforeMount');
  },
  // Called after the instance has been mounted to a DOM element.
  // Children of this instance are not mounted yet.
  mounted() {
    console.log('mounted', this.$el);
  },
  // Called after a data change, before the DOM element is updated.
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  // Called after the DOM element is updated.
  // Avoid changing state in this callback, as this will trigger a re-rendering loop.
  updated() {
    console.log('updated');
  },
  // Called before the instance is destroyed, it is still fully functional.
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  // Called after the instance is destroyed, all properties have been teared down.
  // Children of this instance have been destroyed already.
  destroyed() {
    console.log('destroyed');
  },
  template: `<p>Time: {{ time }}</p>`,
};

export default {
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
</script>
