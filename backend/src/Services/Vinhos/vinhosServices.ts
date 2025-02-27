import prismaClient from "../../prisma";
import axios from "axios";

interface RegVinhos {
  nome: string;
  tipo: string;
  uva: string;
  pais: string;
  regiao: string;
  descricao: string;
  nota: number;
  IdLista: string;
}

class VinhosServices {
  async registrar_vinhos({ nome, tipo, uva, pais, regiao, descricao, nota, IdLista }: RegVinhos) {
    const resposta = await prismaClient.vinhos.create({
      data: { nome, tipo, uva, pais, regiao, descricao, nota, IdLista },
    });

    return { dados: "Vinho Registrado com Sucesso" };
  }

  async consultarVinhos() {
    const resposta = await prismaClient.vinhos.findMany({
      select: {
        nome: true,
        tipo: true,
        uva: true,
        descricao: true,
        nota: true,
      },
    });

    return resposta;
  }

  async pesquisarVinhos(termo: string) {
    // 1. Buscar no banco de dados
    const vinhosBanco = await prismaClient.vinhos.findMany({
      where: {
        nome: {
          contains: termo,
          mode: "insensitive",
        },
      },
    });

    if (vinhosBanco.length > 0) {
      return vinhosBanco;
    }

    // 2. Se não encontrar, buscar na API externa
    const API_URL = "https://api-exemplo.com/vinhos"; // Substitua pela URL real
    try {
      const response = await axios.get(`${API_URL}?search=${termo}`);
      const vinhosExternos = response.data;

      if (!vinhosExternos || vinhosExternos.length === 0) {
        return [];
      }

      // 3. Salvar no banco de dados
      await prismaClient.vinhos.createMany({
        data: vinhosExternos.map((vinho: any) => ({
          nome: vinho.nome,
          tipo: vinho.tipo,
          uva: vinho.uva,
          pais: vinho.pais,
          regiao: vinho.regiao,
          descricao: vinho.descricao,
          nota: vinho.nota,
          IdLista: "externo", // Pode ser um ID fixo para diferenciar dados da API
        })),
        skipDuplicates: true,
      });

      return vinhosExternos;
    } catch (error) {
      console.error("Erro ao buscar na API externa:", error);
      return [];
    }
  }
}

export { VinhosServices };
