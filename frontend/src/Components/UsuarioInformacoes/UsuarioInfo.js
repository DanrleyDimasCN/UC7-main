import React, { useState, useEffect } from "react";
import apiLocal from "../../API/apiLocal";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./estilo.usuarioinfo.scss";

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
        <div className="conteinerDashboardGeral">
            <table className="usuariosTabela">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>CPF</th>
                        <th>Editar</th>
                        <th>Apagar</th>
                    </tr>
                </thead>
                <tbody>
                    {dadosUsuarios.length > 0 ? (
                        dadosUsuarios.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.email}</td>
                                <td>{item.registrar?.nome || "Vazio"}</td>
                                <td>
                                    <Link to={`/EditarUsuarios/${item.id}`} onClick={() => console.log(item.id)}>Editar</Link>
                                </td>
                                <td>
                                    <button type="button" onClick={() => apagarUsuarios(item.id)}>
                                        Apagar
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">Carregando usuários...</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}