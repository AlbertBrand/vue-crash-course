<template>
  <div>
    <todo-list></todo-list>
    <todo-clear></todo-clear>
    <todo-count></todo-count>
    <todo-add></todo-add>
  </div>
</template>

<script>
// in a real project, add store during config

/* eslint-disable no-undef */
const store = new Vuex.Store({
  strict: true,
  modules: {
    todos: {
      namespaced: true,
      state: {
        list: [
          { id: 1, item: 'Bread' },
          { id: 2, item: 'Butter' },
          { id: 3, item: 'Milk' },
        ],
        nextId: 4,
      },
      mutations: {
        add(state, item) {
          state.list.push({
            id: state.nextId,
            item,
          });
          state.nextId++;
        },
        clear(state) {
          state.list = [];
        },
      },
      actions: {
        addDelayed({ commit }, item) {
          setTimeout(() => {
            commit('add', item + ' (delay)');
          }, 2000);
        },
      },
      getters: {
        count(state) {
          return state.list.length;
        },
      },
    },
  },
});

// import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';
const { mapState, mapMutations, mapGetters, mapActions } = Vuex;

const TodoList = {
  computed: {
    ...mapState('todos', ['list']),
  },
  template: `<div>
    <ul>
      <li v-for="todo in list" :key="todo.id">{{ todo.item }}</li>
    </ul>
  </div>`,
};

const TodoClear = {
  methods: {
    ...mapMutations('todos', ['clear']),
  },
  template: `<button @click="clear">Clear list</button>`,
};

const TodoCount = {
  computed: {
    ...mapGetters('todos', ['count']),
  },
  template: `<div>Total number: {{ count }}</div>`,
};

const TodoAdd = {
  data: () => ({
    item: '',
  }),
  methods: {
    ...mapMutations('todos', ['add']),
    ...mapActions('todos', ['addDelayed']),
    addAndClear() {
      this.add(this.item);
      this.item = '';
    },
    addDelayedAndClear() {
      this.addDelayed(this.item);
      this.item = '';
    },
  },
  template: `<div>
    <input v-model="item"/>
    <button @click="addAndClear">Add</button>
    <button @click="addDelayedAndClear">Add delayed</button>
  </div>`,
};

export default {
  store,
  components: {
    TodoList,
    TodoClear,
    TodoCount,
    TodoAdd,
  },
};
</script>
