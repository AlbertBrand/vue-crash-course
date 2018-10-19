<template>
  <div>
    <todo-list :list="list"></todo-list>
    <todo-clear @clear="clear"></todo-clear>
    <todo-count :list="list"></todo-count>
    <todo-add @add="add" @add-delayed="addDelayed"></todo-add>
  </div>
</template>

<script>
const TodoList = {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  template: `<div>
    <ul>
      <li v-for="todo in list" :key="todo.id">{{ todo.item }}</li>
    </ul>
  </div>`,
};

const TodoClear = {
  methods: {
    clear() {
      this.$emit('clear');
    },
  },
  template: `<button @click="clear">Clear list</button>`,
};

const TodoCount = {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  computed: {
    count() {
      return this.list.length;
    },
  },
  template: `<div>Total number: {{ count }}</div>`,
};

const TodoAdd = {
  data: () => ({
    item: '',
  }),
  methods: {
    addAndClear() {
      this.$emit('add', this.item);
      this.item = '';
    },
    addDelayedAndClear() {
      this.$emit('add-delayed', this.item);
      this.item = '';
    },
  },
  template: `<div>
    <input v-model="item"/>
    <button @click="addAndClear">Add</button>
    <button @click="addDelayedAndClear">Add delayed</button>
  </div>`,
};

const Root = {
  components: {
    TodoList,
    TodoClear,
    TodoCount,
    TodoAdd,
  },
  data: () => ({
    list: [
      { id: 1, item: 'Bread' },
      { id: 2, item: 'Butter' },
      { id: 3, item: 'Milk' },
    ],
    nextId: 4,
  }),
  methods: {
    clear() {
      this.list = [];
    },
    add(item) {
      this.list.push({
        id: this.nextId,
        item,
      });
      this.nextId++;
    },
    addDelayed(item) {
      setTimeout(() => {
        this.add(item + ' (delay)');
      }, 2000);
    },
  },
};

export default Root;
</script>
