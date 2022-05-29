const path = require('path');

module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '^vuetify': path.resolve(__dirname, 'node_modules/vuetify'),
          '@': path.resolve('./src/'),
          'frontend': path.resolve('./src/frontend/'),
          'admin': path.resolve('./src/admin/'),
        },
        modules: [
          path.resolve('./node_modules'),
          path.resolve(path.join(__dirname, 'src/')),
        ]
      },
    },
    // chainWebpack: config => config.plugins.delete('named-chunks'),
    /*pages: {
      frontend: {
        // entry for the page
        entry: './src/frontend/main.js',
        // the source template
        template: './public/index.html',
        // output as dist/index.html
        filename: 'index.html',
        // when using title option,
        // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Index Page',
        // chunks to include on this page, by default includes
        // extracted common chunks and vendor chunks.
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
      admin: {
        // entry for the page
        entry: './src/admin/main.js',
        // the source template
        template: './public/index.html',
        // output as dist/index.html
        filename: 'index.html',
        // when using title option,
        // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Index Page',
        // chunks to include on this page, by default includes
        // extracted common chunks and vendor chunks.
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
    }*/
  }