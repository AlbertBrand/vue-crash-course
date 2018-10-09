<template>
  <div>
    <theme-provider :primary-color="primaryColor" :key="primaryColor">
      <theme-p>Hey</theme-p>
      <p>Ho</p>
      <div>
        <p>Yes</p>
        <theme-p>Nice!</theme-p>
      </div>
    </theme-provider>
    <button @click="flip">Flip color</button>
  </div>
</template>

<script>
var ThemeProvider = {
  props: {
    primaryColor: { type: String, required: true },
  },
  provide: function() {
    return {
      primaryColor: this.primaryColor,
    };
  },
  template: `
    <div><slot></slot></div>
  `,
};

var ThemeP = {
  inject: ['primaryColor'],
  computed: {
    style: function() {
      return { color: this.primaryColor };
    },
  },
  template: `
    <p :style="style"><slot></slot></p>
  `,
};

export default {
  data: () => ({
    primaryColor: 'red',
  }),
  components: {
    ThemeProvider,
    ThemeP,
  },
  methods: {
    flip: function() {
      this.primaryColor = this.primaryColor === 'blue' ? 'red' : 'blue';
    },
  },
};
</script>
