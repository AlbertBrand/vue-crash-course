<template>
  <div>
    <form @submit.prevent="addNewTodo">
      <label>Add a todo
        <input v-model="newTodoText" placeholder="E.g. Feed the cat" />
        <button type="submit">Add</button>
      </label>
    </form>
    <ul>
      <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" :on-remove="removeTodo"></todo-item>
    </ul>
  </div>
</template>

<script>
const TodoItem = {
  template: `
    <li>
      {{ todo.title }}
      <button @click="onRemove(todo)">Remove</button>
    </li>
  `,
  props: {
    todo: { type: Object },
    onRemove: { type: Function },
  },
};

const TodoList = {
  components: {
    TodoItem,
  },
  data: {
    newTodoText: '',
    todos: [
      { id: 1, title: 'Do the dishes' },
      { id: 2, title: 'Take out the trash' },
      { id: 3, title: 'Mow the lawn' },
    ],
    newTodoId: 4,
  },
  methods: {
    addNewTodo() {
      if (!this.newTodoText.length) return;
      this.todos.push({
        id: this.newTodoId++,
        title: this.newTodoText,
      });
      this.newTodoText = '';
    },
    removeTodo(item) {
      this.todos = this.todos.filter(listItem => listItem !== item);
    },
  },
};

export default TodoList;
</script>
