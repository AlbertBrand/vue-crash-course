<template>
  <div>
    <h2>Asynchronous component loading</h2>
    <async-component></async-component>
  </div>
</template>

<script>
const LoadingComponent = {
  template: `<div>We're waiting for the component to load</div>`,
};

const ErrorComponent = {
  template: `<div>Something went wrong, please try again.</div>`,
};

const ActualComponent = {
  template: `<div>Loaded async, huzzay!</div>`,
};

// use import('./ActualComponent.vue') in a real project of course
const componentPromise = new Promise(resolve => {
  setTimeout(() => resolve(ActualComponent), 2000);
});

const AsyncComponent = () => ({
  component: componentPromise,
  loading: LoadingComponent,
  error: ErrorComponent,
  delay: 200,
  timeout: 3000,
});

export default {
  components: {
    AsyncComponent,
  },
};
</script>
