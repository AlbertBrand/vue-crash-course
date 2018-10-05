<template>
  <ol>
    <todo-item v-for="item in groceryList" :todo="item" :key="item.id"></todo-item>
  </ol>
</template>

<script>
const TodoItem = {
  props: {
    todo: { type: Object },
  },
  template: '<li>{{ todo.text }}</li>',
};

const TodoList = {
  components: {
    TodoItem,
  },
  data: () => ({
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' },
    ],
  }),
};

export default TodoList;
</script>
