const path = require('path')

exports.onCreateWebpackConfig = function ({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@constants': path.resolve(__dirname, 'src/constants'),
        '@grid': path.resolve(__dirname, 'src/components/grid'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@utilities': path.resolve(__dirname, 'src/utilities'),
        '@types': path.resolve(__dirname, 'src/types.ts'),
        '@assets': path.resolve(__dirname, 'static/assets'),
      },
    },
  })
}
