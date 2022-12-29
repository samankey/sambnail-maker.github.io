<template>
  <div class="main bg_White">
    <div class="mainBox">
      <header class="title Headline ft_White bg_Black bd_Gray">
        ✨ thumbnail maker ✨
      </header>
      <Nuxt class="bd_Gray" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  @include flex-item(center);
  height: 100%;

  .mainBox {
    text-align: center;

    .title {
      margin-bottom: 1.5rem;
      padding: 1rem 1.25rem;
      border-radius: 6.25rem;
      font-family: 'Mermaid1001', sans-serif;
    }
  }
}
</style>
