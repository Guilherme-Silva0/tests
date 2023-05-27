import fastify from 'fastify'
import mysql from '@fastify/mysql'
import dotenv from 'dotenv'
import console from 'console'
import routes from './routes/routes'

dotenv.config()

const app = fastify({
  logger: false,
})

app.register(mysql, {
  connectionString: `mysql://${process.env.MYSQL_USER}:${process.env.MYSQL_PASSWORD}@localhost:3306/${process.env.MYSQL_DB}`,
})

routes(app)

app.listen({ port: 3001 }, (error, address) => {
  if (error) {
    console.log(error)
    process.exit(1)
  }

  console.log('Server running in:', address)
})
