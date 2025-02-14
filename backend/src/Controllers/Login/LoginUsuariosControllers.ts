import { Request, Response } from 'express';
import { LoginServices } from '../../Services/Login/LoginServices';

class LoginUsuariosControllers {
    async loginUsuarios(req: Request, res: Response) {
        const { email, senha } = req.body;
        const enviarDadosService = new LoginServices();
        const resposta = await enviarDadosService.loginUsuarios({
            email,
            senha
        });
        return res.json(resposta);
    }
    
    async verificaToken(req: Request, res: Response) {
        const id = req.usuarioId;
        const enviarDadosService = new LoginServices();
       
        try {
            const resposta = await enviarDadosService.verificaToken(id);
            return res.json(resposta);
        } catch (error) {
            console.error('Erro ao verificar o token:', error);
            return res.status(401).json({ error: 'Token inválido ou usuário não encontrado' });
        }
    }
}

export { LoginUsuariosControllers };
