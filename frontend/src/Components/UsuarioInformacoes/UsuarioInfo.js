import React, { useState, useEffect } from "react";
import apiLocal from "../../API/apiLocal";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import fotoPerfil from '../../image/foto-perfil.png'

export default function UsuariosInfo() {
    const [dadosUsuarios, setDadosUsuarios] = useState([]);
    const iToken = localStorage.getItem("@token");
    const token = JSON.parse(iToken);

    useEffect(() => {
        async function consultarDadosUsuarios() {
            try {
                const resposta = await apiLocal.get("/ConsultarUsuarios", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setDadosUsuarios(resposta.data);
            } catch (err) {
                toast.error("Erro ao carregar os dados dos usuários.");
                console.error(err);
            }
        }
        consultarDadosUsuarios();
    }, [token]);

    async function apagarUsuarios(id) {
        try {
            await apiLocal.delete(`/ApagarUsuarios/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success("Registro Apagado com Sucesso", {
                toastId: "ToastId",
            });
            setDadosUsuarios(dadosUsuarios.filter((usuario) => usuario.id !== id));
        } catch (err) {
            toast.error("Erro ao se comunicar com Back-End");
        }
    }

    return (
        <div  className="box-perfil-background">
            <div className="box-perfil-principal">
                    <div className="box-perfil">
                        <div className="box-perfil-foto">
                            <img src={fotoPerfil} alt="" />
                        </div>
                        <div className="box-perfil-nome">
                                <h2>Velvinno</h2>
                                <p>Delancan't</p>
                        </div>
                    </div>
                    <div className="box-perfil-sobre">
                            <p>Gosta de: Vinhos Secos e encorpados,
                            Principalmente de Uvas Malbec e Tannat.</p>
                    </div>
            </div>
            <div className="box-perfil-dados">
                <ul className="box-perfil-lista">
                    <li><p>Idade: 42</p></li>
                    <li><p>E-mail: velvinno@email.com</p></li>
                    <li><p>Telefone: (14) xxxxxx-xxxx</p></li>
                    <li><p>CPF: 12*******91</p></li>  
                    <li><p>Genero: Másculino</p></li>
                    <li><p>Membro desde: 2 de Setembro de 2020</p></li>
                </ul>
            </div>
            <div className="box-perfil-button-voltar-editar">
                  <button><Link to='/pagina-Inicial'><p>Voltar</p></Link></button>
                  <button><Link to='/EditarUsuarios/:id'><p>Editar</p></Link></button>
            </div>
        </div>
    );
}