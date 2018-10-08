<template>
  <div>
    <h3>Custom directives</h3>
    <input v-focus/>

    <h3>Arguments</h3>
    <div v-demo:foo.a.b="message"></div>

    <h3>Shorthand</h3>
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
