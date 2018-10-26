<template>
  <div>
    <!-- Attribute values are bound with the :attribute-name="expression" syntax. -->
    <span :title="message">
      Hover cursor over this text to see my dynamically bound title
    </span>
  </div>
</template>

<script>
export default {
  // The data method is executed once during creation.
  data: () => ({
    message: 'You loaded this page on ' + new Date().toLocaleString(),
  }),
};
</script>
