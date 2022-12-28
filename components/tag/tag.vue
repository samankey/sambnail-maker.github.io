<template>
  <span class="text Headline" :class="getTheme">
    {{ tag.text }}
  </span>
</template>

<script>
export default {
  props: {
    tag: {
      type: Object,
      default: () => {}
    },

    className: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    getTheme() {
      return this.tag.type === 'fill'
        ? this.className.fill
        : this.tag.type === 'border'
        ? this.className.border
        : this.className.ghost;
    }
  }
};
</script>

<style lang="scss" scoped>
.text {
  margin: 0.25rem;
  padding: 0.5rem 0.75rem;
  border-radius: 6.25rem;
  word-break: break-all;
}
</style>
