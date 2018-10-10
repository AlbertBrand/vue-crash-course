<template>
  <div>
    <h2>Default slot</h2>
    <alert-box>
      Something bad happened.
      <reset-button></reset-button>
    </alert-box>

    <h2>Named slots</h2>
    <layout>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <p slot="header">
        Here might be a page title
      </p>

      <p slot="footer">
        Here's some contact info
        <reset-button></reset-button>
      </p>
    </layout>
  </div>
</template>

<script>
const AlertBox = {
  template: `
    <div class="alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `,
};

const ResetButton = {
  template: `<button>Reset</button>`,
};

const Layout = {
  template: `
    <div>
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
        <slot name="extra">
          <strong>Default extra text</strong>
        </slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  `,
};

const Parent = {
  components: {
    AlertBox,
    ResetButton,
    Layout,
  },
};

export default Parent;
</script>
