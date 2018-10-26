<template>
  <div>
    <h2>Click handler</h2>
    <p>{{ message }}</p>
    <!-- To handle native DOM events, use the @event-name="method" syntax. -->
    <button @click="reverseMessage">Reverse Message</button>

    <h2>Other native events</h2>
    <!-- All native events are supported -->
    <p>Coordinates: {{ x }}, {{ y }}</p>
    <div @mousemove="updateCoordinates">
      Hover over this text.
    </div>

    <h2>Parameters</h2>
    <!-- You can explictly pass the event using the $event variable. -->
    <button @click="logEventType('something happened:', $event)">Log event</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    message: 'Can you reverse me?',
    x: 0,
    y: 0,
  }),
  methods: {
    reverseMessage() {
      // In component methods, state is accessed via 'this'.
      // The update of the state automatically triggers a re-render.
      this.message = this.message
        .split('')
        .reverse()
        .join('');
    },
    updateCoordinates(event) {
      // The native DOM event is passed as first argument.
      [this.x, this.y] = [event.clientX, event.clientY];
    },
    logEventType(msg, event) {
      console.log(msg, event.type);
    },
  },
};
</script>
