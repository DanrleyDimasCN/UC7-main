import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Perfil from "../Pages/Perfil/Perfil"
import Editar from "../Pages/Editar/Editar"
import PaginaInicial from "../Pages/Pagina-Inicial/PaginaInicial"

export default function Autenticado() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/pagina-Inicial" element={<PaginaInicial/>}/>
                <Route path="/perfil" element={<Perfil/>}/>
                <Route path="/EditarUsuarios/:id" element={<Editar/>} /> 

                <Route path="*" element={<Perfil/>}/>
            </Routes>
        </BrowserRouter>
    )
}