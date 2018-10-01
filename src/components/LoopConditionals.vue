<template>
  <ol>
    <li v-for="todo in todos" :key="todo.text">
      {{ todo.text }}
    </li>
  </ol>
</template>

<script>
export default {
  data: () => ({
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' },
    ],
  }),
};
</script>
