<template>
  <div>
    <p>{{ message }}</p>
    <label>Edit message:
      <!-- 
        The 'v-model' directive keeps form fields and component state in sync. 
        If the input changes, the component state is updated and vice versa.
        -->
      <input v-model="message" />
    </label>
    <br />
    <label>Edit same message:
      <input v-model="message" />
    </label>
  </div>
</template>

<script>
export default {
  // For two-way binding, create reactive state via the data method.
  data: () => ({
    message: 'Hello fellow!',
  }),
};
</script>
