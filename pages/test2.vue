<template>
  <div class="box">
    <div class="canvas bd_Gray">
      <div class="textBox">
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
      totalByte: 0,
      tagText: '',
      tagList: []
    };
  },

  computed: {
    calcTextLengthByByte() {
      const emojiExp = /(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu;
      const textList = this.tagList.join('').replace(emojiExp, 'A').split('');
      const byte = textList
        .map((text) => {
          const code = text.charCodeAt(0);
          return code > 127 || (code > 64 && code < 91) ? 2 : 1;
        })
        .reduce((acc, cur) => {
          return acc + cur;
        }, 0);
      return byte;
    }
  },

  methods: {
    addTag() {
      if (!this.tagText) {
        alert('없어');
      } else if (this.calcTextLengthByByte > 46) {
        alert('이제 그만');
      } else {
        this.tagList.push(this.tagText);
        this.tagText = '';
        this.totalByte = this.calcTextLengthByByte;
      }
      const height = document.querySelector('.text')?.offsetHeight;
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  @include flex-item(center);
  padding: 1rem;

  .canvas {
    padding: 2rem;
    width: 640px;
    height: 360px;

    .textBox {
      display: flex;
      align-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;

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
