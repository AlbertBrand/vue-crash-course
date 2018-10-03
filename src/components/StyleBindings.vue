<template>
  <div>
    <h2>Inline style binding</h2>
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">
      This is a styled message
    </div>

    <h2>Style binding via data</h2>
    <div :style="styleObject">
      Another message
    </div>

    <h2>Combining styles via array</h2>
    <div :style="[styleObject, styleOverride]">
      Hello!
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    activeColor: 'rgb(100, 181, 135)',
    fontSize: 12,
    styleObject: {
      color: 'red',
      fontSize: '18px',
    },
    styleOverride: {
      color: 'blue',
    },
  }),
};
</script>
