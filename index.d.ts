import Compose from 'koa-compose'
import Router from 'koa-router'

type Middleware = Compose.ComposedMiddleware<Router.IRouterContext>

declare function combineRouters(routers: Array<Router>): Middleware
declare function combineRouters(...routers: Array<Router>): Middleware

export default combineRouters
