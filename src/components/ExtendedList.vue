<template>
  <div>
    <h2>Render an array</h2>
    <div v-for="(todo, idx) in todos" :key="todo">
      {{ message }}: {{ ++idx }}. {{ todo }}
    </div>

    <h2>Render object properties</h2>
    <div v-for="(value, key) in object" :key="key">
      {{ key }}: {{ value }}
    </div>

    <h2>Reactivity</h2>
    <input type="text" v-model="newTodo" />
    <button @click="addTodo">Add todo</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    message: 'Do this thing',
    todos: ['Learn JavaScript', 'Learn Vue', 'Build something awesome'],
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
    },
    newTodo: '',
  }),
  methods: {
    addTodo() {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    },
  },
};
</script>
