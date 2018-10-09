<template>
  <div>
    <button @click="$emit('test', 'Testing!')">Test me</button>
    <button @click="$emit('test-once', 'Test?')">Test me once</button>
    <br />
    <button @click="$off('test')">Remove test listener</button>
    <button @click="$off()">Remove all listeners</button>
  </div>
</template>

<script>
export default {
  created: function() {
    this.$on('test', function(msg) {
      console.log(msg);
    });
    this.$once('test-once', function(msg) {
      console.log(msg);
    });
  },
};
</script>
