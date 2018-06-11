const compose = require('koa-compose')

/**
 * Compose multiple instances of koa-router
 * into a single `use`-able middleware.
 *
 * @param  {Object[] | ...Object} routers
 * @return {Function}
 */
function combineRouters(routers) {
  return () => {
    if (!Array.isArray(routers)) {
      routers = [...arguments]
    }

    const middleware = []

    routers.forEach(router => {
      middleware.push(router.routes())
      middleware.push(router.allowedMethods())
    })

    return compose(middleware)
  }
}

module.exports = combineRouters
