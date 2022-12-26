<template>
  <div class="box">
    <div class="wrap">
      <div class="canvas" :style="`background-color: ${color}`">
        <p class="text fill Headline">안녕안녕</p>
        <p class="text line Headline">안녕안녕</p>
        <p class="text fill Headline">🦄</p>
        <p class="text line Headline">apple</p>
        <p class="text fill Headline">🍟</p>
        <p class="text fill Headline">⚽️</p>
        <p class="text fill Headline">sorry</p>
        <p class="text line Headline">my name is</p>
        <p class="text fill Headline">🦄</p>
        <p class="text line Headline">안녕안녕</p>
        <p class="text fill Headline">🍟</p>
        <p class="text fill Headline">⚽️</p>
      </div>
      <input v-model="color" type="color" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      color: '',
    }
  },

  methods: {
    getPhoto() {},
  },
}
</script>

<style lang="scss" scoped>
.box {
  @include flex-item(center);
  padding: 1rem;
  .wrap {
    .canvas {
      display: flex;
      align-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      padding: 2rem;
      width: 640px;
      height: 360px;
      filter: drop-shadow(0 9px 46px rgba(0, 0, 0, 0.01))
        drop-shadow(0 11px 15px rgba(0, 0, 0, 0.04))
        drop-shadow(0 24px 38px rgba(0, 0, 0, 0.01))
        drop-shadow(0 -3px 5px rgba(95, 70, 70, 0.05));

      .text {
        margin: 0.25rem;
        padding: 0.5rem 0.75rem;
        border-radius: 6.25rem;
        word-break: break-all;
      }
      .fill {
        background-color: aquamarine;
        border: 3px solid aquamarine;
      }

      .line {
        border: 3px solid aquamarine;
      }
    }
  }
}
</style>
