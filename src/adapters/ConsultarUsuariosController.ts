import Elysia from "elysia";
import ConsultarUsuarios from "../core/usuario/service/casos-de-uso/ConsultarUsuarios";

export default class ConsultarUsuariosController {
    constructor(
        readonly servidor: Elysia,
        readonly casoDeUso: ConsultarUsuarios
    ) {
        servidor.get('/usuarios', async ({ body }) => {


            return casoDeUso.executar();
        })
    }
}