<template>
  <div>
    <button @click="shuffle">Shuffle</button>
    <button @click="add">Add</button>
    <button @click="remove">Remove</button>
    <transition-group name="list-complete" tag="p">
      <span v-for="item in items" :key="item" class="list-complete-item">
        {{ item }}
      </span>
    </transition-group>
  </div>
</template>

<style>
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>

<script>
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default {
  data: () => ({
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    nextNum: 10,
  }),
  methods: {
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
      this.$forceUpdate(); // only needed in sandbox
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
      this.$forceUpdate(); // only needed in sandbox
    },
    shuffle: function() {
      this.items = shuffle(this.items);
      this.$forceUpdate(); // only needed in sandbox
    },
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    },
  },
};
</script>
