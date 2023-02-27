const Cliente = require("../models/Cliente");
const Usuario = require("../models/Cliente");
const { bdCliente } = require("../estrutura/bd");
class ControllerCliente {
static rotas(app) {
app.get("/cliente", ControllerCliente.listarCliente); 

app.get("/cliente/:email", ControllerCliente.buscarClienteEmail);

app.post("/cliente", ControllerCliente.cadastrarCliente); 

app.put('/cliente/:email', ControllerCliente.atualizaCliente);

app.delete("/cliente/:email", ControllerCliente.deletarCliente); 
}

static listarCliente(req, res) {
res.send(bdCliente);
}

static buscarClienteEmail(req, res) {

const cliente = bdCliente.find(
(cliente) => cliente.email === req.params.email
);

if (!cliente) {
res.send("Cliente não encontrado");
return;
}

res.send(cliente);
}

static cadastrarCliente(req, res) {

const cliente = new Cliente(
req.body.nome,
req.body.email,
req.body.tel,
req.body.end
);
bdCliente.push(cliente);
res.send(bdCliente); 
}


static atualizaCliente(req, res) {
   
    const cliente = bdCliente.find(cliente => cliente.email ===
    req.params.email)
  
    if (!cliente) {
    res.send('Usuário não encontrado')
    return
    }
    
    cliente.nome = req.body.nome
    cliente.email = req.body.email
    cliente.senha = req.body.senha
    res.send({"Mensagem": "Cliente atualizado com sudesso", "Dados do Cliente": cliente})
    }

    static deletarCliente(req, res) {
   
    const cliente = bdCliente.find((cliente) => cliente.email ===
    req.params.email
    );
  
    if (!cliente) {
    res.send("Cliente não encontrado");
    return
    }
   
    const index = bdCliente.indexOf(cliente);
    bdCliente.splice(index, 1);
 
    res.send({
    "Mensagem: ": `O cliente do email ${cliente.email} foi deletado`,
    });
    }
}

module.exports = ControllerCliente;