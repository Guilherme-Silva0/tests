import { FastifyInstance } from 'fastify'
import productsRoutes from './products'

const routes = (app: FastifyInstance) => {
  productsRoutes(app)
}

export default routes
