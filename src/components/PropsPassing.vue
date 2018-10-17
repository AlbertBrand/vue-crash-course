<template>
  <div>
    <h2>Casing</h2>
    <blog-post post-title="Title of post"></blog-post>

    <h2>Pass different types</h2>
    <question :answer="42" :show-me="true" :list="[1, 2, 3]" :object="{ a: 'b' }"></question>

    <h2>Pass object as properties</h2>
    <question v-bind="{ answer: 42, showMe: true, list: [1, 2, 3], object: { a: 'b' } }"></question>

    <h2>Use props as initial value</h2>
    <counter :initial="3"></counter>

  </div>
</template>

<script>
const BlogPost = {
  props: {
    postTitle: { type: String },
  },
  template: `
    <div>
      <strong>{{ postTitle }}</strong>
      <p>Lorem ipsum</p>
    </div>`,
};

const Question = {
  props: {
    answer: { type: Number },
    showMe: { type: Boolean },
    list: { type: Array },
    object: { type: Object },
  },
  template: `<span>{{ answer }}</span>`,
};

const Counter = {
  props: {
    initial: { type: Number },
  },
  data() {
    return {
      count: this.initial,
    };
  },
  methods: {
    increase() {
      this.count++;
    },
  },
  template: `<div>{{ count }} <button @click="increase()">Increase</button></div>`,
};

const Root = {
  components: {
    BlogPost,
    Question,
    Counter,
  },
};

export default Root;
</script>
