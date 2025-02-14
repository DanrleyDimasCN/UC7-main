import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiLocal from "../../API/apiLocal";
import { toast } from "react-toastify";

export default function EditarUsuarios() {
    const mudarTela = useNavigate();
    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const token = localStorage.getItem('@token');
    console.log(token);

    useEffect(() => {
        async function consultarDados() {
            const token = localStorage.getItem("@token");
    
            if (!token) {
                toast.warn("Token não encontrado. Por favor, faça login novamente.");
                mudarTela("/login");  
                return;
            }
    
            try {
                
                const resposta = await apiLocal.post('/ConsultarUsuariosUnico', { id }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
    
                if (resposta.data) {
                    setNome(resposta.data.nome || "");
                    setEmail(resposta.data.email || "");
                    setSenha(resposta.data.senha || "");
                } else {
                    toast.warn("Usuário não encontrado.");
                    mudarTela("/");
                }
            } catch (error) {
                toast.error("Erro ao buscar os dados do usuário.");
                console.error("Erro na API:", error);
                mudarTela("/");
            }
        }
    
        if (id) {
            consultarDados();
        } else {
            toast.warn("ID do usuário não fornecido.");
            mudarTela("/");
        }
    }, [id, mudarTela]);   
    async function enviarAlteracao(e) {
        e.preventDefault();

        if (!nome || !email || !senha) {
            toast.error("Preencha todos os campos.");
            return;
        }

        try {
            console.log("Enviando dados para alteração:", {id ,nome, email, senha });
            const resposta = await apiLocal.post('/ConsultarUsuariosUnico', {
                id,
                nome,
                email,
                senha
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            console.log("Resposta da API", resposta);
            toast.success('Cadastro alterado com sucesso!');
            mudarTela('/');
        } catch (err) {
            toast.error('Erro ao comunicar com o servidor.');
            console.error("Erro na API:", err);
        }
    }

    return (
        <div>
            <form onSubmit={enviarAlteracao}>
                <input 
                    type="text"
                    placeholder="Digite o Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <input 
                    type="text"
                    placeholder="Digite o novo E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input 
                    type="password"
                    placeholder="Digite a nova senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
