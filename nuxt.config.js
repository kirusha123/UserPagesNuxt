export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  buildDir: './Docs',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'UserPage',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
      },
    ],
    script:[
      /*{
        type:"text",
        src: "./js/timer.js",
        async:true,
      },
      {
        src: "https://api-maps.yandex.ru/2.1/?apikey=3993f4de-45b9-4907-8af0-e2115b350b9a&lang=ru_RU",
      },
      {
        src:"./js/lib/fontawesome/all.js",
        defer:true,
      },*/
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         },
         {
          set:'@fortawesome/free-regular-svg-icons',
          icons:['far']
         },
       ]
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
