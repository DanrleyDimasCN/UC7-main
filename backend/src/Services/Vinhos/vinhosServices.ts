import prismaClient from "../../prisma";

interface RegVinhos {
    nome: string
    tipo: string
    uva: string
    descricao: string
    nota: number
    IdLista: number
    IdRegiao: number
}

class VinhosServices {
    async registrar_vinhos ({nome, tipo, uva, descricao, nota, IdLista, IdRegiao}: RegVinhos) {
        const resposta = await prismaClient.vinhos.create({
            data: {
                nome: nome,
                tipo: tipo,
                uva: uva,
                descricao: descricao,
                nota: nota,
                IdLista: IdLista,
                IdRegiao: IdRegiao
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
