
// allow to require('riot')
var riot = module.exports = require(process.env.RIOT || '../riot')

// simple-dom helper
var sdom = require('./sdom')

riot.render = function(tagName, opts) {
  var root = document.createElement(tagName)
  var tag = riot.mount(root, opts)
  return sdom.serialize(root)
}
