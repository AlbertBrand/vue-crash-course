<template>
  <div>
    <h1 v-if="shown">Yes</h1>
    <h1 v-else>No</h1>

    <template v-if="shown">
      <p>This will be shown both.</p>
      <p>And this one too, without the template tag.</p>
    </template>

    <div v-if="type === 'A'">
      Apples
    </div>
    <div v-else-if="type === 'B'">
      Bananas
    </div>
    <div v-else-if="type === 'C'">
      Cherries
    </div>
    <div v-else>
      Something else
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    shown: true,
    type: 'B',
  }),
};
</script>
