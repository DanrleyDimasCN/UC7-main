import prismaClient from "../../prisma";

interface PaisConst {
    nome: string
}

class PaisServices {
    async cadastrar_pais ({nome}: PaisConst) {
        console.log("Iniciando cadastro de país. Nome recebido:", nome);
        
        const resposta = await prismaClient.pais.create({
            data: {
                nome: nome
            }
        })
        console.log("Resposta do Prisma ao criar país:", resposta);
        return ({dados: "Pais Registrado com Sucesso"})
    }

    async consultar_pais () {
        const resposta = await prismaClient.pais.findMany({
            select: {
                nome: true,
                id: true
            }
        })
        return resposta
    }
}

export { PaisServices }