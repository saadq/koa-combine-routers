# koa-combine-routers
Convenience middleware for composing multiple instances of [koa-router](https://github.com/alexmingoia/koa-router).

For usage with Koa 1.X, check out the [`master`](https://github.com/saadq/koa-combine-routers/tree/master) branch.

## Installation

```
$ npm install koa-combine-routers@next
```

## Usage

**app.js**

```javascript
import Koa = from 'koa'
import router = from './routes'

const app = new Koa()

app.use(router)
```

**routes.js**

```javascript
import Router = from 'koa-router'
import combineRouters = from 'koa-combine-routers'

const dogRouter = new Router({ prefix: '/dogs' })
const catRouter = new Router({ prefix: '/cats' })

dogRouter.get('/', async (ctx, next) => { /* Do something */ })
catRouter.get('/', async (ctx, next) => { /* Do something */ })

const router = combineRouters([
  dogRouter,
  catRouter
])

export default router
```

## API

| param |          type           |                   description                   |
|-------|-------------------------|-------------------------------------------------|
|routers|`Object[]` \| `...Object`|An array of routers or multiple router arguments.|

#### combineRouters(routers)
#### combineRouters(...routers)
