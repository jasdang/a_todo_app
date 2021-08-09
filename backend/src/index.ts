import Koa from 'koa'
import routerSetup from './routes'
const app = new Koa()

const router = routerSetup()

app.use(router.routes()).use(router.allowedMethods())

app.listen(3001, () => {
  console.log('Server running at PORT 3001')
})
