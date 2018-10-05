<template>
  <div>
    <h2>Inline class binding</h2>
    <div class="centered" :class="{ active: isActive, 'text-danger': hasError }">
      This is a message
    </div>

    <h2>Class binding via data</h2>
    <div :class="classObject">
      Another message
    </div>

    <h2>Computed class binding</h2>
    <div :class="computedClassObject">
      A new message
    </div>

    <h2>Array syntax</h2>
    <div :class="[activeClass, errorClass]">
      You have a message
    </div>

    <h2>Component classes</h2>
    <my-component class="centered"></my-component>

  </div>
</template>

<style>
.centered {
  text-align: center;
}
.active {
  font-weight: bold;
}
.text-danger {
  color: red;
}
</style>

<script>
const MyComponent = {
  template: '<p class="active">Hi</p>',
};

export default {
  components: {
    MyComponent,
  },
  data: () => ({
    isActive: false,
    hasError: true,
    classObject: {
      centered: true,
      active: true,
    },
    error: {
      type: 'fatal',
    },
    activeClass: 'active',
    errorClass: 'text-danger',
  }),
  computed: {
    computedClassObject: function() {
      return {
        active: this.isActive,
        'text-danger': this.error && this.error.type === 'fatal',
      };
    },
  },
};
</script>
