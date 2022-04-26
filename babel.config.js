const { plugins } = require("./webpack.config")

module.exports = function (api) {
  api.cache(true)
  const presets = [
    "@babel/preset-env",
    "@babel/preset-react",
  ]
  const plugins = [
    "babel-plugin-macros"
  ]
  return (
    {plugins, presets}
  )
}