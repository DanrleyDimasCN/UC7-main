import prismaClient from "../../prisma";
import { hash } from 'bcryptjs';

interface CadUsuarios {
    nome: string;
    sobrenome: string;
    email: string;
    data_nascimento: string;
    genero: "MASCULINO" | "FEMININO" | "NAO_INFORMADO";
    senha: string;
}

interface AlterarUsuarios {
    id: string;
    nome: string;
    email: string;
    senha: string;
}

class UsuariosServices {
    async cadastrar_usuarios({ nome, sobrenome, email, data_nascimento, genero, senha }: CadUsuarios) {
        const senhaCriptografada = await hash(senha, 8);

        const emailExiste = await prismaClient.usuario.findFirst({
            where: { email }
        });

        if (emailExiste) {
            throw new Error("E-mail já está cadastrado");
        }

        const dataNascimento = new Date(data_nascimento);
        if (isNaN(dataNascimento.getTime())) {
            throw new Error("Data de nascimento inválida");
        }

        await prismaClient.usuario.create({
            data: {
                nome,
                sobrenome,
                email,
                data_nascimento: dataNascimento.toISOString(),
                genero,
                senha: senhaCriptografada,
            }
        });

        return { dados: 'Cadastro Efetuado Com Sucesso' };
    }

    async consultarUsuarios() {
      const resposta = await prismaClient.usuario.findMany({
            select: {
                id: true,
                nome: true,
                sobrenome: true,
                email: true,
                data_nascimento: true,
                genero: true
            }
        });
        return resposta
    }

    async consultarUsuariosUnico(id: string) {
        console.log("ID recebido no Serviço:", id)
<<<<<<< HEAD
=======

        console.log("Consultando usuário com usuarioId:", id);
>>>>>>> parent of 6898384 (18/02)

        console.log("Consultando usuário com usuarioId:", id);

        const resposta = await prismaClient.usuario.findUnique({
            where: {
                id: id
            },
            select: {
                id: true,
                nome: true,
                sobrenome: true,
                email: true,
                data_nascimento: true,
                genero: true,
                create_at: true,
                senha: true
               
            }
        });

        console.log("Resposta da consulta:", resposta);
        

        if (!resposta) {
            throw new Error("Usuário não encontrado");
        }

        const hoje = new Date();
        const nascimento = new Date(resposta.data_nascimento);
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mes = hoje.getMonth() - nascimento.getMonth();

        if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
            idade--;
        }

        return { ...resposta, idade };
    }

    async alterarDadosUsuarios({ id, nome, email, senha }: AlterarUsuarios) {

        if (!id) {
            throw new Error("ID do usuário não fornecido.");
        }

        const usuarioExistente = await prismaClient.usuario.findUnique({
            where: {
                id: id,
            }
        });

        if (!usuarioExistente) {
            throw new Error("Usuário não encontrado");
        }

        const senhaCriptografada = senha ? await hash(senha, 8) : undefined;

        await prismaClient.usuario.update({
            where: { id },
            data: {
                nome,
                email,
                senha: senhaCriptografada || usuarioExistente.senha,
            }
        });
    }

    async apagarUsuarios(id: string) {
        const usuarioExistente = await prismaClient.usuario.findUnique({
            where: { id: id, }
        });

        if (!usuarioExistente) {
            throw new Error("Usuário não encontrado");
        }

        await prismaClient.usuario.delete({
            where: { id }
        });

        return { dados: "Registro Apagado com Sucesso" };
    }
}

export { UsuariosServices };
