import React from "react";
import cordero from '../../image/cordero-malbec.png'

export default function VinhoInfo() {
    return (
        <div className="box-vinhoInfo-principal">
            <div className="box-vinhoInfo">
            <img src={cordero} alt="Foto do vinho" />
            <h2>
                Vinho Argentino Cordero con Piel de Lobo
                Malbec 
                Tinto 750ml
            </h2>
                
            </div>
            <div className="box-vinhoInfo-button">
                <button>Adicionar</button>
            </div>
            <div className="box-vinho-informacao-completa">
                    <p>TINTO</p>
                    <p>Páis</p>
                    <p>Região</p>
                    <p>PRODUTOR</p>
                    <p>TEOR ALCOÓLICO</p>
                    <p>AMADURECIMENTO</p>
                    <p>HARMONIZAÇÃO</p>
                    <p>OLFATIVO</p>
                    <p>GUSTATIVO</p>
                    <p>TEMPERATURA DE SERVIÇO</p>
                    <p>Um pouco mais sobre o vinho</p>
                    <div className="box-vinhoInfo-historia">
                        <div className="box-vinho-historia">
                        <p>
                        O Vinho Cordero con Piel de Lobo Malbec leva a assinatura
                        da Mosquita Muerta Wines,
                        uma excelente vinícola argentina,
                        fundada por José Millán.
                        O nome do vinho,
                        “Cordero con Piel de Lobo”,
                        pode ser traduzido como
                        “Lobo em Pele de Cordeiro”,
                        fazendo referência à clássica fábula.
                        Produzido com a uva Malbec,
                        cultivada entre 750 e 1.000 metros de altitude,
                        em vinhedos localizados na região vitivinícola de Mendoza, na Argentina. De coloração rubi intensa,
                        revela, no nariz, aromas de frutas vermelhas maduras.
                        Em boca, é um Vinho Tinto fresco, contando com boa acidez,
                        taninos maduros e um final persistente.
                        </p>
                        </div>
                    </div>   
            </div>
           
        </div>
    )
}