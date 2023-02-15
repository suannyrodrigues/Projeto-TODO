// Importa o bd.js para poder usar o banco de dados simulado
import { bdUsuarios } from "../bd.js"

class usuarioController {
    static rotas(app){
        // Rota para o recurso usuario
        app.get('/', usuarioController.listar)
        app.post('/', usuarioController.inserir)
        app.get('/email/:email', usuarioController.buscarPorEmail)
        app.delete('/email/:email', usuarioController.deletar)
        app.put('/email/:email', usuarioController.atualizar)
    }

    static listar(req, res){
        const usuarios = bdUsuarios
        // Devolve a lista de usuarios
        res.send(usuarios)
    }

    static inserir(req, res){
        res.send('Rota ativada com POST e recurso usuario: usuario deve ser inserido')
        // Console log do corpo da requisição
        console.log(req.body)        
    }

    static buscarPorEmail(req, res){
        // Busca o email na lista de usuarios
        const usuario = bdUsuarios.find(usuario => usuario.email === req.params.email)
        // Se o usuario não for encontrado, devolve um erro
        if(!usuario){
            res.status(404).send('Usuário não encontrado')
        }
        // Se o usuario for encontrado, devolve o usuario
        res.send(usuario)
    }

    static deletar(req, res){
        // Busca o email na lista de usuarios
        const usuario = bdUsuarios.find(usuario => usuario.email === req.params.email)
        // Se o usuario não for encontrado, devolve um erro
        if(!usuario){
            res.status(404).send('Usuário não encontrado')
        }
        // Se o usuario for encontrado, deleta o usuario
        const index = bdUsuarios.indexOf(usuario)
        bdUsuarios.splice(index, 1)
        // Devolve o usuario deletado
        res.send(usuario)
    }

    static atualizar(req, res){
        // Busca o email na lista de usuarios
        const usuario = bdUsuarios.find(usuario => usuario.email ===req.params.email)
        // Se o usuario não for encontrado, devolve um erro
        if(!usuario){
            res.status(404).send('Usuário não encontrado!')
        }
        // Se o usuario for encontrado, atualiza o usuario
        usuario.nome = (req.body.nome || usuario.nome)
        usuario.email = (req.body.email || usuario.email)
        usuario.senha = (req.body.senha || usuario.senha)
        // Devolve o usuario atualizado
        res.send({mensagem: 'Usuário alterado com sucesso.'})

    }
}

export default usuarioController