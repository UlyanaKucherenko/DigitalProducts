module.exports= {
    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "~@/styles/core/index.scss";',
            },
        },
    },
    assetsDir: 'assets',

    chainWebpack: config => {
        config.module
          .rule('images')
            .use('url-loader')
              .loader('url-loader')
              .tap(options => Object.assign(options, { limit: 10240 }))
      }

};

