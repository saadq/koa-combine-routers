# koa-combine-routers

[![Build Status](https://travis-ci.org/saadq/koa-combine-routers.svg?branch=master)](https://travis-ci.org/saadq/koa-combine-routers)

Convenience middleware for composing multiple instances of [koa-router](https://github.com/alexmingoia/koa-router).

For usage with Koa 1.X, check out the [`old`](https://github.com/saadq/koa-combine-routers/tree/old) branch.

## Installation

```
$ npm install koa-combine-routers
```

## Usage

**app.js**

```javascript
const Koa = require('koa')
const router = require('./routes')

const app = new Koa()

app.use(router())
```

**routes.js**

```javascript
const Router = require('koa-router')
const combineRouters = require('koa-combine-routers')

const dogRouter = new Router()
const catRouter = new Router()

dogRouter.get('/dogs', async ctx => {
  ctx.body = 'ok'
})

catRouter.get('/cats', async ctx => {
  ctx.body = 'ok'
})

const router = combineRouters(
  dogRouter,
  catRouter
)

module.exports = router
```

## API

| param   | type                      | description                                       |
| ------- | ------------------------- | ------------------------------------------------- |
| routers | `Object[]` \| `...Object` | An array of routers or multiple router arguments. |

#### combineRouters(routers)

#### combineRouters(...routers)
