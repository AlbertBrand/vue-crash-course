<template>
  <div>
    <h2>Custom directives</h2>
    <input v-focus />

    <h2>Arguments</h2>
    <div v-demo:foo.a.b="message"></div>

    <h2>Shorthand</h2>
    <div v-background-color="'#00ff00'">Green</div>

  </div>
</template>

<script>
const Focus = {
  inserted: function(el) {
    el.focus();
  },
};

const Demo = {
  bind: function(el, binding) {
    var s = JSON.stringify;
    el.innerHTML = `
      <p>name: ${s(binding.name)} 
      <p>value: ${s(binding.value)} 
      <p>expression: ${s(binding.expression)} 
      <p>argument: ${s(binding.arg)} 
      <p>modifiers: ${s(binding.modifiers)} 
    `;
  },
};

const BackgroundColor = function(el, binding) {
  el.style.backgroundColor = binding.value;
};

export default {
  data: () => ({
    message: 'hello',
  }),
  directives: {
    Focus,
    Demo,
    BackgroundColor,
  },
};
</script>
