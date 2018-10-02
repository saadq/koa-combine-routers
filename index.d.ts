import * as Compose from 'koa-compose'
import * as Router from 'koa-router'

type Middleware = Compose.ComposedMiddleware<any>

declare function combineRouters(routers: Array<Router>): () => Middleware
declare function combineRouters(...routers: Array<Router>): () => Middleware

declare namespace combineRouters {}

export = combineRouters
