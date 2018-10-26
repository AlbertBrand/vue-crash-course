<template>
  <ol>
    <!-- Refer to custom components with 'kebab-case' names. -->
    <colorized-li name="Blue" color="lightblue"></colorized-li>
    <colorized-li name="Red" color="red"></colorized-li>
    <colorized-li name="Green" color="lightgreen"></colorized-li>
  </ol>
</template>

<script>
const ColorizedLi = {
  // Specify attributes of a component with props definition.
  // These are available on 'this' after initialization.
  props: {
    name: { type: String },
    color: { type: String },
  },
  // Templates for components are inlined in this crash course.
  // In a real project, you should create a new SFC file and import it.
  template: `<li :style="'background-color:' + color">{{ name }}</li>`,
};

export default {
  // The 'components' property specifies which custom components
  // are rendered in this component template.
  components: {
    ColorizedLi,
  },
};
</script>
