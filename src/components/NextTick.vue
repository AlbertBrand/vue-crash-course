<template>
  <button @click="update">{{ text }}</button>
</template>

<script>
export default {
  data: () => ({
    text: 'Update element',
  }),
  methods: {
    update() {
      this.text = 'Element updated!';
      console.log(this.$el.textContent);
      this.$nextTick(() => {
        console.log(this.$el.textContent);
      });
    },
  },
};
</script>
