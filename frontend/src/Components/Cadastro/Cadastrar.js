import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import apiLocal from "../../API/apiLocal"
import { toast } from "react-toastify"
import logo from '../../image/Rectangle11.png'
import back from '../../image/back.svg'

export default function Cadastrar() {


    const mudarTela = useNavigate()
    const [nome, setNome ] = useState('')
    const [email, setEmail ] = useState('')
    const [cpf, setCpf ] = useState('')
    const [senha, setSenha ] = useState('')
    const [confirmeSenha, setConfirmeSenha ] = useState('')
    
    async function CadastroUsuarios(e) {
      try {
        e.preventDefault()

        if(!nome || !email || !cpf || !senha) {
            alert("Campo em Branco")
            return
        }

        if(senha !== confirmeSenha) {
            alert("No campo 'Confirme a sua senha' a senha tem que ser a mesma digitada acima.")
            return
        }

        await apiLocal.post('/CadastrarUsuarios', {
            nome,
            email,
            senha,
            cpf
        })
        toast.success('Cadastro Efetuado com Sucesso', {
            toastId: 'ToastId'
        })
        mudarTela('/')
        
      } catch (err) {
        toast.error('Erro ao se comunicar com o back-end', {
            toastId: 'ToastId'
        })
      }
    }

    return (
        <div className="box-principal-cadastro">
        <div className="box-imagem-logo">
            <img src={logo} alt="" />
        </div>
            <form onSubmit={CadastroUsuarios}>
            <div className="box-p-aviso">
            <Link to='/'><img src={back} alt="Voltar" /></Link>
            <p>Prencha as informações abaixo</p>
            </div>
            <input
            type="text"
            placeholder='Nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            />

            <input
            type="text"
            placeholder='E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <input
            type="text"
            placeholder='CPF'
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            />

            <input
            type="password"
            placeholder='Senha'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            />

            <input
            type="password"
            placeholder='Confirme a sua Senha'
            value={confirmeSenha}
            onChange={(e) => setConfirmeSenha(e.target.value)}
            />

            <div className="box-button-cadastrar"><button type="submit">Registrar</button></div>
            </form>
        </div>
    )
}