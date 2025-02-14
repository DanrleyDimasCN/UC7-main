import { createContext, useState } from 'react'
import apiLocal from '../API/apiLocal'
import { toast } from 'react-toastify'

export const AutenticadoContexto = createContext()

export default function AuthProvider({ children }) {

    const [tokenT, setTokenT ] = useState(false)

    const autenticado = !!tokenT

    async function loginEntrada(email, senha) {
        try {
            const resposta = await apiLocal.post('/LoginUsuarios', {
                email,
                senha
            })
            localStorage.setItem('@id', JSON.stringify(resposta.data.id))
            localStorage.setItem('@nome', JSON.stringify(resposta.data.nome))
            localStorage.setItem('@token', JSON.stringify(resposta.data.token))
            setTokenT(true)
        } catch (err) {
            toast.error('Erro ao inserir dados')
        }
    }

    return (
        <AutenticadoContexto.Provider value={({ autenticado, loginEntrada })}>
            { children }
        </AutenticadoContexto.Provider>
    )
}