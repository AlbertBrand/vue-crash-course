<template>
  <div>
    <h2>Render a computed filtered array</h2>
    <ul>
      <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    </ul>

    <h2>Render a filtered array via method</h2>
    <ul>
      <li v-for="n in evenFilter(numbers)" :key="n">{{ n }}</li>
    </ul>

    <a href="https://vuejs.org/v2/style-guide/#Avoid-v-if-with-v-for-essential">Don't combine v-if and v-for</a>
  </div>
</template>

<script>
export default {
  data: () => ({
    numbers: [1, 2, 3, 4, 5],
  }),
  methods: {
    evenFilter(numbers) {
      return numbers.filter(number => number % 2 === 0);
    },
  },
  computed: {
    evenNumbers() {
      return this.evenFilter(this.numbers);
    },
  },
};
</script>
