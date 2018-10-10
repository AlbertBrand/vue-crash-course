<template>
  <div>
    <h2>Custom filter</h2>
    {{ name | capitalize }}

    <h2>Chaining</h2>
    {{ name | capitalize | snake }}

    <h2>Arguments</h2>
    {{ name | snake('#') }}

    <h2>Also in bindings</h2>
    <input :value="name | capitalize" />

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
