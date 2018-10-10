<template>
  <div>
    <div v-for="user in users" :key="user.id">
      {{ user.name }} <button @click="deleteUser(user)">X</button>
    </div>
    <button @click="createUser">Create new user</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    users: [],
  }),
  created() {
    this.userResource = this.$resource(
      'https://jsonplaceholder.typicode.com/users{/id}'
    );
    this.getUsers();
  },
  methods: {
    async getUsers() {
      const response = await this.userResource.get();
      this.users = response.body;
    },
    async createUser() {
      const response = await this.userResource.save({ name: 'abc' });
      this.users.push(response.body);
    },
    async deleteUser({ id }) {
      await this.userResource.delete({ id });
      this.users = this.users.filter(user => user.id !== id);
    },
  },
};
</script>
