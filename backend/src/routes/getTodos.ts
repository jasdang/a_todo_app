const makeDatabase = async () => {
  const database = require('knex')({
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'rootpass',
      database: 'tododb'
    }
  })

  return database
}
export default async function getTodos(ctx) {
  const database = await makeDatabase()
  const todos = await database('todos').select('*')
  console.log(todos)
  ctx.body = todos
}
