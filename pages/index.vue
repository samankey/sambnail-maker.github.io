<template>
  <div>
    <div @click="getPhoto">안녕</div>
    <img
      :src="imageSrc"
      alt="image"
      :style="`background-image: url(${imageSrc})`"
    />
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
              count: 1,
            },
          })
          .then((res) => {
            this.imageSrc = res.data[0].urls.regular
          })
      } catch (err) {
        alert(err)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
img {
  width: 1280px;
  height: 720px;
}
</style>
