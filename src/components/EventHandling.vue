<template>
  <div>
    <h2>Browser event</h2>
    <button @click="tagName">What's my tag?</button>

    <h2>Inline methods</h2>
    <button @click="say('what')">Say what</button>

    <h2>Event modifiers</h2>

    <div @click="say('outer')">Outside <span @click="say('inner')">inside</span></div>

    <h2>.capture</h2>
    <div @click.capture="say('outer capture')">Outside <span @click="say('inner')">inside</span></div>

    <h2>.self</h2>
    <div @click.self="say('outer self')">Outside <span @click="say('inner')">inside</span></div>

    <h2>.stop</h2>
    <div @click="say('outer')">Outside <span @click.stop="say('inner stop')">inside</span></div>

    <h2>.once</h2>
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
