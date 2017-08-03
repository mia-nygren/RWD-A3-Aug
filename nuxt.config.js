module.exports = {
  router: {
    base: '/RWD-A3-Aug/'
  },
  performance: {
    prefetch: false
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'sv-se',
    },
    title: 'tea2go',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdn.polyfill.io/v2/polyfill.js?features=String.prototype.includes,Array.prototype.find,Promise' }
    ],
    noscript: [
      { innerHTML: '<style> .jsOnly { display: none } </style>' }
    ],
    __dangerouslyDisableSanitizers: ['noscript']
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    publicPath: 'https://mia-nygren.github.io/RWD-A3-Aug/',
    vendor: ['vue-multiselect', 'lodash'],
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loaders: [{
          loader:'url-loader',
          query: {
            limit: 1500, // 1.5KO
            name: 'img/[name].[hash:7].[ext]'
          }
        },{
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 4,
            },
            pngquant: {
              quality: '75-90',
              speed: 3,
            },
          },
        }],
        exclude: '/assets/fonts/'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1 KO
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
      { src: '~plugins/vue-multiselect/vue-multiselect.js', injectAs: 'multiSel', ssr: true }
  ],
  css: [
    // CSS för Google Fonts Oxygen
    '~assets/styles/font.css',
    // CSS som gäller för alla sidor
    '~assets/styles/global.css'
  ]
}
