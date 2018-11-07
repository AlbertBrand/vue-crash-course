<template>
  <div>
    <h2>DOM event</h2>
    <button @click="tagName">What's my tag?</button>

    <h2>DOM event modifiers</h2>

    <h2>.prevent</h2>

    <!-- .prevent stops the default browser behavior -->
    <a @click.prevent="say('prevent navigation')" href="https://xebia.com">Navigate</a>

    <h2>.capture</h2>

    <!-- .capture changes the order of propagation: parent first, then child -->
    <div @click.capture="say('outer capture')">Outside <span @click="say('inner')">inside</span></div>

    <h2>.self</h2>

    <!-- .self stops the node from listening to propagated events -->
    <div @click.self="say('outer self')">Outside <span @click="say('inner')">inside</span></div>

    <h2>.stop</h2>

    <!-- .stop stops the propagation of the triggered event -->
    <div @click="say('outer')">Outside <span @click.stop="say('inner stop')">inside</span></div>

    <h2>.once</h2>

    <!-- .once stops the node from listening after a single event -->
    <div @click.once="say('once')">Just once</div>

    <h2>Key modifiers</h2>

    <!-- Key events can be restricted to a specific key -->
    <input @keyup.enter="say('pressed enter')" />

    <h2>Mouse modifiers</h2>

    <!-- Mouse events can be restricted to a specific button -->
    <div @mousedown.right="say('pressed right button')">Right click here</div>

  </div>
</template>

<script>
export default {
  methods: {
    tagName(event) {
      // DOM event is passed as first argument.
      console.log(event.target.tagName);
    },
    say(text) {
      console.log(text);
    },
  },
};
</script>
