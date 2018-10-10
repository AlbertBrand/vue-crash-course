<template>
  <div>
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    users: [],
    error: '',
  }),
  async created() {
    try {
      const response = await this.$http.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      this.users = response.body;
    } catch (error) {
      this.error = 'Error status ' + error.status;
    }
  },
};
</script>
