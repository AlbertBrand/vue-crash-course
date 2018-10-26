<template>
  <!-- Component templates must have exactly one root element. -->
  <div class="hello">
    <img alt="Vue logo" src="assets/logo.png">
    <!-- 'Mustache' syntax interpolates text -->
    <div id="hello-world">Hello, {{ name }}!</div>
  </div>
</template>

<style scoped>
.hello {
  text-align: center;
}
#hello-world {
  color: rgb(100, 181, 135);
  font-weight: bold;
}
</style>

<script>
// An object literal defines a component in a concise way.
export default {
  // The 'data' method returns the initial data of the component.
  data: () => ({
    name: 'Vue',
  }),
};
</script>
