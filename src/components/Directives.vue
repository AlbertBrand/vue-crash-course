<template>
  <div>
    <h2>Directives</h2>
    <p v-if="shown">Now you see me</p>
    <p v-show="shown">Still seeing me</p>

    <h2>Directive shorthands</h2>
    <p>
      <a :href="url">some url</a>
      is shorter than
      <a v-bind:href="url">some url</a>
    </p>
    <p>
      <button @click="onClick">click me</button>
      is shorter than
      <button v-on:click="onClick">click me</button>
    </p>

    <h2>Directive 'argument'</h2>
    <a :href="url">some url</a>

    <h2>Directive modifiers</h2>
    <label>Checkbox:
      <input type="checkbox" @click.prevent="onCheck"/>
    </label>
  </div>
</template>

<script>
export default {
  data: () => ({
    shown: true,
    url: 'https://xebia.com',
  }),
  methods: {
    onClick: function() {
      console.log('happy');
    },
    onCheck: function() {
      console.log('clicked but not checked');
    },
  },
};
</script>
