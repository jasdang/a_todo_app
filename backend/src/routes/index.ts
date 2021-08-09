import Router from 'koa-router'

export default function setup() {
  const router = new Router()
  router.get('/', (ctx) => {
    ctx.body = 'Backend running at port 3001'
  })
  return router
}
