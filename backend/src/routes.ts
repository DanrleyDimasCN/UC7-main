import { Router } from 'express';

import { UsuariosControllers } from './Controllers/Usuarios/usuariosControllers'
import { ListaControllers } from './Controllers/Lista/listaControlles';
import { VinhosControllers } from './Controllers/Vinhos/vinhosControllers';
import { AdminControllers } from './Controllers/Administrador/AdminControllers';
import { PaisControllers } from './Controllers/Pais/paisControllers';
import { RegiaoControllers } from './Controllers/Regiao/regiaoControllers';
import { estaAutenticado } from './middleware/estaAutenticado';
import { LoginUsuariosControllers } from './Controllers/Login/LoginUsuariosControllers';

const router = Router();

// Rota - Admnistrador
router.post('/CadastrarAdmin', new AdminControllers().cadastrar_admin)
router.get('/ConsultarAdmin', new AdminControllers().consultarAdmin)

// Rota - Cadastrar Usuarios
router.post('/CadastrarUsuarios',  new UsuariosControllers().cadastro_usuarios)
router.post('/ConsultarUsuariosUnico', estaAutenticado, new UsuariosControllers().consultarUsuariosUnico)
router.get('/ConsultarUsuarios', estaAutenticado, new UsuariosControllers().consultarUsuarios)
router.put('/AlterarDadosUsuarios', estaAutenticado, new UsuariosControllers().alterarDadosUsuarios)
router.delete('/ApagarUsuarios/:id', estaAutenticado, new UsuariosControllers().apagarUsuarios)

// Rota - Login Usuarios
router.post('/LoginUsuarios', new LoginUsuariosControllers().loginUsuarios)
router.get('/VerificaToken', estaAutenticado, new LoginUsuariosControllers().verificaToken)

// Rota - Adicionar pais e consultar pais
router.post('/CadastrarPais', new PaisControllers().cadastrar_pais)
router.get('/ConsultarPais', new PaisControllers().consultar_pais)

// Regiao - adicionar Regiao e consultar regiao
router.post('/CadastrarRegiao', new RegiaoControllers().reg_regiao)
router.get('/ConsultarRegiao', new RegiaoControllers().consultar_regiao)

// // Rota - Registrar Vinhos
router.post('/CadastrarVinhos', new VinhosControllers().registrar_vinhos)
router.get('/ConsultarVinhos', new VinhosControllers().consultarVinhos)

// Rota - Adicionar e consultar Vinhos
router.post('/AdicionarVinho', new ListaControllers().lista_vinhos)
router.get('/ConsultarLista', new ListaControllers().consultarVinhos)


export default router;