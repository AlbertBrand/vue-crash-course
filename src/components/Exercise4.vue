<template>
  <div>
    <h2>Exercise 4</h2>
    <p>Complete the component 'ColorPicker' that renders radio buttons and shows a resulting div with a specific color</p>
    <color-picker></color-picker>
  </div>
</template>

<style>
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
.green {
  background-color: green;
}
</style>

<script>
// Implement the feature in the following component:
const ColorPicker = {
  data: () => ({
    options: [
      { text: 'Red', value: 'red' },
      { text: 'Blue', value: 'blue' },
      { text: 'Green', value: 'green' },
    ],
  }),
  template: `<div>
    <div v-for="option in options" :key="option.value">
      ...
    </div>
    <div class="this-should-get-a-class-applied">Result</div>
  </div>`,
};

export default {
  components: {
    ColorPicker,
  },
};
</script>
