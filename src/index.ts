import { Elysia } from "elysia";
import RegistrarUsuarioController from "./adapters/RegistrarUsuarioController";
import RegistrarUsuario from "./core/usuario/service/RegistrarUsuario";
import RepositorioUsuarioMemoria from "./external/memoria/RepositorioUsuarioMemoria";

const app = new Elysia()


const RepositorioUsuario = new RepositorioUsuarioMemoria();
const registrarUsuario = new RegistrarUsuario(RepositorioUsuario);
new RegistrarUsuarioController(app, registrarUsuario);
app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
