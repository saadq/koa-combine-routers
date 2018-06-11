import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as combineRouters from './'

const router1 = combineRouters(new Router(), new Router())
const router2 = combineRouters([new Router(), new Router()])

const app = new Koa()

app.use(router1())
app.use(router2())
