import React, { useState, useEffect } from "react";
import cordero from '../../image/cordero-malbec.png'
import { useParams } from "react-router-dom";
import axios from "axios";

export default function VinhoInfo() {
    const [infoVinho, setInfoVinho] = useState(null);
    const { id } = useParams();

  useEffect(() => {
    async function consultarVinho() {
      try {
        
        const response = await axios.get("http://localhost:3333/data/vinhos.json");
        
        const vinhoEncontrado = response.data.find(vinho => vinho.id === Number(id));

        if (vinhoEncontrado) {
          setInfoVinho(vinhoEncontrado);
        } else {
          console.error("Vinho não encontrado");
        }
      } catch (error) {
        console.error("Erro ao buscar informações do vinho:", error);
      }
    }

    if (id) {
      consultarVinho();
    }
  }, [id]);

  if (!infoVinho) return <p>Carregando...</p>;

    return (
        <div className="box-vinhoInfo-principal">
            <div className="box-vinhoInfo">
            <img src={cordero} alt="Foto do vinho" />
            <h2>
              <div className="box-vinhoInfo-nome">
                <p>{infoVinho.nome}</p>
                <p>{infoVinho.uva}</p>
                <p>750ml</p>
                <p>{infoVinho.nota}</p>
              </div>
            </h2>
            </div>
            <div className="box-vinhoInfo-button">
                <button>Adicionar</button>
            </div>
            <div className="box-vinho-informacao-completa">
            <p>Tipo: {infoVinho.tipo}</p>
            <p>Uva: {infoVinho.uva}</p>
            <p>País: {infoVinho.pais}</p>
            <p>Região: {infoVinho.regiao}</p>
            <p>Produtor: {infoVinho.produtor}</p>
            <p>Teor Alcoólico: {infoVinho.teor_alcoolico}</p>
            <p>Amadurecimento: {infoVinho.amadurecimento}</p>
            <p>Harmonização: {infoVinho.harmonizacao}</p>
            <p>Olfativo: {infoVinho.olfativo}</p>
            <p>Gustativo: {infoVinho.gustativo}</p>
            <p>Descrição: {infoVinho.descricao}</p>
            <p>Temperatura de Serviço: {infoVinho.temperatura_servico}</p>
            <p>Um pouco mais sobre o vinho</p>
            <div className="box-vinhoInfo-historia">
            <div className="box-vinho-historia">
            <p>
            {infoVinho.historia}
            </p>
            </div>
            </div>   
            </div>
        </div>
    )
}