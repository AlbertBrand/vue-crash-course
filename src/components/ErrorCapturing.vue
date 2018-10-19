<template>
  <div>
    <h2>With boundary:</h2>
    <error-boundary>
      <error-thrower></error-thrower>
    </error-boundary>

    <h2>Another boundary:</h2>
    <error-boundary>
      <error-thrower></error-thrower>
    </error-boundary>

    <h2>Without boundary:</h2>
    <error-thrower></error-thrower>
  </div>
</template>

<script>
const ErrorBoundary = {
  data: () => ({
    hasError: false,
  }),
  errorCaptured(error, cmp, info) {
    console.log('error captured in', info, '->', error.toString());
    this.hasError = true;
    return false;
  },
  template: `<div>
    <div v-if="hasError">Something bad happened, but boundary caught it.</div>
    <slot v-else></slot>
  </div>`,
};

const ErrorThrower = {
  data: () => ({
    obj: {},
  }),
  methods: {
    boom() {
      this.obj = undefined;
    },
  },
  template: `<div>
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
