<template>
  <div>
    <h2>Browser event</h2>
    <button @click="tagName">What's my tag?</button>

    <h2>Inline methods</h2>
    <button @click="say('what')">Say what</button>

    <h2>Event modifiers</h2>

    <div @click="say('outer')">Outside <span @click="say('inner')">inside</span></div>

    <h3>.capture</h3>
    <div @click.capture="say('outer capture')">Outside <span @click="say('inner')">inside</span></div>

    <h3>.self</h3>
    <div @click.self="say('outer self')">Outside <span @click="say('inner')">inside</span></div>

    <h3>.stop</h3>
    <div @click="say('outer')">Outside <span @click.stop="say('inner stop')">inside</span></div>

    <h3>.once</h3>
    <div @click.once="say('once')">Just once</div>

  </div>
</template>

<script>
export default {
  methods: {
    tagName: function(event) {
      console.log(event.target.tagName);
    },
    say: function(text) {
      console.log(text);
    },
  },
};
</script>
