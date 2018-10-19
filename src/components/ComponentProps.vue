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
  components: {
    SingleLine,
  },
  template: `<div>
    <h2>A {{ name }} says:</h2>
    <ul>
      <single-line :text="line"></single-line>
      <single-line :text="line"></single-line>
      <single-line :text="line"></single-line>
    </ul>
  </div>`,
};

const Root = {
  components: {
    TripleSayer,
  },
};

export default Root;
</script>
