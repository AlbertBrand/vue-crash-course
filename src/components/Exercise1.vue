<template>
  <div>
    <h2>Exercise 1</h2>
    <p>Complete the component 'Today' that shows the current day of the week.</p>
    <today></today>
  </div>
</template>

<script>
// You can use the following code to get the weekday:
const now = new Date();
const weekday = now.toLocaleDateString('en-EN', { weekday: 'long' });
console.log(weekday);

// Implement the feature in the following component:
const Today = {
  template: `<div>
    <p>It's <strong>[insert weekday here]</strong>!</p>
  </div>`,
};

export default {
  components: {
    Today,
  },
};
</script>
