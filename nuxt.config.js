const pkg = require('./package')

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab|Montserrat:300',
      },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'red' },

  /*
  ** Global CSS
  */
  css: ['~/static/reboot.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    styleResources: {
      scss: './assets/design/index.scss',
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
      // Enable Module CSS on .vue files
      // const vueLoader = config.module.rules.find(
      //   ({ loader }) => loader === 'vue-loader'
      // )
      // vueLoader.options.cssModules = {
      //   localIdentName: '[name]__[local]'
      // }
    },
    loaders: {
      cssModules: {
        localIdentName: '[local]_[hash:base64:5]',
      },
      sass: {
        indentedSyntax: true,
      },
    },
  },
}
