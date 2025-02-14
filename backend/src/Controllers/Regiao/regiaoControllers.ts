import { Request, Response } from "express"
import { RegiaoServices } from "../../Services/Regiao/regiaoServices"

class RegiaoControllers {
    async reg_regiao(req: Request, res: Response) {
        const { nome, IdPais } = req.body
        const regiaoServices = new RegiaoServices()
        const resposta = await regiaoServices.regiao_reg({
            nome,
            IdPais
        })
        return res.json(resposta)
    }

    async consultar_regiao(req: Request, res: Response) {
        const regiaoServices = new RegiaoServices()
        const resposta = await regiaoServices.consultar_regiao()

        return res.json(resposta)
    }
}

export { RegiaoControllers }