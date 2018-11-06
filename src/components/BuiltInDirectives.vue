<template>
  <div>
    <h2>Built-in Directives</h2>

    <!-- v-if mounts/unmounts the node when truthy/falsy -->
    <p v-if="shown">Now you see me</p>

    <!-- v-show only shows/hides the node using styles -->
    <p v-show="shown">Still seeing me</p>

    <h2>Directive shorthands</h2>

    <!-- :x is equal to v-bind:x -->
    <p>
      <a :href="url">some url</a>
      is shorter than
      <a v-bind:href="url">some url</a>
    </p>

    <!-- @y is equal to v-on:y -->
    <p>
      <button @click="onClick">click me</button>
      is shorter than
      <button v-on:click="onClick">click me</button>
    </p>

    <h2>Directive 'argument'</h2>

    <!-- The value of an attribute is the directive argument -->
    <a :href="url">some url</a>

    <h2>Directive modifiers</h2>

    <!-- Directives can have extra boolean arguments, called modifiers -->
    <label>Checkbox:
      <input type="checkbox" @click.prevent="onCheck" />
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
    onClick() {
      console.log('happy');
    },
    onCheck() {
      console.log('clicked but not checked');
    },
  },
};
</script>
