<template>
  <div>
    <h3>Casing</h3>
    <blog-post post-title="Title of post"></blog-post>

    <h3>Pass different types</h3>
    <question :answer="42" :show-me="true" :list="[1, 2, 3]" :object="{ a: 'b' }"></question>

    <h3>Pass object as properties</h3>
    <question v-bind="{ answer: 42, showMe: true, list: [1, 2, 3], object: { a: 'b' } }"></question>

    <h3>Use props as initial value</h3>
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
  data: function() {
    return {
      count: this.initial,
    };
  },
  methods: {
    increase: function() {
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
