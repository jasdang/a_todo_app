import Router from 'koa-router'
import getTodos from './getTodos'

export default function setup() {
  const router = new Router()
  router.get('/', (ctx) => {
    ctx.body = 'Backend running at port 3001'
  })
  router.get('/todos', getTodos)
  return router
}
