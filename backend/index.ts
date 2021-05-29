import Koa from 'koa'
import Router from 'koa-router'
const app = new Koa()
const router = new Router()

router.get('/', (ctx) => {
  ctx.body = 'Backend running at port 5000'
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(5000, () => {
  console.log('Server running at PORT 5000')
})
