import { Elysia } from "elysia";
import ConsultarUsuariosController from "./adapters/ConsultarUsuariosController";
import RegistrarUsuarioController from "./adapters/RegistrarUsuarioController";
import ConsultarUsuarios from "./core/usuario/service/casos-de-uso/ConsultarUsuarios";
import RegistrarUsuario from "./core/usuario/service/casos-de-uso/RegistrarUsuario";
import RepositorioUsuarioPrisma from "./external/RepositorioUsuarioPrisma";

const app = new Elysia()


const RepositorioUsuario = new RepositorioUsuarioPrisma();
const registrarUsuario = new RegistrarUsuario(RepositorioUsuario);
new RegistrarUsuarioController(app, registrarUsuario);

const consultarUsuarios = new ConsultarUsuarios(RepositorioUsuario);
new ConsultarUsuariosController(app, consultarUsuarios);


app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
