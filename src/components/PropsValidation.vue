<template>
  <div>
    <h2>Type validation</h2>

    <h4>Multiple types</h4>
    <block value="hello"></block>
    <block :value="4"></block>

    <h4>Required</h4>
    <square :width="4"></square>

    <h4>Default</h4>
    <snow></snow>

    <h4>Custom validator</h4>
    <user email="a@b.com"></user>

    <h4>Non-specified props</h4>
    <block :value="4" class="xyz"></block>

  </div>
</template>

<script>
const Block = {
  props: {
    value: { type: [String, Number] },
  },
  template: `<div class="abc">Block {{ value }}</div>`,
};

const Square = {
  props: {
    width: { type: Number, required: true },
  },
  template: `<div>Square surface: {{ width * width }}</div>`,
};

const Snow = {
  props: {
    color: { type: String, default: 'white' },
    chance: { type: Number, default: () => Math.random() },
  },
  template: `<div>Snow color: {{ color }}, chance: {{ chance }}</div>`,
};

const User = {
  props: {
    email: { type: String, validator: value => value.includes('@') },
  },
  template: `<div>User email: {{ email }}</div>`,
};

const Root = {
  components: {
    Block,
    Square,
    Snow,
    User,
  },
};

export default Root;
</script>
