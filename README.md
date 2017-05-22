# koa-combine-routers
Convenience middleware for composing multiple instances of [koa-router](https://github.com/alexmingoia/koa-router).

For usage with Koa 2.X, check out the [`next`](https://github.com/saadq/koa-combine-routers/tree/next) branch.

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

app.use(router)
```

**routes.js**

```javascript
const Router = require('koa-router')
const combineRouters = require('koa-combine-routers')

const dogRouter = new Router({ prefix: '/dogs' })
const catRouter = new Router({ prefix: '/cats' })

dogRouter.get('/', function * (next) { /* Do something */ })
catRouter.get('/', function * (next) { /* Do something */ })

const router = combineRouters(
  dogRouter,
  catRouter
)

module.exports = router
```

## API

| param |          type           |                   description                   |
|-------|-------------------------|-------------------------------------------------|
|routers|`Object[]` \| `...Object`|An array of routers or multiple router arguments.|

#### combineRouters(routers)
#### combineRouters(...routers)
