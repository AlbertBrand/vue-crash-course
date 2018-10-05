<template>
  <div>
    <h3>Custom directives</h3>
    <input v-focus/>

    <h3>Arguments</h3>
    <div v-demo:foo.a.b="message"></div>
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

export default {
  data: () => ({
    message: 'hello',
  }),
  directives: {
    Focus,
    Demo,
  },
};
</script>
