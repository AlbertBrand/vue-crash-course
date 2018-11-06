<template>
  <div>
    <p>Message: {{ msg }}</p>

    <!-- Data bindings support JavaScript syntax -->
    <p>Message reversed: {{ msg.split('').reverse().join('') }}</p>

    <!-- v-once directive interpolates bindings once -->
    <p v-once>Message rendered once: {{ msg }}</p>

    <button @click="msg = 'Bye bye'">Update message</button>

    <!-- Output is escaped... -->
    <p>Using mustache syntax: {{ rawHtml }}</p>

    <!-- ...unless v-html directive is used -->
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>

    <!-- Several HTML attributes are treated special -->
    <button :disabled="true">Button</button>

    <!-- Falsy variables hide the attribute entirely -->
    <button :disabled="false">Button</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    msg: 'Hi there!',
    rawHtml: '<span style="color: red">HTML</span>',
  }),
};
</script>
