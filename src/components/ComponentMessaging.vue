<template>
  <div>
    <child-emit name="A" @parent="parentMethod($event)"></child-emit>
    <child-callback name="B" :on-click="parentMethod"></child-callback>
  </div>
</template>

<script>
const ChildEmit = {
  props: {
    name: { type: String },
  },
  template: `
    <div>
      <h2>Child {{ name }}</h2>
      <button @click="$emit('parent', name)">Emit</button>
    </div>
  `,
};

const ChildCallback = {
  props: {
    name: { type: String },
    onClick: { type: Function },
  },
  template: `
    <div>
      <h2>Child {{ name }}</h2>
      <button @click="onClick(name)">Callback</button>
    </div>
  `,
};

const Parent = {
  components: {
    ChildEmit,
    ChildCallback,
  },
  methods: {
    parentMethod(childName) {
      console.log('parent called by', childName);
    },
  },
};

export default Parent;
</script>
