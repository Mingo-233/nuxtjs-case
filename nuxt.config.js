const isBuildProduction = process.env.NUXT_BUILD_ENV === "production";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  srcDir: "src/",
  // server: {
  //   port: 8000, // default: 3000
  //   host: "0.0.0.0", // default: localhost
  // },
  ssr: false,
  head: {
    title: "nuxt-demo",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    // link: [
    //   { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    //   {
    //     rel: 'stylesheet',
    //     href: 'https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css'
    //   },
    // ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["element-ui/lib/theme-chalk/index.css", "vant/lib/index.less"],
  router: {
    middleware: "auth",
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/element-ui",
    // "@/plugins/ant-design-vue",
    "~/plugins/combined-inject.js",
    "@/directive/drag.js",
    // {src:'@/plugins/vant.js', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/vuetify"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["~/modules/simple", "cookie-universal-nuxt"],
  vue: {
    config: {
      productionTip: true,
      devtools: !isBuildProduction,
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // 当使用有 es6 的库时，需要将其导出，告诉 babel 做转化
    transpile: [/^element-ui/, /vant.*?less/],
    babel: {
//       ["import", { "libraryName": "antd", "style": true }]: import js and css modularly (LESS/Sass source files)
// ["import", { "libraryName": "antd", "style": "css" }]: import js and css modularly (css built files)
      plugins: [
        [
          "import",
          {
            libraryName: "vant",
            libraryDirectory: "es",
            style: true,
            // style: (name) => {
            //   return `${name}/style/less.js`
            // },
          },
          "vant",
        ],
        ["import",
         {
            libraryName: "ant-design-vue",
            libraryDirectory: "es",
             style: 'css'
            }
        ]
      ],
    },
    extend (config, { isClient }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.devtool = "source-map";
      }
    },
    analyza: {
      analyzeMode: "static",
    },
  },
  target: "static",
};
