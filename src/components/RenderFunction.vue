<template>
  <div>
    <my-header :level="1">Hello</my-header>
    <my-header :level="2">Hello</my-header>
    <my-header :level="3">Hello</my-header>

    <my-table>
      <my-row :values="[1,2,3]"></my-row>
      <my-row :values="[4,5,6]"></my-row>
      <my-row :values="[7,8,9]"></my-row>
    </my-table>
  </div>
</template>

<script>
const MyHeader = {
  render(createElement) {
    return createElement(
      'h' + this.level,
      { class: 'custom' },
      this.$slots.default
    );
  },
  props: {
    level: { type: Number, required: true },
  },
};

const MyTable = {
  functional: true,
  render(createElement, context) {
    return createElement('table', context.data, context.children);
  },
};

const MyRow = {
  functional: true,
  props: {
    values: { type: Array, required: true },
  },
  render(createElement, context) {
    return createElement(
      'tr',
      context.data,
      context.props.values.map(value => createElement('td', String(value)))
    );
  },
};

export default {
  components: {
    MyHeader,
    MyTable,
    MyRow,
  },
};
</script>

<style scoped>
.custom {
  color: green;
}
</style>
