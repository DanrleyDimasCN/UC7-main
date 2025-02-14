import { Request, Response } from "express";
import { PaisServices } from "../../Services/Pais/paisServices";


class PaisControllers {
    async cadastrar_pais(req: Request, res: Response) {
        console.log("Requisição recebida no controlador. Body:", req.body);

        const { nome } = req.body
        console.log("Nome extraído do body:", nome);

        const paisServices = new PaisServices()
        const resposta = await paisServices.cadastrar_pais({
            nome
        })
        
        console.log("Resposta recebida do serviço cadastrar_pais:", resposta);

        return res.json(resposta)
    }

    async consultar_pais(req: Request, res: Response) {
        const paisServices = new PaisServices()
        const resposta = await paisServices.consultar_pais()

        return res.json(resposta)
    }
}

export { PaisControllers }