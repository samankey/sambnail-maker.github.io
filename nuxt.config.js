import dotEnv from 'dotenv';

const env = process.env.NODE_ENV;
const path =
  env === 'local'
    ? '.env.local'
    : env === 'development'
    ? '.env.development'
    : '.env';

dotEnv.config({ path });

export default {
  ssr: true,

  telemetry: false,

  target: 'server',

  css: ['~/assets/scss/global.scss'],

  styleResources: {
    scss: ['@/assets/scss/mixins.scss']
  },

  head: {
    title: 'thumbnail-maker',

    link: [{ rel: 'icon', type: 'image/png', href: '' }],

    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, minimum-scale=1.0, height=device-height, maximum-scale=1'
      },
      {
        name: 'og:image',
        content: ''
      }
    ]
  },

  build: {
    optimizeCSS: true,

    extractCSS: {
      ignoreOrder: true
    }
  },

  axios: {
    baseURL: process.env.API_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  },

  modules: ['@nuxtjs/axios'],

  plugins: [
    '@/plugins/globalFnc.js',
    '@/plugins/globalComponents.js',
    { src: '~/plugins/notifications-ssr', ssr: true },
    { src: '~/plugins/notifications-client', ssr: false }
  ],

  buildModules: ['@nuxtjs/style-resources']
};
