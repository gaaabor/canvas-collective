const path = require('path')

exports.onCreateWebpackConfig = function ({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@grid': path.resolve(__dirname, 'src/components/grid'),
        '@styles': path.resolve(__dirname, 'src/styles'),
      },
    },
  })
}
