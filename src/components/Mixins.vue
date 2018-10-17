<template>
  <div>
    <h2>Mixins</h2>
    <mixed-component></mixed-component>
  </div>
</template>

<script>
const myMixin = {
  created() {
    console.log('created from mixin');
  },
  computed: {
    bye() {
      console.log('bye from mixin');
    },
  },
};

const MixedComponent = {
  mixins: [myMixin],
  created() {
    console.log('created from component');
  },
  computed: {
    bye() {
      console.log('bye from component');
    },
  },
  template: `<div>Just doing my job. {{ bye }}</div>`,
};

export default {
  components: {
    MixedComponent,
  },
};
</script>
