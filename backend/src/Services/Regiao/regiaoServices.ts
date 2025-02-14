import prismaClient from "../../prisma";

interface RegiaoType {
    nome: string
    IdPais: number
}

class RegiaoServices {
    async regiao_reg ({nome, IdPais}: RegiaoType) {
        const resposta = await prismaClient.regiao.create({
            data: {
                nome: nome,
                IdPais: IdPais
            }
        })
        return ({dados: 'Região Registrada com Sucesso'})
    }

    async consultar_regiao() {
        const resposta = await prismaClient.regiao.findMany({
            select: {
                nome: true,
                id: true
            }
        })
        return resposta
    }
}

export { RegiaoServices }