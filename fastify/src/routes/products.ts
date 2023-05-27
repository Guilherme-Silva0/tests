import { FastifyInstance } from 'fastify'

const productsRoutes = (app: FastifyInstance) => {
  // ISSO É USADO APENAS PARA TESTES, NUNCA SE DEVE PASSAR A REQUISIÇÃO DIRETAMENTE NO CORPO DA QUERY

  app.get('/products', (req, res) => {
    // @ts-ignore
    app.mysql.query('SELECT * FROM products', function onResult(error, result) {
      res.send(error || result)
    })
  })

  app.post('/products', (req, res) => {
    // @ts-ignore
    app.mysql.query(
      // @ts-ignore
      `INSERT INTO products (name, price) VALUES ('${req.body.name}', '${req.body.price}')`,
      function onResult(error: any, result: any) {
        res.send(error || result)
      },
    )
  })

  app.get('/products/:id', (req, res) => {
    // @ts-ignore
    app.mysql.query(
      // @ts-ignore
      `SELECT * FROM products WHERE id=${req.params.id}`,
      function onResult(error: any, result: any) {
        res.send(error || result)
      },
    )
  })
}

export default productsRoutes
