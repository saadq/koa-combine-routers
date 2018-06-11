import Koa from 'koa'
import Router from 'koa-router'
import combineRouters from './'

const router1 = combineRouters(new Router(), new Router())
const router2 = combineRouters([new Router(), new Router()])

const app = new Koa()

app.use(router1())
app.use(router2())
