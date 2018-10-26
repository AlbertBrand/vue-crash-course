<template>
  <ol>
    <!-- 
      The 'v-for' directive renders an element for each list item.
      The value of the (optional) 'key' attribute is used for smart re-rendering.
      -->
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
    </li>
  </ol>
</template>

<script>
export default {
  data: () => ({
    todos: [
      { id: 1, text: 'Learn JavaScript' },
      { id: 2, text: 'Learn Vue' },
      { id: 3, text: 'Build something awesome' },
    ],
  }),
};
</script>
