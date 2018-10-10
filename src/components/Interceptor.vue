<template>
  <div>{{user.name}}</div>
</template>

<script>
// in a real project, add interceptors during config

/* eslint-disable no-undef */
Vue.http.interceptors.push(function(request) {
  console.log(request.method, request.url);
  return response => {
    console.log(response.ok, response.status);
    response.body.name = 'Modified Name';
  };
});

export default {
  data: () => ({
    user: {},
  }),
  async created() {
    try {
      const response = await this.$http.get(
        'https://jsonplaceholder.typicode.com/users/1'
      );
      this.user = response.body;
    } catch (error) {
      this.error = 'Error status ' + error.status;
    } finally {
      // clean up sandbox, not needed in real project
      Vue.http.interceptors.pop();
    }
  },
};
</script>
