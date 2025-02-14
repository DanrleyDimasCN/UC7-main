import prismaClient from "../../prisma";
import { hash } from 'bcryptjs';

interface CadUsuarios {
    nome: string;
    email: string;
    cpf: string;
    senha: string;
}

interface AlterarUsuarios {
    id: string;
    nome: string;
    email: string;
    senha: string;
}

class UsuariosServices {
    async cadastrar_usuarios({ nome, email, cpf, senha }: CadUsuarios) {
        const senhaCriptografada = await hash(senha, 8);

        const cpfExiste = await prismaClient.usuario.findFirst({
            where: {
                cpf: cpf
            }
        });

        if (cpfExiste) {
            throw new Error("CPF já está cadastrado");
        }

        await prismaClient.usuario.create({
            data: {
                nome: nome,
                email: email,
                cpf: cpf,
                senha: senhaCriptografada
            }
        });

        return { dados: 'Cadastro Efetuado Com Sucesso' };
    }

    async consultarUsuarios() {
        const resposta = await prismaClient.usuario.findMany({
            select: {
                id: true,
                nome: true,
                email: true,
                cpf: true,
                registrar: {
                    select: {
                        pseudoNome: true
                    }
                }
            }
        });

        return resposta;
    }

    async consultarUsuariosUnico(id: string) {
        
        const resposta = await prismaClient.usuario.findFirst({
            where: {
                id: id
            },
            select: {
                nome: true,
                email: true,
                senha: true
            }
        });

        console.log(resposta);
        

        return resposta;
    }

    async alterarDadosUsuarios({ id, nome, email, senha }: AlterarUsuarios) {
        const usuarioExistente = await prismaClient.usuario.findUnique({
            where: {
                id: id
            }
        });

        if (!usuarioExistente) {
            throw new Error("Usuário não encontrado");
        }
        
        const senhaCriptografada = senha ? await hash(senha, 8) : undefined;

        await prismaClient.usuario.update({
            where: {
                id: id
            },
            data: {
                nome: nome,
                email: email,
                senha: senhaCriptografada || usuarioExistente.senha
            }
        });
    }

    async apagarUsuarios(id: string) {
        const usuarioExistente = await prismaClient.usuario.findUnique({
            where: { id }
        });

        if (!usuarioExistente) {
            throw new Error("Usuário não encontrado");
        }

        await prismaClient.usuario.delete({
            where: {
                id: id
            }
        });

        return { dados: "Registro Apagado com Sucesso" };
    }
}

export { UsuariosServices };
