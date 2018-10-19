<template>
  <span :title="message">
    Hover cursor over this text to see my dynamically bound title
  </span>
</template>

<script>
export default {
  data: () => ({
    message: 'You loaded this page on ' + new Date().toLocaleString(),
  }),
};
</script>
