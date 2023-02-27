const Livro = require('../models/Livro')

const { bdLivro } = require('../estrutura/bd')

class ControllerLivro {
    static rotas(app) {
    app.get('/livro', ControllerLivro.listarLivro)
    app.get('/livro/:genero', ControllerLivro.buscarLivroGenero)
    app.post('/livro', ControllerLivro.cadastrarLivro)
    app.delete('/livro/:genero', ControllerLivro.deletarLivro)
  }

  static listarLivro(req, res) {
    res.send(bdLivro)
  }

  static buscarLivroGenero(req, res) {
    const livro = bdLivro.find(
      (livro) => livro.genero === req.params.genero
    )

    if (!livro) {
      res.rend('Livro não encontrado')
      return;
    }
    res.send(livro)
  }

  static cadastrarLivro(req, res) {
    const livro = new Livro(req.body.genero, req.body.diretora)
    bdLivro.push(livro)
    res.send(bdLivro)
  }

  static deletarLivro(req, res) {     
    const livro = bdLivro.find((livro) => livro.genero === req.params.genero)  

    if (!livro) {   
      res.send('Livro não encontrado')
      return
    }
    const index = bdLivro.indexOf(livro)  
    bdLivro.splice(index, 1)  
    res.send({   
      "Mensagem: ": `O gereno do livro ${cliente.email} foi deletado`,
      });
      
  }
}
  
module.exports = ControllerLivro