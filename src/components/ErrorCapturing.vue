<template>
  <div>
    <error-boundary>
      <error-thrower></error-thrower>
    </error-boundary>

    <error-boundary>
      <error-thrower></error-thrower>
    </error-boundary>

    <error-thrower></error-thrower>
  </div>
</template>

<script>
const ErrorBoundary = {
  data: () => ({
    errorMessage: undefined,
  }),
  errorCaptured: function(error, cmp, info) {
    console.log('error captured in', info);
    this.errorMessage = error.toString();
    return false;
  },
  template: `
    <div>
        <div v-if="errorMessage">Something bad happened: "{{ errorMessage }}"</div>
        <slot v-else></slot>
    </div>`,
};

const ErrorThrower = {
  data: () => ({
    obj: {},
  }),
  methods: {
    boom: function() {
      this.obj = undefined;
    },
  },
  template: `
    <div>
        {{ obj.prop }}
        <button @click="boom">Throw error</button>
    </div>`,
};

const Root = {
  components: {
    ErrorBoundary,
    ErrorThrower,
  },
};

export default Root;
</script>
