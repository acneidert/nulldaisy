const [server, client] = require('nullstack/webpack.config')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

function customClient(...args) {
  const config = client(...args)
  const rule = config.module.rules.find((rule) => rule.test && rule.test.test('.css'))
  rule.use.push({
    loader: require.resolve('postcss-loader'),
    options: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
        },
      },
    },
  })
  if (!config.resolve.plugins) config.resolve.plugins = []
  config.resolve.plugins.push(new TsconfigPathsPlugin({}))
  return config
}

function customServer(...args) {
  const config = server(...args)
  if (!config.resolve.plugins) config.resolve.plugins = []
  config.resolve.plugins.push(new TsconfigPathsPlugin({}))
  return config
}

module.exports = [customServer, customClient]
