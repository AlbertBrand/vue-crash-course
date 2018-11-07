<template>
  <div>
    <h2>String syntax</h2>

    <!-- String syntax: formulate class string, is combined with existing attribute -->
    <div class="centered" :class="hasError ? 'text-danger' : ''">
      This is a message
    </div>

    <h2>Object syntax</h2>

    <!-- Object syntax: names of properties with a truthy value are added as classes -->
    <div class="centered" :class="{ active: isActive, 'text-danger': hasError }">
      This is a message
    </div>

    <h2>Array syntax</h2>

    <!-- Array syntax: list of classes is added -->
    <div class="centered" :class="['active', 'text-danger']">
      You have a message
    </div>

    <h2>Class binding via data</h2>

    <!-- Class string/object can also come from data... -->
    <div :class="classObject">
      Another message
    </div>

    <h2>Computed class binding</h2>

    <!-- ...or from computed property -->
    <div :class="computedClassObject">
      A new message
    </div>

    <h2>Component classes</h2>
    <!-- Classes on components are special, by default combined on root node -->
    <my-component class="centered"></my-component>

  </div>
</template>

<style scoped>
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
  }),
  computed: {
    // Computed property is an efficient way to decouple class logic from template.
    computedClassObject() {
      return {
        active: this.isActive,
        'text-danger': this.error && this.error.type === 'fatal',
      };
    },
  },
};
</script>
