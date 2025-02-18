import { createContext, useState } from 'react'
import apiLocal from '../API/apiLocal'
import { toast } from 'react-toastify'

export const AutenticadoContexto = createContext()

export default function AuthProvider({ children }) {

    const [tokenT, setTokenT] = useState(false)
    const [token, setToken] = useState('')

    const autenticado = !!tokenT

    async function verificarToken() {
        const token = localStorage.getItem('@token')
        if (!token) {
            setToken(false)
            return
        }
        const tokenT = JSON.parse(token)
        setTokenT(token)
        try {
            const resposta = await apiLocal.get('/VerificaToken', {
                headers: {
                    Authorization: `Bearer ${tokenT}`
                }
            })
            if (resposta.data.id) {
                setToken(true)
                localStorage.setItem('@id', JSON.stringify(resposta.data.id))
                localStorage.setItem('@nome', JSON.stringify(resposta.data.nome))
            }
        } catch (err) {

        }
    }

    async function loginEntrada(email, password) {
        try {
            const resposta = await apiLocal.post('/LoginUsuarios', {
                email,
                password
            })
            localStorage.setItem('@id', JSON.stringify(resposta.data.id))
            localStorage.setItem('@token', JSON.stringify(resposta.data.token))
            localStorage.setItem('@nome', JSON.stringify(resposta.data.nome))
            setTokenT(true)
            
        } catch (err) {
            toast.error('Erro de Comunicação')
            
        }
    }

    return (
        <AutenticadoContexto.Provider value={({ autenticado, loginEntrada, verificarToken, token })}>
            {children}
        </AutenticadoContexto.Provider>
    )

}