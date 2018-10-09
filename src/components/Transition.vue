<template>
  <div>
    <button @click="show = !show">Animate toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>

    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
    <button @click="show2 = !show2">Animate toggle</button>
    <transition name="custom-classes-transition" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
      <p v-if="show2">hello</p>
    </transition>

    <button @click="show3 = !show3">Component toggle</button>
    <transition name="fade">
      <comp-a v-if="show3" class="abs"></comp-a>
      <comp-b v-else class="abs"></comp-b>
    </transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.abs {
  position: absolute;
}
</style>

<script>
const CompA = {
  template: `<p>Component A</p>`,
};
const CompB = {
  template: `<p>Component B</p>`,
};

export default {
  components: {
    CompA,
    CompB,
  },
  data: () => ({
    show: true,
    show2: true,
    show3: true,
  }),
};
</script>
