<template>
  <div class="wrap">
    <div @click="getPhoto">안녕</div>
    <div class="par">
      <img :src="imageSrc" alt="imageSrc" />
      <div class="filter" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'IndexPage',

  data() {
    return {
      imageSrc: '',
    }
  },

  methods: {
    getPhoto() {
      try {
        axios
          .get('https://api.unsplash.com/photos/random', {
            params: {
              client_id: 'bVPTgly_pHzoZu1lRrCUMw9imwIo0RTspGo3Vg_EwV0',
              topics: 't/3d-renders',
            },
          })
          .then((res) => {
            this.imageSrc = res.data.urls.regular
          })
      } catch (err) {
        alert(err)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  @include flex-item(center);
  .par {
    position: relative;
    img {
      width: 640px;
      height: 360px;
      object-fit: cover;
    }
    .filter {
      position: absolute;
      top: 0;
      left: 0;
      width: 640px;
      height: 360px;
      backdrop-filter: blur(10px);
    }
  }
}
</style>
