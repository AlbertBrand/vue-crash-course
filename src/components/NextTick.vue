<template>
  <button @click="update">{{ text }}</button>
</template>

<script>
export default {
  data: () => ({
    text: 'Update element',
  }),
  methods: {
    async update() {
      this.text = 'Element updated!';
      console.log(this.$el.textContent);
      await this.$nextTick();
      console.log(this.$el.textContent);
    },
  },
};
</script>
