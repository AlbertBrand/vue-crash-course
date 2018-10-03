<template>
  <ul>
    <li v-for="cmp in components" :key="cmp.name">
      <a href="#" @click="onClick(cmp)">{{ cmp.name }}</a>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 10px;
  margin: 0;
}
li {
  margin-bottom: 5px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>

<script>
export default {
  name: 'app',
  props: {
    components: {
      type: Array,
    },
    onClick: {
      type: Function,
    },
  },
};
</script>
