<template>
  <div>
    <div v-for="(group, key) in groups" :key="key">
      <h1>{{ group.name }}</h1>
      <ul>
        <li v-for="cmp in group.components" :key="cmp.name">
          <a href="#" @click="onClick(cmp)">{{ cmp.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px;
  margin: 0;
  font-size: 14px;
}
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
    groups: {
      type: Array,
    },
    onClick: {
      type: Function,
    },
  },
};
</script>
