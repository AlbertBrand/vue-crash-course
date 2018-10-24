<template>
  <div>
    <h2>Exercise 3</h2>
    <p>Complete the component 'OddRows' that add an 'odd' class to every odd item in a list.</p>
    <odd-rows></odd-rows>
  </div>
</template>

<style scoped>
.odd {
  background-color: lightblue;
}
</style>

<script>
// Implement the feature in the following component:
const OddRows = {
  data: () => ({
    rows: ['One', 'Two', 'Three', 'Four', 'Five'],
  }),
  methods: {
    isOdd: idx => idx % 2 === 0,
  },
  template: `<div>
    <ul>
      <li v-for="row in rows" :key="row">{{ row }}</li>
    </ul>
  </div>`,
};

export default {
  components: {
    OddRows,
  },
};
</script>
