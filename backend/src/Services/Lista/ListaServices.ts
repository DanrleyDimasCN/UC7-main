import prismaClient  from "../../prisma";

interface ListaVinhos {
    nome: string
    IdUsuario: string
    
}

class ListaServices {
    async cadastro_vinhos({nome, IdUsuario}: ListaVinhos) {
        const resposta = await prismaClient.minha_Lista.create({
            data: {
               nome: nome,
               IdUsuario: IdUsuario

            }
        })
        return ({dados: 'Vinho Adicinado com sucesso'})
    }

    async consultarVinhos () {
        const resposta = await prismaClient.minha_Lista.findMany({
            select: {
                nome: true
            }
        })

        return resposta
    }
}




export { ListaServices }