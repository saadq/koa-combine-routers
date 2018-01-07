var compose = require('koa-compose')

/**
 * Compose multiple instances of koa-router
 * into a single `use`-able middleware.
 *
 * @param  {Object[] | ...Object} routers
 * @return {GeneratorFunction}
 */
function combineRouters (routers) {
  if (!Array.isArray(routers)) {
    routers = Array.prototype.slice.call(arguments)
  }

  var middleware = []

  routers.forEach(function (router) {
    middleware.push(router.routes())

    if (router.allowedMethods) {
      middleware.push(router.allowedMethods())
    }
  })

  return compose(middleware)
}

module.exports = combineRouters
