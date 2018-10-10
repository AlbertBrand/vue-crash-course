<template>
  <div class="app">
    <component-menu class="menu" />
    <router-view></router-view>
  </div>
</template>

<script>
import ComponentMenu from './ComponentMenu.vue';

export default {
  name: 'app',
  components: {
    ComponentMenu,
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}
a {
  color: rgb(100, 181, 135);
}
a:visited {
  color: rgb(60, 110, 82);
}
.app {
  display: flex;
  height: 100%;
}
.menu {
  width: 200px;
  min-width: 200px;
  overflow: scroll;
}
/* fix height */
.preview .vuep-editor .CodeMirror {
  height: 100%;
}
</style>
