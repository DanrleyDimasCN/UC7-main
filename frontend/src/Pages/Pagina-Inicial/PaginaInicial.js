import React from "react"
import { Link } from "react-router-dom";
import "../Pagina-Inicial/paginaInicial.scss"
import paginaInicialViniVeta from '../../image/img-pagina-inicial.png'
import logoperfil from '../../image/logo-perfil.png'
import luneta from '../../image/logo-search.png'

export default function PaginaInicial() {
    return (
        <div className="box-screen-1024">
            <div className="box-pagina-inicial">
                <div className="box-logo-perfil">
                    <img src={logoperfil} alt="" />
                    <Link to='/perfil'>
                    <p>Perfil</p>
                    </Link>
                </div>
                <div className="box-pesquisar-minhaLista">
                    <div className="box-pesquisar">
                        <p>Pesquisar</p>
                        <img src={luneta} alt="" />
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