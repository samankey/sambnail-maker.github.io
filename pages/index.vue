<template>
  <div class="box">
    <div class="title Title1 bd_Btm_Gray">thumbnail maker</div>
    <div class="canvas bd_Gray" :class="getTheme.bg">
      <div v-if="tagList.length > 0" class="textBox">
        <Tag
          v-for="(tag, index) in tagList"
          :key="index"
          :tag="tag"
          :class-name="getTheme"
        />
      </div>
    </div>
    <div class="typeButton">
      <button
        v-for="(type, index) in types"
        :key="index + type"
        @click="setType(type)"
      >
        {{ type }}
      </button>
    </div>
    <div class="typeButton">
      <button
        v-for="(color, index) in themeList"
        :key="index + color"
        @click="setTheme(color.title)"
      >
        {{ color.title }}
      </button>
    </div>
    <input v-model="tagText" type="text" @keypress.enter="addTag" />
    <button @click="addTag">추가</button>
  </div>
</template>

<script>
import themeList from '@/assets/data/theme.json';
import Tag from '@/components/tag/tag';

export default {
  layout: 'main',
  components: {
    Tag
  },

  data() {
    return {
      height: 0,
      tagText: '',
      tagType: 'fill',
      tagList: [],
      types: ['fill', 'border', 'ghost'],
      themeTitle: 'w_b',
      themeList: themeList.color
    };
  },

  computed: {
    getTheme() {
      const filteredTheme = this.themeList.filter(
        (item) => item.title === this.themeTitle
      );
      const theme = filteredTheme[0];
      return {
        bg: `${theme.bg}`,
        fill: `${theme.fill} ${theme.bd} ${theme.fill_ft}`,
        border: `${theme.bd} ${theme.bd_ft}`,
        ghost: `${theme.bd_ft} bd_transparent`
      };
    }
  },

  updated() {
    this.setHeight();
  },

  methods: {
    setType(type) {
      this.tagType = type;
    },

    setTheme(themeTitle) {
      this.themeTitle = themeTitle;
    },

    addTag() {
      const text = { text: this.tagText, type: this.tagType };
      if (!this.tagText) {
        alert('없어');
      } else {
        this.tagList.push(text);
        this.tagText = '';
        this.tagType = 'fill';
      }
    },

    setHeight() {
      const height = document.querySelector('.textBox')?.offsetHeight;
      this.height = height;
      if (this.height > 256) {
        this.tagList.pop();
        alert('끝');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  text-align: center;
  padding: 1rem;

  .title {
    margin-bottom: 3rem;
    padding-bottom: 1rem;
  }
  .canvas {
    padding: 2rem;
    width: 640px;
    height: 360px;

    .textBox {
      display: flex;
      align-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
    }
  }
}
</style>
