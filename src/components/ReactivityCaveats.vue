<template>
  <div>
    <h2>Objects</h2>
    <div v-for="(value, key) in object" :key="key">
      {{ key }}: {{ value }}
    </div>
    <button @click="addProp">Add prop</button>
    <button @click="addPropReactive">Add prop (reactive)</button>
    <button @click="updateObj">Update object</button>
    <button @click="updateObjReactive">Update object (reactive)</button>

    <h2>Arrays</h2>
    <div v-for="value in array" :key="value">
      {{ value }}
    </div>
    <button @click="updateArray">Update array</button>
    <button @click="updateArrayReactive">Update array (reactive)</button>

  </div>
</template>

<script>
export default {
  data: () => ({
    object: {
      firstName: 'John',
      lastName: 'Doe',
    },
    array: ['JavaScript', 'is', 'awesome'],
    nextId: 1,
  }),
  methods: {
    addProp() {
      this.object['value' + this.nextId] = this.nextId++;
    },
    addPropReactive() {
      this.$set(this.object, 'otherValue' + this.nextId, this.nextId++);
    },
    updateObj() {
      Object.assign(this.object, { a: 1, b: 2 });
    },
    updateObjReactive() {
      this.object = Object.assign({}, this.object, { c: 1, d: 2 });
      // or:
      // this.object = { ...this.object, ...{ c: 1, d: 2 } };
    },
    updateArray() {
      this.array[0] = 'VueJS';
    },
    updateArrayReactive() {
      this.$set(this.array, 2, 'super');
    },
  },
};
</script>
