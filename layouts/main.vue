<template>
  <div class="main bg_White">
    <div class="mainBox">
      <!-- <header class="title Headline ft_White bg_Black bd_Gray">
        ✨ thumbnail maker ✨
      </header> -->
      <!-- <header class="title Headline">thumbnail-maker</header> -->
      <header class="title">THUMBNAILㅡ<br />MAKER</header>
      <Nuxt class="bd_Gray" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  @include flex-item(center);
  height: 100%;

  .mainBox {
    .title {
      padding-bottom: 1.25rem;
      border-radius: 6.25rem;
      font-size: 3.75rem;
      font-weight: 700;
      /* font-family: 'Mermaid1001', sans-serif; */
    }
  }
}
</style>
