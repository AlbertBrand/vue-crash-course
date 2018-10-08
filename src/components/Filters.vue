<template>
  <div>
    <h3>Custom filter</h3>
    {{ name | capitalize }}

    <h3>Chaining</h3>
    {{ name | capitalize | snake }}

    <h3>Arguments</h3>
    {{ name | snake('#') }}

    <h3>Also in bindings</h3>
    <input :value="name | capitalize"/>

  </div>
</template>

<script>
const Capitalize = function(value) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const Snake = function(value, sep = '-') {
  if (!value) return '';
  value = value.toString();
  return value.split('').join(sep);
};

export default {
  data: () => ({
    name: 'willem',
  }),
  filters: {
    Capitalize,
    Snake,
  },
};
</script>
