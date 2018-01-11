# koa-combine-routers

Convenience middleware for composing multiple instances of [koa-router](https://github.com/alexmingoia/koa-router) or [koa-tree-router](https://github.com/steambap/koa-tree-router).

## Installation

```
$ npm install koa-combine-routers@old
```

## Usage

**app.js**

```javascript
const Koa = require('koa')
const router = require('./routes')

const app = new Koa()

app.use(router)
```

**routes.js**

```javascript
const Router = require('koa-router')
const combineRouters = require('koa-combine-routers')

const dogRouter = new Router()
const catRouter = new Router()

dogRouter.get('/dogs', function*() {
  this.body = 'ok'
})

catRouter.get('/cats', function*() {
  this.body = 'ok'
})

const router = combineRouters(dogRouter, catRouter)

module.exports = router
```

## API

| param   | type                      | description                                       |
| ------- | ------------------------- | ------------------------------------------------- |
| routers | `Object[]` \| `...Object` | An array of routers or multiple router arguments. |

#### combineRouters(routers)

#### combineRouters(...routers)
