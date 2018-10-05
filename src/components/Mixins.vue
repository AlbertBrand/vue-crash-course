<template>
  <div>
    <h3>Mixins</h3>
    <mixed-component></mixed-component>
  </div>
</template>

<script>
const myMixin = {
  created: function() {
    console.log('created from mixin');
  },
  computed: {
    bye: function() {
      console.log('bye from mixin');
    },
  },
};

const MixedComponent = {
  mixins: [myMixin],
  created: function() {
    console.log('created from component');
  },
  computed: {
    bye: function() {
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
