const express = require('express')

const app = express()

const port = 3000

app.use(express.json())

const ControllerCliente = require('./controllers/controller-cliente')
ControllerCliente.rotas(app)

const ControllerLivro = require('./controllers/controller-livro')
ControllerLivro.rotas(app)

app.listen(port, (req, res) => {
console.log(`Servidor rodando na porta ${port}`)
})
