<template>
  <div class="box">
    <div class="canvas bd_Btm_Gray" :class="getTheme.bg">
      <div v-if="tagList.length > 0" class="textBox">
        <Tag
          v-for="(tag, index) in tagList"
          :key="index"
          :tag="tag"
          :class-name="getTheme"
          @deleteTag="deleteTag"
        />
      </div>
      <div class="sign" :class="getTheme.ghost">
        {{ signText }}
      </div>
    </div>
    <button class="save bd_Btm_Gray">save</button>
    <div class="tagInputBox bd_Btm_Gray">
      <input
        v-model="tagText"
        class="tagInput"
        type="text"
        placeholder="put your tag on here!"
        @keypress.enter="addTag"
      />
      <div class="typeButtonBox bd_Right_Gray bd_Left_Gray">
        <button
          v-for="(type, index) in types"
          :key="index + type"
          class="typeButton"
          :class="tagType === type ? 'bg_Black ft_White' : ''"
          @click="setType(type)"
        >
          {{ type }}
        </button>
      </div>
      <button class="addButton bg_Black ft_White" @click="addTag">add</button>
    </div>
    <input
      v-model="signText"
      class="signInput"
      type="text"
      placeholder="put your tag on here!"
    />
    <div class="themeBox bd_Top_Gray">
      <button
        v-for="(color, index) in themeList"
        :key="index + color"
        class="themeItem"
        :class="`${color.bg}`"
        @click="setTheme(color.title)"
      >
        <div class="themeFill" :class="`${color.fill}`">
          <div class="themeText Title1" :class="`${color.fill_ft}`">a</div>
        </div>
      </button>
    </div>
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
      signText: '',
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
      }
    },

    deleteTag(tag) {
      const index = this.tagList
        .map((item) => {
          return item.text === tag;
        })
        .indexOf(true);
      this.tagList.splice(index, 1);
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

  .title {
    padding: 0.25rem 0.5rem;
    text-align: right;
  }
  .canvas {
    position: relative;
    padding: 1.5rem;
    width: 640px;
    height: 360px;

    .textBox {
      display: flex;
      align-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
    }

    .sign {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
    }
  }

  .save {
    width: 100%;
    padding: 0.25rem 0.5rem;
    text-align: center;
  }

  .tagInputBox {
    @include flex-item;

    .tagInput {
      flex: 1;
      text-align: center;
    }

    .typeButtonBox {
      @include flex-item(space-between);
      flex: 1;
      .typeButton {
        flex: 1;
        padding: 0.25rem 0.5rem;
      }
    }

    .addButton {
      padding: 0.25rem 0.5rem;
    }
  }

  .signInput {
    width: 100%;
    padding: 0.25rem 0.5rem;
    text-align: center;
  }

  .themeBox {
    @include flex-item;
    .themeItem {
      flex: 1;
      padding: 0.5rem;

      .themeFill {
        padding: 0.5rem;
        border-radius: 6.25rem;
      }
    }
  }
}
</style>
