<template>
  <div class="hello">
    <img alt="Vue logo" src="assets/logo.png">
    <div id="hello-world">Hello, {{ name }}!</div>
  </div>
</template>

<style>
.hello {
  text-align: center;
}
#hello-world {
  color: rgb(100, 181, 135);
  font-weight: bold;
}
</style>

<script>
export default {
  data: () => ({
    name: 'Vue',
  }),
};
</script>
