import Koa from "koa"
import Router from "koa-router"
const app = new Koa()
const router = new Router()

router.get("/", (ctx) => {
  ctx.body = "Backend running at port 3001"
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3001, () => {
  console.log("Server running at PORT 3001")
})
