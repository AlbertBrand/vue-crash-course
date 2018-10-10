<template>
  <nav>
    <section v-for="(group, key) in groups" :key="key">
      <h1>{{ group.name }}</h1>
      <ul>
        <li v-for="cmp in group.components" :key="cmp.name">
          <router-link :to="kebabCase(cmp.name)">{{ cmp.name }}</router-link>
        </li>
      </ul>
    </section>
  </nav>
</template>

<script>
import groups from './groups';
import kebabCase from './util/kebabCase';

export default {
  data: () => ({
    groups,
  }),
  methods: {
    kebabCase,
  },
};
</script>

<style scoped>
nav {
  background-color: #f8f8f8;
  border-right: 1px solid #eee;
}
h1 {
  padding: 10px;
  margin: 0;
  font-size: 16px;
}
ul {
  list-style: none;
  padding: 10px;
  margin: 0;
}
li {
  margin-bottom: 5px;
}
</style>
