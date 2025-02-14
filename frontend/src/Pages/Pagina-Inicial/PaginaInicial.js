import React from "react"
import "../Pagina-Inicial/paginaInicial.scss"
import paginaInicialViniVeta from '../../image/img-pagina-inicial.png'

export default function PaginaInicial() {
    return (
        <div>
            <div className="box-pagina-inicial">
                <div className="box-logo-perfil">
                    <p>Perfil</p>
                </div>
                <div className="box-pesquisar-minhaLista">
                    <div className="box-pesquisar">
                        <p>Pesquisar</p>
                    </div>
                    <div className="box-minha-lista">
                        <p>Minha Lista</p>
                    </div>
                </div> 
            </div>
             <div className="box-imagem-pagina-inicial">
                <img src={paginaInicialViniVeta} alt="taça de vinho e uma garrafa de vinho como logo da pagina inicial" />
             </div>
        </div>
    )
}