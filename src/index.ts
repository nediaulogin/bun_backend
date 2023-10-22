import { Elysia } from "elysia";
import RegistrarUsuarioController from "./adapters/RegistrarUsuarioController";
import RegistrarUsuario from "./core/usuario/service/RegistrarUsuario";
import RepositorioUsuarioPrisma from "./external/RepositorioUsuarioPrisma";

const app = new Elysia()


const RepositorioUsuario = new RepositorioUsuarioPrisma();
const registrarUsuario = new RegistrarUsuario(RepositorioUsuario);
new RegistrarUsuarioController(app, registrarUsuario);
app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
