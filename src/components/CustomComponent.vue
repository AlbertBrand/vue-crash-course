<template>
  <ol>
    <colorized-li name="Blue" color="lightblue"></colorized-li>
    <colorized-li name="Red" color="red"></colorized-li>
    <colorized-li name="Green" color="lightgreen"></colorized-li>
  </ol>
</template>

<script>
const ColorizedLi = {
  props: {
    name: { type: String },
    color: { type: String },
  },
  template: '<li :style="{ backgroundColor: color }">{{ name }}</li>',
};

const Root = {
  components: {
    ColorizedLi,
  },
};

export default Root;
</script>
