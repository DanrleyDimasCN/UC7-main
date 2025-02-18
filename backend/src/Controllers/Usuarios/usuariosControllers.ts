import { Request, Response } from 'express';
import { UsuariosServices } from '../../Services/Usuarios/UsuariosServices';

class UsuariosControllers {
    async cadastro_usuarios(req: Request, res: Response) {
        const { nome, sobrenome, email, data_nascimento, genero, senha } = req.body;
        const enviarDadosService = new UsuariosServices();

        try {
            const resposta = await enviarDadosService.cadastrar_usuarios({
                nome,
                sobrenome,
                email,
                data_nascimento,
                genero,
                senha
            });

            return res.status(201).json(resposta);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async consultarUsuarios(req: Request, res: Response) {
        const enviarDadosServices = new UsuariosServices();

        try {
            const resposta = await enviarDadosServices.consultarUsuarios();
            return res.status(200).json(resposta);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    async consultarUsuariosUnico(req: Request, res: Response) {
        const {id, nome, email } = req.body; 
        

        try {
            const enviarDadosServices = new UsuariosServices();
            const resposta = await enviarDadosServices.consultarUsuariosUnico(id)

            return res.status(200).json(resposta); 
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message || "Erro interno ao consultar o usuário." });
        }
    }

    async alterarDadosUsuarios(req: Request, res: Response) {
        const {id, nome, email, senha} = req.body;
    
        try {
            const enviarDadosServices = new UsuariosServices();
            const resposta = await enviarDadosServices.alterarDadosUsuarios({
                id,
                nome,
                email,
                senha,
            });
    
            return res.json(resposta);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
    async apagarUsuarios(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const enviarDadosServices = new UsuariosServices();
            const resposta = await enviarDadosServices.apagarUsuarios(id);
            return res.json(resposta);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}

export { UsuariosControllers };
