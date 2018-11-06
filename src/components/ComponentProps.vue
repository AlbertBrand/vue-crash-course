<template>
  <triple-sayer name="parrot" line="Polly wants a cracker"></triple-sayer>
</template>

<script>
const SingleLine = {
  props: {
    text: { type: String },
  },
  template: '<li>{{ text }}</li>',
};

const TripleSayer = {
  props: {
    name: { type: String },
    line: { type: String },
  },
  // Specify for each component which components are used in its template.
  components: {
    SingleLine,
  },
  // Pass data to props of components using the :prop-name="data" bind syntax.
  template: `<div>
    <h2>A {{ name }} says:</h2>
    <ul>
      <single-line :text="line"></single-line>
      <single-line :text="line"></single-line>
      <single-line :text="line"></single-line>
    </ul>
  </div>`,
};

export default {
  components: {
    TripleSayer,
  },
};
</script>
