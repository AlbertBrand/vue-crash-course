<template>
  <div>
    <h2>Exercise 2</h2>
    <p>Complete the component 'CurrentTime' that shows the current time and updates every second.</p>
    <current-time></current-time>
  </div>
</template>

<script>
// Use setInterval and clearInterval to trigger recurring events

// Implement the feature in the following component:
const CurrentTime = {
  data: () => ({
    time: 'unknown',
  }),
  created() {
    // implement
  },
  beforeDestroy() {
    // implement
  },
  methods: {
    updateTime() {
      const now = new Date();
      this.time = now.toLocaleTimeString('en-EN');
    },
  },
  template: `<div>
    <p>The time is <strong>{{ time }}</strong>!</p>
  </div>`,
};

export default {
  components: {
    CurrentTime,
  },
};
</script>
