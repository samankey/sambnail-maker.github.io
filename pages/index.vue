<template>
  <div class="box">
    <div class="wrap">
      <div class="canvas">
        <span
          v-for="(tag, index) in tagList"
          :key="index"
          class="text fill Headline"
        >
          {{ tag }}
        </span>
      </div>
    </div>
    <input v-model="tagText" type="text" />
    <button @click="addTag">추가</button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      tagText: '',
      tagList: [],
    }
  },

  methods: {
    addTag() {
      if (!this.tagText) {
        alert('없어')
      } else {
        this.tagList.push(this.tagText)
        this.tagText = ''
        this.calcTextLengthByByte()
      }
    },

    calcTextLengthByByte() {
      const joinedText = this.tagList.join('')
      let b
      let c
      let i
      for (b = i = 0; (c = joinedText.charCodeAt(i++)); b += c >> 7 ? 2 : 1);
      console.log(b)
      return b
    },
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
