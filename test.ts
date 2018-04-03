import Koa from 'koa'
import Router from 'koa-router'
import combineRouters from './'

const combined1 = combineRouters(new Router(), new Router())
const combined2 = combineRouters([new Router(), new Router()])

const app = new Koa()

app.use(combined1)
app.use(combined2)
