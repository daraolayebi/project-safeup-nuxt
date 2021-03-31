export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Projects Safeup',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "@/assets/scss/styles.scss"
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // 'nuxt-sass-resources-loader',
        '@nuxtjs/style-resources',
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
    ],

    styleResources: {
        scss: [
            '~/assets/scss/partials/_variables.scss',
            '~/assets/scss/partials/_mixins.scss',
            '~/assets/scss/partials/_fonts.scss',
        ],
    },


    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}