<template>
  <div>
    <h2>Text input</h2>
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>

    <h2>Multiline text</h2>
    <textarea v-model="message2" placeholder="add multiple lines"></textarea>
    <pre>{{ message2 }}</pre>

    <h2>Checkboxes</h2>
    <p v-for="option in options" :key="'c' + option.value">
      <input type="checkbox" :id="'c' + option.value" :value="option.value" v-model="checked" />
      <label :for="'c' + option.value">{{ option.text }}</label>
    </p>
    <p>Checked: {{ checked }}</p>

    <h2>Radio choice</h2>
    <p v-for="option in options" :key="'r' + option.value">
      <input type="radio" :id="'r' + option.value" :value="option.value" v-model="picked" />
      <label :for="'r' + option.value">{{ option.text }}</label>
    </p>
    <p>Picked: {{ picked }}</p>

    <h2>Select option</h2>
    <select v-model="selected">
      <option v-for="option in options" :key="'s' + option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <p>Selected: {{ selected }}</p>

    <select v-model="multiSelected" multiple>
      <option v-for="option in options" :key="'m' + option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <p>Multiple selected: {{ multiSelected }}</p>

    <h2>v-model Modifiers</h2>

    <h2>.number</h2>
    <input v-model.number="age" type="number" />
    <p>{{ age }} typeof {{ typeof age }}</p>

    <h2>.trim</h2>
    <input v-model.trim="trimmed" />
    <p>"{{ trimmed }}"</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    message: '',
    message2: '',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' },
    ],
    checked: [],
    picked: undefined,
    selected: undefined,
    multiSelected: [],
    age: 18,
    trimmed: '',
  }),
};
</script>
