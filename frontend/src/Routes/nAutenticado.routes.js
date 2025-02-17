import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from "../Pages/Inicio/Inicio";
import Cadastro from "../Pages/Registro/Cadastro";
// import PaginaInicial from "../Pages/Pagina-Inicial/PaginaInicial";
// import Perfil from "../Pages/Perfil/Perfil"

export default function NAutenticado() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/cadastro" element={<Cadastro/>} />
                {/* <Route path="/pagina-Inicial" element={<PaginaInicial/>}/>
                <Route path="/perfil" element={<Perfil/>}/> */}

                <Route path="*" element={<Inicio/>} />
            </Routes>
        </BrowserRouter>
    )
}