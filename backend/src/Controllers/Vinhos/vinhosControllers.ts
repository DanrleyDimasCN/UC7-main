import { Request, Response } from "express";
import { VinhosServices } from "../../Services/Vinhos/vinhosServices";

class VinhosControllers {
    async registrar_vinhos(req: Request, res: Response) {
    const {nome, tipo, uva, pais, regiao, descricao, nota, IdLista} = req.body
    const vinhosServices = new VinhosServices()
    const resposta = await vinhosServices.registrar_vinhos({
        nome,
        tipo,
        uva,
        pais,
        regiao,
        descricao,
        nota,
        IdLista
    })
    return res.json(resposta) 
}

async consultarVinhos(req: Request, res: Response) {
    const {id} = req.body
    const vinhosServices = new VinhosServices()
    const resposta = await vinhosServices.consultarVinhos()

    return res.json(resposta)
}
}

export { VinhosControllers }
