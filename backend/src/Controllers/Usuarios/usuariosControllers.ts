import { Request, Response } from 'express';
import { UsuariosServices  } from '../../Services/Usuarios/UsuariosServices';

class UsuariosControllers {
    async cadastro_usuarios(req: Request, res: Response) {
        const {nome, cpf, email, senha } = req.body
        const usuariosServices = new UsuariosServices()
        const resposta = await usuariosServices.cadastrar_usuarios({
            nome,
            cpf,
            email,
            senha
            
        })   
        return res.json(resposta)
    }

    async consultarUsuarios(req: Request, res: Response) {
        const usuariosServices = new UsuariosServices()
        const resposta = await usuariosServices.consultarUsuarios()

        return res.json(resposta)
    }

    async consultarUsuariosUnico(req: Request, res: Response) {
        const {id} = req.body
        console.log(id)
        const enviardadosServices = new UsuariosServices()
        const resposta =  await enviardadosServices.consultarUsuariosUnico(id)
        return res.json(resposta)
       
    }

    async alterarDadosUsuarios(req: Request, res: Response) {
        const { id, nome, email, senha } = req.body
        const enviardadosServices = new UsuariosServices()
        const resposta = await enviardadosServices.alterarDadosUsuarios({
            id,
            nome,
            email,
            senha
        })

        return res.json(resposta)
    }

    async apagarUsuarios(req: Request, res: Response) {
        const { id } = req.params
        const enviardadosServices = new UsuariosServices()
        const resposta = await enviardadosServices.apagarUsuarios(id)
        return res.json(resposta)
    }
    
}

export { UsuariosControllers }