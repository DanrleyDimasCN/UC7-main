import prismaClient from "../../prisma";

interface RegVinhos {
    nome: string
    tipo: string
    uva: string
    pais: string
    regiao: string
    descricao: string
    nota: number
    IdLista: string
}

class VinhosServices {
    async registrar_vinhos ({nome, tipo, uva, pais, regiao, descricao, nota, IdLista}: RegVinhos) {
        const resposta = await prismaClient.vinhos.create({
            data: {
                nome: nome,
                tipo: tipo,
                uva: uva,
                pais: pais,
                regiao: regiao,
                descricao: descricao,
                nota: nota,
                IdLista: IdLista
            }
        })
        return ({dados: 'Vinho Registrado com Sucesso'})
    }

    async consultarVinhos () {
        const resposta = await prismaClient.vinhos.findMany({
            select: {
                nome: true,
                tipo: true,
                uva: true,
                descricao: true,
                nota: true
            }
        })
        return resposta
    }
}

export { VinhosServices }
